import { defineComponent, watch, h, onMounted, PropType, onBeforeUnmount, nextTick, Ref, ref, unref } from 'vue'
import Tribute, { TributeOptions } from 'tributejs'

type Maybe<T> = T | undefined
type MaybeRef<T> = T | Ref<T>

interface TributeElement extends HTMLElement {
  tributeInstance?: Tribute<any>
}

export const VueTribute = defineComponent({
  name: 'vue-tribute',
  props: {
    options: {
      type: Object as PropType<MaybeRef<TributeOptions<any>>>,
      required: true,
    },
  },
  setup(props, context) {
    if (typeof Tribute === 'undefined') {
      throw new Error('[vue-tribute] cannot locate tributejs.')
    }

    const root = ref<HTMLElement>()
    const el = ref<TributeElement>()

    const attachTribute = (el: Ref<Maybe<TributeElement>>, options: MaybeRef<TributeOptions<any>> = props.options) => {
      if (!el.value) return

      let tribute = new Tribute(unref(options))
      tribute.attach(el.value)
      el.value.tributeInstance = tribute
    }

    onMounted(() => {
      el.value = root.value?.childNodes[0] as TributeElement

      if (!el) {
        throw new Error('[vue-tribute] cannot find a suitable element to attach to.')
      }

      attachTribute(el)

      el.value.addEventListener('tribute-replaced', e => {
        e.target?.dispatchEvent(new Event('input', { bubbles: true }))
      })
    })

    const detachTribute = (el: Ref<Maybe<TributeElement>>) => {
      if (!el.value?.tributeInstance) return

      el.value.tributeInstance.detach(el.value)
      el.value.tributeInstance = undefined
      delete el.value.dataset.tribute
    }

    onBeforeUnmount(() => {
      detachTribute(el)
    })

    watch(
      () => props.options,
      async newOptions => {
        if (el.value?.tributeInstance) {
          await nextTick()
          detachTribute(el)
          await nextTick()
          attachTribute(el, { ...newOptions })
        }
      },
      { deep: true }
    )

    return () =>
      h(
        'div',
        { class: 'v-tribute', ref: root },
        [context.slots.default ? context.slots.default()[0] : null].filter(Boolean)
      )
  },
})
