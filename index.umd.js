(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, function () { 'use strict';

  exports.install = function (Vue, options) {
    Vue.directive("input-autosize", {
      params: ["value"],
      mirror: null,
      val: " ",
      options: {},
      paramWatchers: {
        value: function value(val, oldVal) {
          Vue.nextTick(this.check.bind(this, this.el));
        }
      },
      bind: function bind() {
        var _this = this;

        var defaults = { maxWidth: 500, minWidth: 20, comfortZone: 0 };
        this.options = Object.assign(defaults, options || {});

        this.mirror = document.createElement("span");
        this.mirror.classList.add("vue-input-autosize-mirror");

        this.el.addEventListener("input", this.check.bind(this, this.el), false);
        setTimeout(function () {
          var styles = window.getComputedStyle(_this.el, null);
          Object.assign(_this.mirror.style, {
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
            width: "auto",
            whiteSpace: "nowrap",
            opacity: 0,
            border: styles.getPropertyValue("border"),
            fontSize: styles.getPropertyValue("font-size"),
            fontFamily: styles.getPropertyValue("font-family"),
            fontWeight: styles.getPropertyValue("font-weight"),
            letterSpacing: styles.getPropertyValue("letter-spacing"),
            padding: styles.getPropertyValue("padding"),
            textTransform: styles.getPropertyValue("text-transform"),
            ariaHidden: true
          });
          document.body.appendChild(_this.mirror);
          _this.check(_this.el);
        }, 0);
      },
      update: function update(newVal, oldVal) {
        this.check(this.el);
      },
      check: function check(el) {
        this.val = el.value;
        if (!this.val) this.val = el.placeholder || "";
        this.mirror.innerHTML = this.val.replace(/&/g, "&amp;").replace(/\s/g, "&nbsp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var newWidth = this.mirror.getBoundingClientRect().width + this.options.comfortZone;
        if (newWidth > this.options.maxWidth) {
          newWidth = this.options.maxWidth;
        } else if (newWidth < this.options.minWidth) {
          newWidth = this.options.minWidth;
        }
        if (newWidth != el.getBoundingClientRect().width) {
          el.style.width = newWidth + "px";
        }
      }
    });
  };

}));