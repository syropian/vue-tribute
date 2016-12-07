'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Tribute = _interopDefault(require('tributejs'));

if (!Tribute) {
  throw new Error("[vue-tribute] cannot locate tributejs");
}

exports.install = function (Vue, globalOptions) {
  Vue.directive("tribute", {
    params: ["tributeoptions"],

    tribute: null,

    /** Create a Tribute instance for this element */
    bind: function bind() {
      var _this = this;

      this.tribute = new Tribute(Object.assign({
        values: []
      }, globalOptions, this.params.tributeoptions));

      this.tribute.attach(this.el);

      this.el.addEventListener("tribute-replaced", function (e) {
        _this.vm.$emit("tribute-replaced", e);
      });
      this.el.addEventListener("tribute-no-match", function (e) {
        _this.vm.$emit("tribute-no-match", e);
      });
    },


    /** Set the initial or updated items */
    update: function update(values) {
      this.tribute.append(0, values, /* replace= */true);
    }
  });
};