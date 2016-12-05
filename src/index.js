import Tribute from "tributejs"

if (!Tribute) {
  throw new Error("[vue-tribute] cannot locate tributejs")
}

exports.install = function (Vue, globalOptions) {
  Vue.directive("tribute", {
    params: ["tributeoptions"],

    tribute: null,

    /** Create a Tribute instance for this element */
    bind() {
      this.tribute = new Tribute(Object.assign({
        values: [],
      }, globalOptions, this.params.tributeoptions))

      this.tribute.attach(this.el)

      this.el.addEventListener("tribute-replaced", e => {
        this.vm.$emit("tribute-replaced", e)
      })
      this.el.addEventListener("tribute-no-match", e => {
        this.vm.$emit("tribute-no-match", e)
      })
    },

    /** Set the initial or updated items */
    update(values) {
      this.tribute.append(0, values, /* replace= */ true)
    },
  })
}
