'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Tribute = _interopDefault(require('tributejs'));

var VueTribute = {
  name: 'vue-tribute',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      tribute: null
    };
  },
  mounted: function mounted() {
    var $el = this.$slots.default[0].elm;
    this.createTributeInstance($el, this.options);
  },
  watch: {
    options: {
      handler: function handler(newVal) {
        var _this = this;

        this.$nextTick(function () {
          // recreate the tribute instance for newest options
          var $el = _this.$slots.default[0].elm;

          if (_this.tribute instanceof Tribute) {
            if (!_this.tribute.menu) {
              // if menu doesn't exists, tribute.detach will popup one error
              _this.tribute.menu = _this.tribute.createMenu();
              $el.tributeMenu = _this.tribute.menu;
            }

            _this.tribute.detach($el);

            _this.tribute = null;
          }

          _this.createTributeInstance($el, newVal);
        });
      },
      deep: true
    }
  },
  methods: {
    createTributeInstance: function createTributeInstance(el, options) {
      var _this2 = this;

      this.tribute = new Tribute(options);
      this.tribute.attach(el);
      el.addEventListener('tribute-replaced', function (e) {
        _this2.$emit('tribute-replaced', e);
      });
      el.addEventListener('tribute-no-match', function (e) {
        _this2.$emit('tribute-no-match', e);
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'v-tribute'
    }, this.$slots.default);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VueTribute.name, VueTribute);
}

module.exports = VueTribute;
