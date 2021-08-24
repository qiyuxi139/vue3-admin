import EXIF from "exif-js";

export default {
  getOrientation: (file) => {
    return new Promise((resolve) => {
      EXIF.getData(file, function () {
        // 获取图片携带exif信息api
        console.log("33", this);
        const orient = EXIF.getTag(this, "Orientation");
        // 获取exif信息中具体orientation的api
        resolve(orient);
      });
    });
  },

  dataURLtoFile: (dataurl, filename) => {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
      type: mime
    });
  },

  rotateImage: (image, width, height) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.save();
    canvas.width = height;
    canvas.height = width;
    ctx.rotate((90 * Math.PI) / 180);
    ctx.drawImage(image, 0, -height);
    ctx.restore();
    return canvas.toDataURL("image/jpeg");
  }
};
