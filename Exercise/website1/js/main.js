!(function (e) {
  var r = {};
  function n(t) {
    if (r[t]) return r[t].exports;
    var o = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = r),
    (n.d = function (e, r, t) {
      n.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, r) {
      if ((1 & r && (e = n(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (n.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            t,
            o,
            function (r) {
              return e[r];
            }.bind(null, o)
          );
      return t;
    }),
    (n.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(r, "a", r), r;
    }),
    (n.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (n.p = ""),
    n((n.s = "./app/js/main.js"));
})({
  "./app/js/components/burger.js":
    /*!*************************************!*\
  !*** ./app/js/components/burger.js ***!
  \*************************************/
    /*! no static exports found */ function (module, exports) {
      eval(
        "document.querySelector('.burger').addEventListener('click', function () {\n  document.querySelector('.burger').classList.toggle('burger_active');\n  document.querySelector('.nav').classList.toggle('nav_active');\n});\ndocument.querySelector('.nav').addEventListener('click', function (e) {\n  if (e.target.classList.contains('nav__link')) {\n    document.querySelector('.burger').classList.remove('burger_active');\n    document.querySelector('.nav').classList.remove('nav_active');\n  }\n});\n\n//# sourceURL=webpack:///./app/js/components/burger.js?"
      );
    },
  "./app/js/components/scroll.js":
    /*!*************************************!*\
  !*** ./app/js/components/scroll.js ***!
  \*************************************/
    /*! no static exports found */ function (module, exports) {
      eval(
        'function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar anchors = document.querySelectorAll(\'a[href*="#"]\');\n\nvar _iterator = _createForOfIteratorHelper(anchors),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var anchor = _step.value;\n    anchor.addEventListener(\'click\', function (e) {\n      e.preventDefault();\n      var blockID = anchor.getAttribute(\'href\').substr(1);\n      document.getElementById(blockID).scrollIntoView({\n        behavior: \'smooth\',\n        block: \'start\'\n      });\n    });\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\n//# sourceURL=webpack:///./app/js/components/scroll.js?'
      );
    },
  "./app/js/main.js":
    /*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
    /*! no exports provided */ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger */ "./app/js/components/burger.js");\n/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll */ "./app/js/components/scroll.js");\n/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_scroll__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./app/js/main.js?'
      );
    },
});
