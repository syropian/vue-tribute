import Tribute from 'tributejs';

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
    var _this = this;

    var $el = this.$slots.default[0].elm;
    this.tribute = new Tribute(this.options);
    this.tribute.attach($el);
    $el.addEventListener('tribute-replaced', function (e) {
      _this.$emit('tribute-replaced', e);
    });
    $el.addEventListener('tribute-no-match', function (e) {
      _this.$emit('tribute-no-match', e);
    });
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

export default VueTribute;
