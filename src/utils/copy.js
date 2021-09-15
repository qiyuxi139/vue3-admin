import ClipboardJS from "clipboard";
import message from "./reset/mElMessage";

function getInstance(val, container) {
  const el = document.createElement("button");
  const clipboard = new ClipboardJS(el, {
    text() {
      return val;
    },
    container: typeof container === "object" ? container : document.body
  });
  return {
    el,
    clipboard,
    clear: () => {
      el.remove();
      clipboard.destroy();
    }
  };
}

/**
 * 赋值某个字符串
 * @param {String} text 字符串文本
 */
export default function copy({ text, container, success, error, tips = true }) {
  const { el, clipboard, clear } = getInstance(text, container);
  clipboard.on("success", (e) => {
    success && success(e);
    tips && message.success("复制成功");
    clear();
  });

  clipboard.on("error", (e) => {
    error && error(e);
    tips && message.error("复制失败");
    clear();
  });
  el.click();
}
