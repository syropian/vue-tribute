import Vue from "vue";
import VueTribute from "../src";

Vue.use(VueTribute);
var vm = null
beforeEach(() => {
  vm = new Vue({
    el: document.body,
    replace: false,
    template: "<input type='text' :values='items' v-tribute />",
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

  it("triggers the param watcher when the underlying model changes", (done) => {
    spyOn(vm.$options.directives["tribute"].paramWatchers, "values").and.callThrough()

    const newItems = [
      {key: "Kerem Suer", value: "kerem"},
      {key: "Rob Delaney", value: "robdelaney"}
    ]
    vm.$set("items", newItems)

    setTimeout(() => {
      expect(vm.$options.directives["tribute"].paramWatchers.values).toHaveBeenCalled()
      done()
    }, 0)
  })
})
