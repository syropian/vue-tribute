import Tribute from 'tributejs'

const VueTribute = {
  name: 'vue-tribute',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tribute: null
    }
  },
  mounted() {
    const $el = this.$slots.default[0].elm

    this.tribute = new Tribute(this.options)
    this.tribute.attach($el)

    $el.addEventListener('tribute-replaced', e => {
      this.$emit('tribute-replaced', e)
    })

    $el.addEventListener('tribute-no-match', e => {
      this.$emit('tribute-no-match', e)
    })
  },
  render(h) {
    return h(
      'div',
      {
        staticClass: 'v-tribute'
      },
      this.$slots.default
    )
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VueTribute.name, VueTribute)
}

export default VueTribute
