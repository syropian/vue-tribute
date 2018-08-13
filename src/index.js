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
    this.createTributeInstance($el, this.options)
  },
  watch: {
    options: {
      handler: function (newVal) {
        this.$nextTick(() => { // recreate the tribute instance for the newest options
          const $el = this.$slots.default[0].elm
          if(this.tribute instanceof Tribute) {
            if (!this.tribute.menu) { // if tribute.menu doesn't exists, tribute.detach will popup one error.
              this.tribute.menu = this.tribute.createMenu()
              $el.tributeMenu = this.tribute.menu
            }
            this.tribute.detach($el)
            this.tribute = null
          }
          this.createTributeInstance($el, newVal)
        })
      },
      deep: true
    }
  },
  methods: {
    createTributeInstance: function (el, options) {
      this.tribute = new Tribute(options)
      this.tribute.attach(el)
      el.addEventListener('tribute-replaced', e => {
        this.$emit('tribute-replaced', e)
      })

      el.addEventListener('tribute-no-match', e => {
        this.$emit('tribute-no-match', e)
      })
    }
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
