import ClipboardJS from "clipboard";
import message from "./reset/mElMessage";

function getInstance(val) {
  const el = document.createElement("button");
  const clipboard = ClipboardJS(el, {
    text() {
      return val;
    },
    container: document.body
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
export function copy({ text, success, error }) {
  const { el, clipboard, clear } = getInstance(text);
  clipboard.on("success", (e) => {
    if (success) {
      clear();
      return success(e);
    }
    clear();
    message.success("复制成功");
  });

  clipboard.on("error", (e) => {
    if (error) {
      clear();
      return error(e);
    }
    clear();
    message.error("复制失败");
  });
  el.click();
}
