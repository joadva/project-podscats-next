module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/joadva/Projects/Next.js/pages/channel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps({
    query
  }) {
    let idChannel = query.id;
    let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;
    let reqAudio = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`);
    let dataAudio = await reqAudio.json();
    let audioClips = dataAudio.body.audio_clips;
    let reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`);
    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;
    return {
      channel,
      audioClips,
      series
    };
  }

  render() {
    const {
      channel,
      audioClips,
      series
    } = this.props;
    return __jsx("div", {
      className: "jsx-659153091",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("header", {
      className: "jsx-659153091",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Podscats"), __jsx("h1", {
      className: "jsx-659153091",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, " ", channel.title), __jsx("h2", {
      className: "jsx-659153091",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, " Series"), series.map(serie => __jsx("div", {
      className: "jsx-659153091",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, " ", serie.title, " ")), __jsx("h2", {
      className: "jsx-659153091",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, " ultimos potscats"), audioClips.map(clip => __jsx("div", {
      className: "jsx-659153091",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, " ", clip.title, " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4136462",
      __self: this
    }, "header.jsx-659153091{color:#fff;background:#8756ca;padding:15px;text-align:15px;}.channels.jsx-659153091{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-659153091{display:block;border-radius:3px;box-shadow:0px 2px 6px rgb(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-659153091 img.jsx-659153091{width:100%;}h1.jsx-659153091{font-weight:600;padding:15px;}h2.jsx-659153091{padding:5x;fotn-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2FkdmEvUHJvamVjdHMvTmV4dC5qcy9wYWdlcy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDd0IsQUFHOEIsQUFNSyxBQVFDLEFBTUosQUFJSyxBQUtMLFdBNUJNLEFBb0JwQixBQVNvQixFQXZCRixDQVFJLEVBVU4sV0FqQkEsQUF1QkksRUFKcEIsQ0F6QmMsRUFjNkIsUUFQcUIsR0FOL0MsQUE2QkwsU0FDUyxPQTdCckIsV0ErQkEsQ0FsQndCLG9CQUN4QixPQVBBIiwiZmlsZSI6Ii9Vc2Vycy9qb2FkdmEvUHJvamVjdHMvTmV4dC5qcy9wYWdlcy9jaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAgICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXG5cbiAgICAgICAgbGV0IHJlcUNoYW5uZWwgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKVxuICAgICAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuICAgICAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXG4gICAgICAgIGxldCByZXFBdWRpbyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApXG4gICAgICAgIGxldCBkYXRhQXVkaW8gPSBhd2FpdCByZXFBdWRpby5qc29uKClcbiAgICAgICAgbGV0IGF1ZGlvQ2xpcHMgPSBkYXRhQXVkaW8uYm9keS5hdWRpb19jbGlwc1xuXG4gICAgICAgIGxldCByZXFTZXJpZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKVxuICAgICAgICBsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcbiAgICAgICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuXG5cblxuXG4gICAgICAgIHJldHVybiB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPGhlYWRlcj5Qb2RzY2F0czwvaGVhZGVyPlxuICAgICAgICAgICAgPGgxPiB7Y2hhbm5lbC50aXRsZX08L2gxPlxuXG4gICAgICAgICAgICA8aDI+IFNlcmllczwvaDI+XG4gICAgICAgICAgICB7c2VyaWVzLm1hcCgoc2VyaWUpID0+XG4gICAgICAgICAgICAgICAgPGRpdj4ge3NlcmllLnRpdGxlfSA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxoMj4gdWx0aW1vcyBwb3RzY2F0czwvaDI+XG4gICAgICAgICAgICB7YXVkaW9DbGlwcy5tYXAoKGNsaXApID0+XG4gICAgICAgICAgICAgICAgPGRpdj4ge2NsaXAudGl0bGV9IDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAxNXB4O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5jaGFubmVsc3tcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAuY2hhbm5lbCB7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYigwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1eDtcbiAgICAgICAgICAgICAgICAgICAgIGZvdG4tc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcblxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGAgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXG4gICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxuXG59Il19 */\n/*@ sourceURL=/Users/joadva/Projects/Next.js/pages/channel.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2296697828",
      __self: this
    }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2FkdmEvUHJvamVjdHMvTmV4dC5qcy9wYWdlcy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGZ0MsQUFHMEIsU0FDYSxzQkFDTCxpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2pvYWR2YS9Qcm9qZWN0cy9OZXh0LmpzL3BhZ2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgICAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuICAgICAgICBsZXQgcmVxQ2hhbm5lbCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApXG4gICAgICAgIGxldCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXG4gICAgICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsXG5cbiAgICAgICAgbGV0IHJlcUF1ZGlvID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcbiAgICAgICAgbGV0IGRhdGFBdWRpbyA9IGF3YWl0IHJlcUF1ZGlvLmpzb24oKVxuICAgICAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpby5ib2R5LmF1ZGlvX2NsaXBzXG5cbiAgICAgICAgbGV0IHJlcVNlcmllcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApXG4gICAgICAgIGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgICAgICBsZXQgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzXG5cblxuXG5cbiAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8aGVhZGVyPlBvZHNjYXRzPC9oZWFkZXI+XG4gICAgICAgICAgICA8aDE+IHtjaGFubmVsLnRpdGxlfTwvaDE+XG5cbiAgICAgICAgICAgIDxoMj4gU2VyaWVzPC9oMj5cbiAgICAgICAgICAgIHtzZXJpZXMubWFwKChzZXJpZSkgPT5cbiAgICAgICAgICAgICAgICA8ZGl2PiB7c2VyaWUudGl0bGV9IDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGgyPiB1bHRpbW9zIHBvdHNjYXRzPC9oMj5cbiAgICAgICAgICAgIHthdWRpb0NsaXBzLm1hcCgoY2xpcCkgPT5cbiAgICAgICAgICAgICAgICA8ZGl2PiB7Y2xpcC50aXRsZX0gPC9kaXY+XG4gICAgICAgICAgICApfVxuXG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IDE1cHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLmNoYW5uZWxze1xuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgIC5jaGFubmVsIHtcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XG5cbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjV4O1xuICAgICAgICAgICAgICAgICAgICAgZm90bi1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYCB9XG5cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcbiAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG5cbn0iXX0= */\n/*@ sourceURL=/Users/joadva/Projects/Next.js/pages/channel.js */"));
  }

});

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/channel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joadva/Projects/Next.js/pages/channel.js */"./pages/channel.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=channel.js.map