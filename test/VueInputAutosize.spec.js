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
      template: "<input type='text' :value='msg' v-el:test v-input-autosize style='width:200px;' />",
      data(){
        return {
          msg: "Hello"
        }
      }
    })
    setTimeout(function(){
      expect( parseInt(vm.$els.test.style.width, 10) ).toBeLessThan(200);
      done();
    }, 0);
  });
  it("uses the placeholder if there's no content to determine the width", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' placeholder='Hello' v-el:test v-input-autosize style='width:200px;' />",
    })
    setTimeout(() => {
      expect( parseInt(vm.$els.test.style.width, 10) ).toBeLessThan(200);
      done();
    }, 0)
  });
  it("increases the width of the input when text is added", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' :value='msg' v-el:test v-input-autosize />",
      data(){
        return {
          msg: "Hello"
        }
      }
    })
    setTimeout(() => {
      const currentWidth = parseInt(vm.$els.test.style.width, 10);
      vm.$set("msg", "Hello World");
      setTimeout(() => {
        expect( parseInt(vm.$els.test.style.width, 10) ).toBeGreaterThan(currentWidth);
        done();
      }, 0);
    }, 0);
  });
  it("decreases the width of the input when text is removed", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' :value='msg' v-el:test v-input-autosize />",
      data(){
        return {
          msg: "Hello World!"
        }
      }
    })
    setTimeout(() => {
      const currentWidth = parseInt(vm.$els.test.style.width, 10);
      vm.$set("msg", "Hello");
      setTimeout(() => {
        expect( parseInt(vm.$els.test.style.width, 10) ).toBeLessThan(currentWidth);
        done();
      }, 0);
    }, 0);
  });
  it("clamps the input's width to the max width option", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' :value='msg' v-el:test v-input-autosize />",
      data(){
        return {
          msg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      }
    });
    setTimeout(() => {
      expect( parseInt(vm.$els.test.style.width, 10) ).toEqual(500);
      done();
    }, 0);
  });
  it("clamps the input's width to the min width option", (done) => {
    const vm = new Vue({
      el: document.body,
      replace: false,
      template: "<input type='text' :value='msg' v-el:test v-input-autosize />",
      data(){
        return {
          msg: "Hi"
        }
      }
    });
    setTimeout(() => {
      expect( parseInt(vm.$els.test.style.width, 10) ).toEqual(20);
      done();
    }, 0);
  });
})
