/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab_webpack/./node_modules/bootstrap/dist/css/bootstrap.css?");

/***/ }),

/***/ "./src/styles/sass/styles.scss":
/*!*************************************!*\
  !*** ./src/styles/sass/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab_webpack/./src/styles/sass/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_book_comp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/book_comp.js */ \"./src/js/book_comp.js\");\n/* harmony import */ var _js_book_comp_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_book_comp_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_gnome_comp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/gnome_comp.js */ \"./src/js/gnome_comp.js\");\n/* harmony import */ var _js_gnome_comp_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_gnome_comp_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_gnome_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/gnome.js */ \"./src/js/gnome.js\");\n/* harmony import */ var _js_gnome_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_gnome_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_person_comp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/person_comp.js */ \"./src/js/person_comp.js\");\n/* harmony import */ var _js_person_comp_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_person_comp_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_p1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/p1.js */ \"./src/js/p1.js\");\n/* harmony import */ var _js_p1_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_p1_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_p2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/p2.js */ \"./src/js/p2.js\");\n/* harmony import */ var _js_p2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_p2_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_p3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/p3.js */ \"./src/js/p3.js\");\n/* harmony import */ var _js_p3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_p3_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _js_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/styles */ \"./src/js/styles.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://lab_webpack/./src/index.js?");

/***/ }),

/***/ "./src/js/book_comp.js":
/*!*****************************!*\
  !*** ./src/js/book_comp.js ***!
  \*****************************/
/***/ (() => {

eval("class bDisplay extends HTMLElement{\r\n    constructor(){\r\n        super();\r\n    }\r\n\r\n    connectedCallback() {\r\n        const shadowDOM = this.attachShadow({ mode: \"open\" });\r\n        const link = document.createElement(\"link\");\r\n        shadowDOM.appendChild(link);\r\n        const card = document.createElement(\"div\");\r\n        const style = document.createElement(\"style\");\r\n        style.appendChild(document.createTextNode(\".book-card2:hover{box-shadow: 7px 7px 20px red;}\"));\r\n        style.appendChild(document.createTextNode(\".book-card:hover{box-shadow: 3px 3px 10px white;}\"));\r\n        shadowDOM.appendChild(style);\r\n        if(this.getAttribute(\"type\")==2){\r\n            card.setAttribute(\"class\",\"book-card2\");\r\n            card.style=\"width: 50%;height: 50%;margin-bottom: 30px;\";\r\n        }else{\r\n            card.setAttribute(\"class\",\"book-card\");\r\n            card.style=\"width: 100%;height: 100%;margin-bottom: 30px;\";\r\n        }\r\n        shadowDOM.appendChild(card);\r\n\r\n        const image = document.createElement(\"img\");\r\n        image.setAttribute(\"src\",this.getAttribute(\"src\"));\r\n        image.setAttribute(\"class\",\"book-card-image\");\r\n        image.style=\"width: 100%;height: 90%;\";\r\n        card.appendChild(image);\r\n\r\n        const title = document.createElement(\"p\");\r\n        title.innerText=\"Titulo: \"+this.getAttribute(\"title\");\r\n        title.setAttribute(\"class\",\"book-card-title\");\r\n        title.style=\"font-size: small;color:white;padding-left: 5px;\";\r\n        card.appendChild(title);\r\n\r\n        const author = document.createElement(\"p\");\r\n        author.innerText=\"Autor: \"+this.getAttribute(\"author\");\r\n        author.setAttribute(\"class\",\"book-card-author\");\r\n        author.style=\"font-size: small;color:white;padding-left: 5px;\";\r\n        card.appendChild(author);\r\n    }\r\n\r\n}\r\ncustomElements.define(\"my-display\", bDisplay);\n\n//# sourceURL=webpack://lab_webpack/./src/js/book_comp.js?");

/***/ }),

/***/ "./src/js/gnome.js":
/*!*************************!*\
  !*** ./src/js/gnome.js ***!
  \*************************/
/***/ (() => {

eval("const buble1 = document.getElementById(\"gnome_buble\");\r\nconst buble2 = document.getElementById(\"gb1\");\r\nif(document.getElementById(\"biblio_gnome\")!=null){\r\n  document.getElementById(\"biblio_gnome\").addEventListener(\r\n      \"mouseover\",\r\n      (event) => {\r\n          buble1.style.backgroundColor = \"white\";\r\n          buble2.style.backgroundColor = \"white\";\r\n        setTimeout(() => {\r\n          buble1.style.backgroundColor = \"black\";\r\n          buble2.style.backgroundColor = \"black\";\r\n        }, 2000);\r\n      },\r\n      false\r\n    );\r\n}\n\n//# sourceURL=webpack://lab_webpack/./src/js/gnome.js?");

/***/ }),

/***/ "./src/js/gnome_comp.js":
/*!******************************!*\
  !*** ./src/js/gnome_comp.js ***!
  \******************************/
