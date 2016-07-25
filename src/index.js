"use strict";

exports.install = function(Vue, options){
  Vue.directive("input-autosize", {
    params: ["value"],
    mirror: null,
    val: " ",
    options: {},
    paramWatchers: {
      value(val, oldVal){
        Vue.nextTick(this.check.bind(this, this.el));
      }
    },
    bind(){
      const defaults = { maxWidth: 500, minWidth: 20, comfortZone: 0 };
      this.options = Object.assign(defaults, options || {});

      this.mirror = document.createElement("span");
      this.mirror.classList.add("vue-input-autosize-mirror");


      this.el.addEventListener("input", this.check.bind(this, this.el), false);
      setTimeout(() => {
        let styles = window.getComputedStyle(this.el, null);
        Object.assign(this.mirror.style, {
          position: "absolute",
          top: "0",
          left: "0",
          width: "auto",
          whiteSpace: "nowrap",
          border: styles.getPropertyValue("border"),
          fontSize: styles.getPropertyValue("font-size"),
          fontFamily: styles.getPropertyValue("font-family"),
          fontWeight: styles.getPropertyValue("font-weight"),
          letterSpacing: styles.getPropertyValue("letter-spacing"),
          padding: styles.getPropertyValue("padding"),
          textTransform: styles.getPropertyValue("text-transform"),
          ariaHidden: true,
          opacity: 0
        });
        document.body.appendChild(this.mirror);
        this.check(this.el);
      }, 0);
    },
    update(newVal, oldVal){
      this.check(this.el);
    },
    check(el){
      this.val = el.value;
      if (!this.val) this.val = el.placeholder || "";
      this.mirror.innerHTML = this.val.replace(/&/g, "&amp;").replace(/\s/g, "&nbsp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      let newWidth = this.mirror.getBoundingClientRect().width + this.options.comfortZone;
      if( newWidth > this.options.maxWidth ){ newWidth = this.options.maxWidth; }
      else if (newWidth < this.options.minWidth){ newWidth = this.options.minWidth; }
      if( newWidth != el.getBoundingClientRect().width ){ el.style.width = `${newWidth}px`; }
    }
  });

}
