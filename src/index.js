import Tribute from "tributejs";

const VueTribute = {
  name: "vue-tribute",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  watch: {
    options: {
      immediate: false,
      deep: true,
      handler() {
        if (this.tribute) {
          setTimeout(() => {
            var $el = this.$slots.default[0].elm;
            this.tribute.detach($el);

            setTimeout(() => {
              $el = this.$slots.default[0].elm;
              this.tribute = new Tribute(this.options);
              this.tribute.attach($el);
              $el.tributeInstance = this.tribute;
            }, 0);
          }, 0);
        }
      }
    }
  },
  mounted() {
    if (typeof Tribute === "undefined") {
      throw new Error("[vue-tribute] cannot locate tributejs!");
    }

    const $el = this.$slots.default[0].elm;

    this.tribute = new Tribute(this.options);

    this.tribute.attach($el);

    $el.tributeInstance = this.tribute;

    $el.addEventListener("tribute-replaced", e => {
      e.detail.event.target.dispatchEvent(
        new Event("input", { bubbles: true })
      );
    });
  },
  beforeDestroy() {
    const $el = this.$slots.default[0].elm;

    if (this.tribute) {
      this.tribute.detach($el);
    }
  },
  render(h) {
    return h(
      "div",
      {
        staticClass: "v-tribute"
      },
      this.$slots.default
    );
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(VueTribute.name, VueTribute);
}

export default VueTribute;
