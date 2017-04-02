(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var asgardia_calendar_converter_1 = __webpack_require__(2);
var AsgardiaConverter = (function () {
    function AsgardiaConverter() {
        this.mode = "jun";
    }
    AsgardiaConverter.prototype.convertFromPicker = function (input, previousOutput) {
        if (input === undefined) {
            return {};
        }
        if (input.month === undefined || input.day === undefined) {
            if (input.month !== undefined || input.day !== undefined) {
                throw new Error("Asgardia calendar converter can't be used with model that has month and day, but not both.");
            }
            return input;
        }
        var _a = asgardia_calendar_converter_1.toGregorian({
            year: input.year === undefined ? 1 : input.year,
            month: input.month,
            day: input.day
        }, this.mode), year = _a.year, month = _a.month, day = _a.day;
        if (input.year !== undefined) {
            return __assign({}, input, { year: year, month: month, day: day });
        }
        return __assign({}, input, { month: month, day: day });
    };
    AsgardiaConverter.prototype.convertToPicker = function (input) {
        if (input === undefined) {
            return {};
        }
        if (input.month === undefined || input.day === undefined) {
            if (input.month !== undefined || input.day !== undefined) {
                throw new Error("Asgardia calendar converter can't be used with model that has month and day, but not both.");
            }
            return input;
        }
        var _a = asgardia_calendar_converter_1.toAsgardian({
            year: input.year === undefined ? 2017 : input.year,
            month: input.month,
            day: input.day
        }, this.mode), year = _a.year, month = _a.month, day = _a.day;
        if (input.year !== undefined) {
            return __assign({}, input, { year: year, month: month, day: day });
        }
        return __assign({}, input, { month: month, day: day });
    };
    return AsgardiaConverter;
}());
exports["default"] = AsgardiaConverter;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var angular = __webpack_require__(4);
var converter_1 = __webpack_require__(0);
angular.module("ion-datetime-picker").service("$ionDtpConverterAsgardia", converter_1["default"]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function isGregorianYearLeap(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    return false;
}
exports.isGregorianYearLeap = isGregorianYearLeap;
function isAsgardianYearLeap(year) {
    return isGregorianYearLeap(year + 16);
}
exports.isAsgardianYearLeap = isAsgardianYearLeap;
function toAsgardian(_a, mode) {
    var day = _a.day, month = _a.month, year = _a.year;
    year -= 2016;
    day += [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].slice(0, month - 1).reduce(function (a, b) { return a + b; }, 0);
    if (mode === "non") {
        if (year > 0) {
            for (var loopYear = 1, origYear = year; loopYear < origYear || (loopYear === origYear && month > 2); loopYear++) {
                if (isAsgardianYearLeap(loopYear)) {
                    day++;
                    if (day > 365) {
                        year++;
                        day = 1;
                    }
                }
            }
        }
        else {
            for (var loopYear = 0, origYear = year; loopYear > origYear || (loopYear === origYear && month <= 2); loopYear--) {
                if (isAsgardianYearLeap(loopYear)) {
                    day--;
                    if (day < 1) {
                        year--;
                        day = 365;
                    }
                }
            }
        }
    }
    else if (isAsgardianYearLeap(year) && month > 2) {
        day++;
    }
    month = 1;
    for (var m = 0; m < 13; m++) {
        var daysInMonth = ((isAsgardianYearLeap(year) && ((mode === "feb" && m === 1) || (mode === "jun" && m === 5))) || m === 12) ? 29 : 28;
        if (day > daysInMonth) {
            day -= daysInMonth;
            month++;
        }
        else {
            break;
        }
    }
    return { day: day, month: month, year: year };
}
exports.toAsgardian = toAsgardian;
function toGregorian(_a, mode) {
    var day = _a.day, month = _a.month, year = _a.year;
    day = (month - 1) * 28 + day;
    if (mode === "non") {
        if (year > 0) {
            for (var loopYear = 1, origYear = year; loopYear < origYear; loopYear++) {
                if (isAsgardianYearLeap(loopYear)) {
                    day--;
                    if (day < 1) {
                        year--;
                        day = isAsgardianYearLeap(year) ? 366 : 365;
                    }
                }
            }
        }
        else {
            for (var loopYear = 0, origYear = year; loopYear >= origYear; loopYear--) {
                if (isAsgardianYearLeap(loopYear)) {
                    day++;
                    if (day > (isAsgardianYearLeap(year) ? 366 : 365)) {
                        year++;
                        day = 1;
                    }
                }
            }
        }
    }
    else if (isAsgardianYearLeap(year) && month > (mode === "feb" ? 2 : 6)) {
        day++;
    }
    year += 2016;
    month = 1;
    var daysInMonths = [31, isAsgardianYearLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (var m = 0; m < 12; m++) {
        if (day > daysInMonths[m]) {
            day -= daysInMonths[m];
            month++;
        }
        else {
            break;
        }
    }
    return { day: day, month: month, year: year };
}
exports.toGregorian = toGregorian;
//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var converter_1 = __webpack_require__(0);
__webpack_require__(1);
module.exports = converter_1["default"];


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});