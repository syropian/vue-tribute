var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { defineComponent, ref, onMounted, onBeforeUnmount, watch, nextTick, h, unref } from "vue";
import Tribute from "tributejs";
const VueTribute = defineComponent({
  name: "vue-tribute",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  setup(props, context) {
    if (typeof Tribute === "undefined") {
      throw new Error("[vue-tribute] cannot locate tributejs.");
    }
    const root = ref();
    const el = ref();
    const attachTribute = (el2, options = props.options) => {
      if (!el2.value)
        return;
      let tribute = new Tribute(unref(options));
      tribute.attach(el2.value);
      el2.value.tributeInstance = tribute;
    };
    onMounted(() => {
      var _a;
      el.value = (_a = root.value) == null ? void 0 : _a.childNodes[0];
      if (!el) {
        throw new Error("[vue-tribute] cannot find a suitable element to attach to.");
      }
      attachTribute(el);
      el.value.addEventListener("tribute-replaced", (e) => {
        var _a2;
        (_a2 = e.target) == null ? void 0 : _a2.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
    const detachTribute = (el2) => {
      var _a;
      if (!((_a = el2.value) == null ? void 0 : _a.tributeInstance))
        return;
      el2.value.tributeInstance.detach(el2.value);
      el2.value.tributeInstance = void 0;
      delete el2.value.dataset.tribute;
    };
    onBeforeUnmount(() => {
      detachTribute(el);
    });
    watch(() => props.options, async (newOptions) => {
      var _a;
      if ((_a = el.value) == null ? void 0 : _a.tributeInstance) {
        await nextTick();
        detachTribute(el);
        await nextTick();
        attachTribute(el, __spreadValues({}, newOptions));
      }
    }, { deep: true });
    return () => h("div", { class: "v-tribute", ref: root }, [context.slots.default ? context.slots.default()[0] : null].filter(Boolean));
  }
});
const install = (app) => {
  app.component(VueTribute.name, VueTribute);
};
VueTribute.install = install;
export { VueTribute, VueTribute as default };
