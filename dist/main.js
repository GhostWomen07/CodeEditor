const { webpack } = require("webpack");


var __webpack_modules__ = {

  "./src/message.js": (module) => {
    module.exports = 'Hi there!';
  }
};

function __webpack_require__(moduleId) {
var moduleFn=webpack_modules[moduleId];
 
  var module = { exports: {}}
	moduleFn(module);
  return module.exports;
}

const message=webpack_require("./src/message.js")
console.log(message);
