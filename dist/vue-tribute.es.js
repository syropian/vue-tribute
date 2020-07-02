import Tribute from 'tributejs';

var VueTribute = {
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
      handler: function handler() {
        var _this = this;

        if (this.tribute) {
          setTimeout(function () {
            var $el = _this.$slots.default[0].elm;

            _this.tribute.detach($el);

            setTimeout(function () {
              $el = _this.$slots.default[0].elm;
              _this.tribute = new Tribute(_this.options);

              _this.tribute.attach($el);

              $el.tributeInstance = _this.tribute;
            }, 0);
          }, 0);
        }
      }
    }
  },
  mounted: function mounted() {
    if (typeof Tribute === "undefined") {
      throw new Error("[vue-tribute] cannot locate tributejs!");
    }

    var $el = this.$slots.default[0].elm;
    this.tribute = new Tribute(this.options);
    this.tribute.attach($el);
    $el.tributeInstance = this.tribute;
    $el.addEventListener("tribute-replaced", function (e) {
      e.target.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    });
  },
  beforeDestroy: function beforeDestroy() {
    var $el = this.$slots.default[0].elm;

    if (this.tribute) {
      this.tribute.detach($el);
    }
  },
  render: function render(h) {
    return h("div", {
      staticClass: "v-tribute"
    }, this.$slots.default);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(VueTribute.name, VueTribute);
}

export default VueTribute;
