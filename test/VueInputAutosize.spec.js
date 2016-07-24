import Vue from "vue";
import VueInputAutosize from "../src";

Vue.use(VueInputAutosize);

describe("vue-input-autosize", () => {
  it("has an install method for Vue.use()", () => {
    expect(typeof VueInputAutosize.install).toEqual("function");
  });
  it("creates the v-input-autosize directive", () => {
    const vm = new Vue({
      template: "<input type='text'>",
    }).$mount();

    expect(typeof vm.$options.directives["input-autosize"]).toEqual("object");
  });
  it("sets the proper width according to the content of the input", () => {
    const vm = new Vue({
      template: "<input type='text' value='Hello' v-el:test />"
    }).$mount();
    setTimeout(() => {
      expect( Math.round(vm.$els.test.getBoundingClientRect().width) ).toEqual(33);
      done();
    }, 0)
  });
  it("uses the placeholder if there's no content to determine the width", () => {
    const vm = new Vue({
      template: "<input type='text' value='' placeholder='Hello' v-el:test />"
    }).$mount();
    setTimeout(() => {
      expect( Math.round(vm.$els.test.getBoundingClientRect().width) ).toEqual(33);
      done();
    }, 0)
  });
  it("increases the width of the input when text is added", () => {
    const vm = new Vue({
      template: "<input type='text' v-model='msg' v-el:test />",
      data(){
        return {
          msg: "Hello"
        }
      }
    }).$mount();
    setTimeout(() => {
      vm.msg = "Hello World";
      expect( Math.round(vm.$els.test.getBoundingClientRect().width) ).toEqual(66);
    }, 0);
  });
  it("decreases the width of the input when text is removed", () => {
    const vm = new Vue({
      template: "<input type='text' v-model='msg' v-el:test />",
      data(){
        return {
          msg: "Hello"
        }
      }
    }).$mount();
    setTimeout(() => {
      vm.msg = "Hey!";
      expect( Math.round(vm.$els.test.getBoundingClientRect().width) ).toEqual(30);
      done();
    }, 0);
  });
  it("clamps the input's width to the max width option", () => {
    const vm = new Vue({
      template: "<input type='text' v-model='msg' v-el:test />",
      data(){
        return {
          msg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      }
    }).$mount();
    setTimeout(() => {
      expect( Math.round(vm.$els.test.getBoundingClientRect().width) ).toEqual(500);
      done();
    }, 0);
  });
  it("clamps the input's width to the min width option", () => {
    const vm = new Vue({
      template: "<input type='text' v-model='msg' v-el:test />",
      data(){
        return {
          msg: "Hi"
        }
      }
    }).$mount();
    setTimeout(() => {
      expect( Math.round(vm.$els.test.getBoundingClientRect().width) ).toEqual(20);
      done();
    }, 0);
  });
})
