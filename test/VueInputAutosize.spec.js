import Vue from "vue";
import VueInputAutosize from "../src";

Vue.use(VueInputAutosize);

describe("vue-input-autosize", () => {

  it("has an install method for Vue.use()", () => {
    expect(typeof VueInputAutosize.install).toEqual("function");
  });
  it("creates the v-input-autosize directive", () => {
    const vm = new Vue({
      template: "<input type='text' v-input-autosize />",
    }).$mount();

    expect(typeof vm.$options.directives["input-autosize"]).toEqual("object");
  });
  it("sets the proper width according to the content of the input", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' v-model='msg' v-el:test v-input-autosize style='font-size:12px;' />",
      data(){
        return {
          msg: "Hello"
        }
      }
    })
    setTimeout(function(){
      expect( Math.round(parseInt(vm.$els.test.style.width, 10)) ).toEqual(26);
      done();
    }, 0);
  });
  it("uses the placeholder if there's no content to determine the width", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' placeholder='Hello' v-el:test v-input-autosize style='font-size:12px;' />",
    })
    setTimeout(() => {
      expect( Math.round(parseInt(vm.$els.test.style.width, 10)) ).toEqual(26);
      done();
    }, 0)
  });
  it("increases the width of the input when text is added", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' v-model='msg' v-el:test v-input-autosize style='font-size:12px;' />",
      data(){
        return {
          msg: "Hello"
        }
      }
    })
    vm.msg = "Hello World";
    setTimeout(() => {
      expect( Math.round(parseInt(vm.$els.test.style.width, 10)) ).toBeGreaterThan(26);
      done();
    }, 0);
  });
  it("decreases the width of the input when text is removed", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' v-model='msg' v-el:test v-input-autosize style='font-size:12px;' />",
      data(){
        return {
          msg: "Hello"
        }
      }
    });
    vm.msg = "Hey!";
    setTimeout(() => {
      expect( Math.round(parseInt(vm.$els.test.style.width, 10)) ).toBeLessThan(26);
      done();
    }, 0);
  });
  it("clamps the input's width to the max width option", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' v-model='msg' v-el:test v-input-autosize style='font-size:12px;' />",
      data(){
        return {
          msg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      }
    });
    setTimeout(() => {
      expect( Math.round(parseInt(vm.$els.test.style.width, 10)) ).toEqual(500);
      done();
    }, 0);
  });
  it("clamps the input's width to the min width option", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' v-model='msg' v-el:test v-input-autosize style='font-size:12px;' />",
      data(){
        return {
          msg: "Hi"
        }
      }
    });
    setTimeout(() => {
      expect( Math.round(parseInt(vm.$els.test.style.width, 10)) ).toEqual(20);
      done();
    }, 0);
  });
})
