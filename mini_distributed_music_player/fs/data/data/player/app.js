/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/app.js?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/app.js?entry":
/*!****************************************************************************************!*\
  !*** C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/app.js?entry ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(/*! !../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/manifest-loader.js?path=C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/app.js!./app.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=C:\\Users\\long_\\DevEcoStudioProjects\\Hello\\entry\\src\\main\\js\\default\\app.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/app.js")
var options=$app_script$
 if ($app_script$.__esModule) {

        options = $app_script$.default;
 }
module.exports=new ViewModel(options);

/***/ }),

/***/ "./lib/manifest-plugin.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/build/intermediates/js/debug/jsManifest/default/manifest.json":
/*!**********************************************************************************************************************************************!*\
  !*** ./lib/manifest-plugin.js!C:/Users/long_/DevEcoStudioProjects/Hello/entry/build/intermediates/js/debug/jsManifest/default/manifest.json ***!
  \**********************************************************************************************************************************************/
/*! exports provided: manifest.json, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"manifest.json\":\"content\"}");

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\long_\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=C:\\Users\\long_\\DevEcoStudioProjects\\Hello\\entry\\src\\main\\js\\default\\app.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/src/main/js/default/app.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/long_/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/app.js!C:/Users/long_/DevEcoStudioProjects/Hello/entry/src/main/js/default/app.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  onCreate: function onCreate() {
    console.info("Application onCreate");
  },
  onDestroy: function onDestroy() {
    console.info("Application onDestroy");
  }
};
exports["default"] = _default;
;
(exports["default"] || module.exports).manifest = __webpack_require__(/*! !../../../../../../../AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/lib/manifest-plugin.js!../../../../build/intermediates/js/debug/jsManifest/default/manifest.json */ "./lib/manifest-plugin.js!../../../../../../../../DevEcoStudioProjects/Hello/entry/build/intermediates/js/debug/jsManifest/default/manifest.json");

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ })

/******/ });