/***/ (() => {

eval("class Gnome extends HTMLElement{\r\n    constructor(){\r\n        super();\r\n    }\r\n\r\n    connectedCallback() {\r\n        const shadowDOM = this.attachShadow({ mode: \"open\" });\r\n        const link = document.createElement(\"link\");\r\n        shadowDOM.appendChild(link);\r\n        const gnome = document.createElement(\"div\");\r\n        gnome.setAttribute(\"class\", \"gnome_css\");\r\n        gnome.style=\"color: white; position: relative; left: 400px; bottom: 70px;\";\r\n        shadowDOM.appendChild(gnome);\r\n\r\n        const hat = document.createElement(\"div\");\r\n        hat.setAttribute(\"class\", \"gnome_hat\");\r\n        hat.innerText=\"/\\\\\";\r\n        hat.style=\"position: relative; left: 15px;\";\r\n        gnome.appendChild(hat);\r\n\r\n        const head = document.createElement(\"div\");\r\n        head.setAttribute(\"class\", \"gnome_head\");\r\n        head.innerText=\"( ͡° ᴥ ͡°)\";\r\n        gnome.appendChild(head);\r\n\r\n        const body = document.createElement(\"div\");\r\n        body.setAttribute(\"class\", \"gnome_body\");\r\n        body.innerText=\"/ ## \\\\\";\r\n        gnome.appendChild(body);\r\n\r\n        const feet = document.createElement(\"div\");\r\n        feet.setAttribute(\"class\", \"gnome_feet\");\r\n        feet.innerText=\"##\";\r\n        feet.style=\"position: relative;left: 9px;\";\r\n        gnome.appendChild(feet);\r\n    }\r\n\r\n}\r\ncustomElements.define(\"my-gnome\", Gnome);\r\n\n\n//# sourceURL=webpack://lab_webpack/./src/js/gnome_comp.js?");

/***/ }),

/***/ "./src/js/p1.js":
/*!**********************!*\
  !*** ./src/js/p1.js ***!
  \**********************/
/***/ (() => {

eval("if(document.getElementById('p1')!=null){\r\n    window.addEventListener(\"load\", (event) => {\r\n        setTimeout(() => {\r\n            window.location.href=\"p2.html\";\r\n        }, 9000);\r\n    });\r\n}\n\n//# sourceURL=webpack://lab_webpack/./src/js/p1.js?");

/***/ }),

/***/ "./src/js/p2.js":
/*!**********************!*\
  !*** ./src/js/p2.js ***!
  \**********************/
/***/ (() => {

eval("if(document.getElementById('p2')!=null){\r\n    const text = document.getElementById(\"text-p2\");\r\n    window.addEventListener(\"load\", (event) => {\r\n        setTimeout(() => {\r\n            text.style.color=\"white\";\r\n            setTimeout(() => {\r\n                window.location.href=\"p3.html\";\r\n            }, 4000);\r\n        }, 1000);\r\n    });\r\n}\n\n//# sourceURL=webpack://lab_webpack/./src/js/p2.js?");

/***/ }),

/***/ "./src/js/p3.js":
/*!**********************!*\
  !*** ./src/js/p3.js ***!
  \**********************/
/***/ (() => {

eval("if(document.getElementById('p3')!=null){\r\n    const gnome = document.createElement(\"my-gnome\");\r\n    const buble = document.getElementById(\"gnome-buble-p3\");\r\n    var bandera=true;\r\n    buble.addEventListener(\r\n        \"mouseover\",\r\n        (event) => {\r\n            if(bandera){\r\n                bandera=false\r\n                gnome.style.position=\"relative\";\r\n                gnome.style.top=\"150px\";\r\n                gnome.style.left=\"-350px\";\r\n                buble.appendChild(gnome);\r\n                setTimeout(() => {\r\n                    const text = document.createElement(\"p\");\r\n                    text.innerText=\"Hola, soy el gnomo \\n Acompañame a mi biblioteca!\";\r\n                    text.style.color=\"white\";\r\n                    text.style.position=\"relative\";\r\n                    text.style.left=\"100px\";\r\n                    text.style.top=\"40px\";\r\n                    buble.appendChild(text);\r\n                    setTimeout(() => {\r\n                        window.location.href=\"../index.html\";\r\n                    }, 4000);\r\n                }, 1000);\r\n            }\r\n        },\r\n        false\r\n    );\r\n}\n\n//# sourceURL=webpack://lab_webpack/./src/js/p3.js?");

/***/ }),

/***/ "./src/js/person_comp.js":
/*!*******************************!*\
  !*** ./src/js/person_comp.js ***!
  \*******************************/
/***/ (() => {

eval("class Person extends HTMLElement{\r\n    constructor(){\r\n        super();\r\n    }\r\n\r\n    connectedCallback() {\r\n        const shadowDOM = this.attachShadow({ mode: \"open\" });\r\n        const link = document.createElement(\"link\");\r\n        shadowDOM.appendChild(link);\r\n        const person = document.createElement(\"div\");\r\n        person.setAttribute(\"class\", \"person_css\");\r\n        person.style=\"color: #FFF;font-weight: 600;\";\r\n        shadowDOM.appendChild(person);\r\n\r\n        const head = document.createElement(\"div\");\r\n        head.setAttribute(\"class\", \"person_hat\");\r\n        head.innerText=\"O\";\r\n        person.appendChild(head);\r\n\r\n        const chest = document.createElement(\"div\");\r\n        chest.setAttribute(\"class\", \"person_chest\");\r\n        chest.innerText=\"/|\\\\\";\r\n        person.appendChild(chest);\r\n\r\n        const body = document.createElement(\"div\");\r\n        body.setAttribute(\"class\", \"person_body\");\r\n        body.innerText=\"|\";\r\n        body.style=\"position: relative;left: 5px;\";\r\n        person.appendChild(body);\r\n\r\n        const feet = document.createElement(\"div\");\r\n        feet.setAttribute(\"class\", \"person_feet\");\r\n    feet.innerText=\"/ \\\\ \";\r\n        person.appendChild(feet);\r\n    }\r\n\r\n}\r\ncustomElements.define(\"my-person\", Person);\n\n//# sourceURL=webpack://lab_webpack/./src/js/person_comp.js?");

/***/ }),

/***/ "./src/js/styles.js":
/*!**************************!*\
  !*** ./src/js/styles.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/sass/styles.scss */ \"./src/styles/sass/styles.scss\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n\r\n\n\n//# sourceURL=webpack://lab_webpack/./src/js/styles.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;