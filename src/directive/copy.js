import ClipboardJS from "clipboard";
import { omit } from "lodash";

export default {
  beforeMount(el, binding) {
    console.log("beforeMount", el, binding, binding.arg);
    const { arg, value } = binding;
    if (arg === "success") {
      el.vClipboardSuccess = value;
    } else if (arg === "error") {
      el.vClipboardError = value;
    } else {
      const clipboard = new ClipboardJS(el, {
        text() {
          return binding.value;
        }
      });

      clipboard.on("success", (e) => {
        const cb = el.vClipboardSuccess;
        cb && cb(e);
      });
      clipboard.on("error", (e) => {
        const cb = el.vClipboardError;
        cb && cb(e);
      });

      el.cClipboard = clipboard;
    }
  },
  updated(el, binding) {
    const { arg, value } = binding;
    if (arg === "success") {
      el.vClipboardSuccess = value;
    } else if (arg === "error") {
      el.vClipboardError = value;
    } else {
      el._v_clipboard.text = function () {
        return value;
      };
      el._v_clipboard.action = function () {
        return arg === "cut" ? "cut" : "copy";
      };
    }
  },
  unmounted(el, binding) {
    const { arg } = binding;
    if (arg === "success") {
      omit(el, ["vClipboardSuccess"]);
    } else if (arg === "error") {
      omit(el, ["vClipboardError"]);
    } else {
      el.cClipboard?.destroy();
      omit(el, ["cClipboard"]);
    }
  },
  mounted(el, binding, vnode, preVnode) {
    console.log(el, binding, vnode, preVnode, "自定义指令参数");
  }
};
