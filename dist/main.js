/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 0;\\n    width: 1200px;\\n    height: 600px;\\n}\\n\\n.topBar {\\n    display:flex;\\n    flex-direction: row;\\n    align-items: center;\\n    height: 80px;\\n    border: 1px solid red;\\n}\\n\\nmain {\\n    display: flex;\\n    flex-direction: row;\\n    border: 1px solid violet;\\n    height: 100%;\\n}\\n\\n.navBar {\\n    display:flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    width: 200px;\\n    border: 1px solid yellow;\\n}\\n\\n.navBarOptions {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-evenly;\\n    height: 200px;\\n}\\n\\n.mainDisplay {\\n    display:flex;\\n    flex-direction: column;\\n    width: 100%;\\n    border: 1px solid black;\\n}\\n\\n.todoItem, .todoLeftSide, .todoRightSide {\\n    display: flex;\\n    flex-direction: row;\\n}\\n\\n.todoLeftSide, .todoRightSide {\\n    width: 50%;\\n}\\n\\n.todoLeftSide {\\n    justify-content: flex-start;\\n}\\n\\n.todoRightSide {\\n    justify-content: flex-end;\\n}\\n\\n.newProjectModal, .newTaskModal {\\n    position: fixed;\\n    z-index: 1; /* Sit on top */\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background-color: rgba(0,0,0,0.65); \\n    opacity: 1;\\n    transition: all 0.4s;\\n    visibility: visible;\\n}\\n\\n.newProjectForm, .newTaskForm {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10% auto; /* 15% from the top and centered */\\n    padding: 20px;\\n    border: 1px solid #888;\\n    width: 20%; \\n    border-radius: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitNewProject\": () => (/* binding */ submitNewProject),\n/* harmony export */   \"makeNewTask\": () => (/* binding */ makeNewTask),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\nfunction submitNewProject() {\n\n    let newProjectForm = document.querySelector('.newProjectForm');\n    let title = newProjectForm[0].value;\n    let description = newProjectForm[1].value;\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, description));\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderSingleNewProjectItem)(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects.at(-1));\n    \n}\n\nfunction makeNewTask() {\n\n    let todos = document.querySelector('.todos');\n    let target = document.querySelector('.projectTitle');\n\n    let newTaskForm = document.querySelector('.newTaskForm');\n    let priority = newTaskForm[0].value;\n    let title = newTaskForm[1].value;\n    let dueDate = newTaskForm[2].value;\n    let details = newTaskForm[3].value;\n\n    if (target != null) {\n\n        let index = _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(project => project.title == target.textContent);\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].TODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO(priority, false, title, Date(), details));\n        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderSingleTODO)(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].TODOlist.at(-1));\n        \n    } else {\n\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.mainTODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO(priority, false, title, Date(), details));\n        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderSingleTODO)(_index_js__WEBPACK_IMPORTED_MODULE_0__.mainTODOlist.at(-1));\n\n    }\n}\n\nfunction deleteProject(e) {\n\n    let targetProject = _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.find( (project) => project.title == e.target.previousElementSibling.textContent );\n    let index = _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(project => project.title == targetProject.title);\n    \n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice([index], 1);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/actions.js?");

/***/ }),

