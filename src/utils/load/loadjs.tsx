import loadjs from "loadjs";

export const ForLoading = () => {
  loadjs("/assets/js/main.js", {
    before: function (path: any, el: any) {
      el.integrity = "xxxx";
      el.crossOrigin = "anonymous";
    },
    success: function () {
      loadjs.done("bundle");
    },
    error: function (pathsNotFound: any) {
      loadjs("/assets/js/main.js", {
        success: function () {
          loadjs.done("bundle");
        },
      });
    },
  });
};
