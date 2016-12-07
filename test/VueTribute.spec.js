import Vue from "vue";
import VueTribute from "../src";

Vue.use(VueTribute);
var vm = null
beforeEach(() => {
  vm = new Vue({
    el: document.body,
    replace: false,
    template: `<input type='text'
      v-tribute='items'
      :tributeoptions='{trigger: "#"}'
    />`,
    data(){
      return {
        items: [
          {key: "Phil Heartman", value: "pheartman"},
          {key: "Gordon Ramsey", value: "gramsey"}
        ]
      }
    }
  })
})
describe("vue-tribute", () => {
  it("has an install method for Vue.use()", () => {
    expect(typeof VueTribute.install).toEqual("function")
  })

  it("creates the v-tribute directive", () => {
    expect(typeof vm.$options.directives["tribute"]).toEqual("object")
  })

  it("supports tribute options", () => {
    expect(vm._directives[0].tribute.collection[0].trigger).toEqual("#")
  })

  it("updates the items when the underlying model changes", (done) => {

    const directive = vm._directives[0]
    expect(directive.tribute.collection[0].values).toEqual(vm.items)

    const newItems = [
      {key: "Kerem Suer", value: "kerem"},
      {key: "Rob Delaney", value: "robdelaney"}
    ]
    vm.$set("items", newItems)

    Vue.nextTick(() => {
      expect(directive.tribute.collection[0].values).toEqual(newItems)
      done()
    })
  })
})
