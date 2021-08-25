// 重写elment-plus的message
import { ElMessage } from "element-plus";

export function getMElMessage() {
  let mIntance = null;
  const resetMessage = (options) => {
    if (mIntance) {
      mIntance.close(); //关闭
    }
    mIntance = ElMessage(options);
  };
  ["error", "success", "info", "warning"].forEach((type) => {
    resetMessage[type] = (options) => {
      if (typeof options === "string") {
        options = {
          message: options
        };
      }
      options.type = type;
      return resetMessage(options);
    };
  });
  return resetMessage;
}

export default getMElMessage();