/***/ "./src/firstLoad.js":
/*!**************************!*\
  !*** ./src/firstLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstLoad\": () => (/* binding */ firstLoad)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst firstLoad = () => {\n    \n    let date = Date();\n\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainTODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO('High', true,'Do the dishes', date,'Remember to use the sponge!'));\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainTODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO('Medium', false,'Wash the car', date));\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainTODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO('Low', true,'Pet the cat', date,'Miau'));\n\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.Project('Vacation', 'Going to Rome!'));\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.Project('Buy new car', 'I like the white one'));\n    \n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[0].TODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO('Medium', true,'Buy tickets', date,'Should buy on despegar.com'));\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[0].TODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO('High', true,'Check prices]', date,'Check on google flights'));\n\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[1].TODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO('High', true,'Check model T', date,'I really want a Tesla'));\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[1].TODOlist.push(new _index_js__WEBPACK_IMPORTED_MODULE_0__.singleTODO('Low', true,'Buy the goddam car', date,'Oh yeah!'));\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/firstLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainTODOlist\": () => (/* binding */ mainTODOlist),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"singleTODO\": () => (/* binding */ singleTODO)\n/* harmony export */ });\n/* harmony import */ var _firstLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstLoad */ \"./src/firstLoad.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nlet mainTODOlist = [];\nlet projects = [];\n\nclass Project {\n    constructor(title, description) {\n        this.title = title;\n        this.description = description;\n        this.TODOlist = [];\n    }\n};\n\nclass singleTODO {\n    constructor(priority, checked, title, dueDate, details) {\n        this.priority = priority;\n        this.checked = checked;\n        this.title = title;\n        this.dueDate = dueDate;\n        this.details = details;\n    }\n};\n\n(0,_firstLoad__WEBPACK_IMPORTED_MODULE_0__.firstLoad)();\n\n(0,_render__WEBPACK_IMPORTED_MODULE_1__.firstRender)();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstRender\": () => (/* binding */ firstRender),\n/* harmony export */   \"renderNewProjectItem\": () => (/* binding */ renderNewProjectItem),\n/* harmony export */   \"renderSingleNewProjectItem\": () => (/* binding */ renderSingleNewProjectItem),\n/* harmony export */   \"renderTODOList\": () => (/* binding */ renderTODOList),\n/* harmony export */   \"renderSingleTODO\": () => (/* binding */ renderSingleTODO)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.js */ \"./src/actions.js\");\n\n\n\nconst firstRender = () => {\n\n    let projectItems = document.querySelector('.projectItems');\n\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(e => {\n        projectItems.appendChild(renderNewProjectItem(e));\n    });\n    \n    prepareListeners();\n    renderTODOList(_index_js__WEBPACK_IMPORTED_MODULE_0__.mainTODOlist);\n\n}\n\nconst renderSingleNewProjectItem = (e) => {\n\n    let projectItems = document.querySelector('.projectItems');\n    projectItems.appendChild(renderNewProjectItem(e));\n}\n\nconst renderNewProjectItem = (e) => {\n\n    let projectItem = document.createElement('div');\n    projectItem.classList.add('projectItem');\n\n    let projectTitle = document.createElement('div');\n    projectTitle.textContent = e.title;\n    projectTitle.addEventListener('click', renderProject);\n\n    let deleteProjectButton = document.createElement('button');\n    deleteProjectButton.classList.add('deleteProjectButton');\n    deleteProjectButton.textContent = 'del';\n    deleteProjectButton.addEventListener('click', _actions_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject);\n    deleteProjectButton.addEventListener('click', deleteProjectDOM);\n\n    projectItem.appendChild(projectTitle);\n    projectItem.appendChild(deleteProjectButton);\n    \n    return projectItem;\n\n}\n\nconst deleteProjectDOM = (e) => {\n    \n    e.target.parentNode.parentNode.removeChild(e.target.parentNode);\n}\n\nconst prepareListeners = () => {\n    \n    const home = document.querySelector('.home');\n    home.addEventListener('click', renderHome);\n\n    const newProjectButton = document.querySelector('.newProjectButton');\n    newProjectButton.addEventListener('click', showNewProjectModal);\n}\n\nconst showNewProjectModal = () => {\n    \n    const newProjectModal = document.createElement('div');\n    const form = document.createElement('form');\n    const titleLabel = document.createElement('label');\n    const titleInput = document.createElement('input');\n    const descriptionLabel = document.createElement('label');\n    const descriptionInput = document.createElement('input');\n    const submitButton = document.createElement('button');\n\n    newProjectModal.classList.add('newProjectModal');\n    form.classList.add('newProjectForm');\n    form.onsubmit = () => {return false};\n    titleLabel.textContent = 'Title:';\n    descriptionLabel.textContent = 'Description:';\n    submitButton.textContent = 'Submit new project';\n    submitButton.addEventListener('click', _actions_js__WEBPACK_IMPORTED_MODULE_1__.submitNewProject);\n\n    form.appendChild(titleLabel);\n    form.appendChild(titleInput);\n    form.appendChild(descriptionLabel);\n    form.appendChild(descriptionInput);\n    form.appendChild(submitButton);\n    newProjectModal.appendChild(form);\n    document.querySelector('body').appendChild(newProjectModal);\n\n    window.onclick = function(event) {\n        if (event.target == newProjectModal) {\n            newProjectModal.style.opacity = \"0\";\n            newProjectModal.style.visibility = \"hidden\";\n            \n            setTimeout(() => {\n                document.querySelector('body').removeChild(newProjectModal);\n            }, 200);\n        }\n    }\n}\n\nconst showNewTaskModal = () => {\n    \n    const newTaskModal = document.createElement('div');\n    const form = document.createElement('form');\n    const priority = document.createElement('input');\n    const title = document.createElement('input');\n    const dueDate = document.createElement('input');\n    const details = document.createElement('input');\n    const submitButton = document.createElement('button');\n\n    newTaskModal.classList.add('newTaskModal');\n    form.classList.add('newTaskForm');\n    form.onsubmit = () => {return false};\n    priority.placeholder = 'Priority';\n    title.placeholder = 'Title';\n    dueDate.placeholder = 'Date';\n    details.placeholder = 'Details';\n    submitButton.textContent = 'Submit new task';\n    submitButton.addEventListener('click', _actions_js__WEBPACK_IMPORTED_MODULE_1__.makeNewTask);\n\n    form.appendChild(priority);\n    form.appendChild(title);\n    form.appendChild(dueDate);\n    form.appendChild(details);\n    form.appendChild(submitButton);\n    newTaskModal.appendChild(form);\n    document.querySelector('body').appendChild(newTaskModal);\n\n    window.onclick = function(event) {\n        if (event.target == newTaskModal) {\n            newTaskModal.style.opacity = \"0\";\n            newTaskModal.style.visibility = \"hidden\";\n            \n            setTimeout(() => {\n                document.querySelector('body').removeChild(newTaskModal);\n            }, 200);\n        }\n    }\n}\n\nconst clearMainDisplay = () => {\n\n    const main = document.querySelector('main');\n    const mainDisplay = document.createElement('div');\n    mainDisplay.classList.add('mainDisplay');\n    main.removeChild(document.querySelector('.mainDisplay'));\n    main.appendChild(mainDisplay);\n\n}\n\nconst renderHome = () => {\n\n    clearMainDisplay();\n    renderTODOList(_index_js__WEBPACK_IMPORTED_MODULE_0__.mainTODOlist);\n}\n\nconst renderProject = (e) => {\n\n    clearMainDisplay();\n    const targetProject = _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.find( (project) => project.title == e.target.textContent );\n\n    let mainDisplay = document.querySelector('.mainDisplay');\n\n    let projectItem = document.createElement('div');\n    let projectHeader = document.createElement('div');\n    let projectTitle = document.createElement('div');\n    let projectDescription = document.createElement('div');\n\n    projectItem.classList.add('projectItem');\n    projectHeader.classList.add('projectHeader');\n    projectTitle.classList.add('projectTitle');\n    projectDescription.classList.add('projectDescription');\n\n    projectTitle.textContent = targetProject.title;\n    projectDescription.textContent = targetProject.description;\n\n    projectHeader.appendChild(projectTitle);\n    projectHeader.appendChild(projectDescription);\n    projectItem.appendChild(projectHeader);\n\n    mainDisplay.appendChild(projectItem);\n\n    renderTODOList(targetProject.TODOlist);\n        \n};\n\nconst renderTODOList = (target) => {\n\n    let todos = document.createElement('div');\n    todos.classList.add('todos');\n    \n    target.forEach(e => {\n        todos.appendChild(renderTODOItem(e));\n    });\n\n    document.querySelector('.mainDisplay').appendChild(todos);\n    renderNewTaskButton();\n    \n}\n\nconst renderSingleTODO = (e) => {\n\n    let todos = document.querySelector('.todos');\n    todos.appendChild(renderTODOItem(e));\n\n}\n\nconst renderTODOItem = (e) => {\n\n    let todoItem = document.createElement('div');\n    let leftSide = document.createElement('div');\n    let rightSide = document.createElement('div');\n    let priority = document.createElement('div');\n    let checkbox = document.createElement('input');\n    let label = document.createElement('label');\n    let dueDate = document.createElement('div');\n    let detailsButton = document.createElement('button');\n    let editButton = document.createElement('button');\n    let deleteButton = document.createElement('button');\n\n    todoItem.classList.add('todoItem');\n    leftSide.classList.add('todoLeftSide');\n    rightSide.classList.add('todoRightSide');\n    \n    priority.classList.add('priority');\n    priority.classList.add(e.priority);\n    priority.textContent = e.priority; //Delete this when style is added\n\n    checkbox.type = 'checkbox';\n    checkbox.classList.add('checkbox');\n    checkbox.textContent = e.checkbox;\n\n    label.for = 'todoExample';\n    label.textContent = e.title;\n\n    dueDate.classList.add('dueDate');\n    dueDate.textContent = e.dueDate;\n\n    detailsButton.classList.add('detailsButton');\n    detailsButton.textContent = 'Details';\n\n    editButton.classList.add('editButton');\n    editButton.textContent = 'Edit';\n\n    deleteButton.classList.add('deleteButton');\n    deleteButton.textContent = 'Delete';\n\n    leftSide.appendChild(priority);\n    leftSide.appendChild(checkbox);\n    leftSide.appendChild(label);\n    rightSide.appendChild(dueDate);\n    rightSide.appendChild(detailsButton);\n    rightSide.appendChild(editButton);\n    rightSide.appendChild(deleteButton);\n    todoItem.appendChild(leftSide);\n    todoItem.appendChild(rightSide);\n\n    return todoItem;\n}\n\nconst renderNewTaskButton = () => {\n\n    let newTaskButtonContainer = document.createElement('div');\n    let newTaskButton = document.createElement('button') ;\n    let newTaskText = document.createElement('div');\n\n    newTaskButtonContainer.classList.add('newTaskButtonContainer');\n    newTaskButton.classList.add('newTaskButton');\n    newTaskText.classList.add('newTaskText');\n\n    newTaskButton.textContent = '+';\n    newTaskText.textContent = 'Add new task';\n    newTaskButtonContainer.addEventListener('click', showNewTaskModal);\n\n    newTaskButtonContainer.appendChild(newTaskButton);\n    newTaskButtonContainer.appendChild(newTaskText);\n\n    document.querySelector('.mainDisplay').appendChild(newTaskButtonContainer);\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;