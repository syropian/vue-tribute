import Vue from "vue";
import VueTribute from "../src";

Vue.use(VueTribute);

describe("vue-tribute", () => {
  it("has an install method for Vue.use()", () => {
    expect(typeof VueTribute.install).toEqual("function");
  });
  it("creates the v-tribute directive", () => {
    const vm = new Vue({
      template: "<input type='text' :values='items' v-tribute />",
      data(){
        return {
          items: [
            {key: "Phil Heartman", value: "pheartman"},
            {key: "Gordon Ramsey", value: "gramsey"}
          ]
        }
      }
    }).$mount();

    expect(typeof vm.$options.directives["tribute"]).toEqual("object");
  });
})
