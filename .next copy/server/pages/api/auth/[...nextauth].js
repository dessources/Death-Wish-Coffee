"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./database/conn.js":
/*!**************************!*\
  !*** ./database/conn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connectMongo = async () => {\n  try {\n    const {\n      connection\n    } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL);\n\n    if (connection.readyState == 1) {\n      return Promise.resolve(true);\n    }\n  } catch (error) {\n    return Promise.reject(error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jb25uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1DLFlBQVksR0FBRyxZQUFVO0VBQzNCLElBQUc7SUFDQyxNQUFNO01BQUNDO0lBQUQsSUFBZSxNQUFNRix1REFBQSxDQUFpQkksT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQTdCLENBQTNCOztJQUVBLElBQUdKLFVBQVUsQ0FBQ0ssVUFBWCxJQUF1QixDQUExQixFQUE0QjtNQUN4QixPQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUDtJQUNIO0VBQ0osQ0FORCxDQU1DLE9BQU1DLEtBQU4sRUFBWTtJQUNULE9BQU9GLE9BQU8sQ0FBQ0csTUFBUixDQUFlRCxLQUFmLENBQVA7RUFDSDtBQUNKLENBVkQ7O0FBWUEsaUVBQWVULFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWF0aHdpc2hjb2ZmZWUvLi9kYXRhYmFzZS9jb25uLmpzP2VjOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3RNb25nbyA9IGFzeW5jICgpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge2Nvbm5lY3Rpb259ID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xyXG5cclxuICAgICAgICBpZihjb25uZWN0aW9uLnJlYWR5U3RhdGU9PTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nbzsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ28iLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJyZWFkeVN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnJvciIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./database/conn.js\n");

/***/ }),

/***/ "(api)/./model/Schema.js":
/*!*************************!*\
  !*** ./model/Schema.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  firstName: String,\n  lastName: String,\n  email: String,\n  password: String\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.user || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('user', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9TY2hlbWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRyxVQUFVLEdBQUcsSUFBSUgsNENBQUosQ0FBVztFQUMxQkksU0FBUyxFQUFDQyxNQURnQjtFQUUxQkMsUUFBUSxFQUFDRCxNQUZpQjtFQUcxQkUsS0FBSyxFQUFDRixNQUhvQjtFQUkxQkcsUUFBUSxFQUFDSDtBQUppQixDQUFYLENBQW5CO0FBT0EsTUFBTUksS0FBSyxHQUFHUCxpREFBQSxJQUFlRCwrQ0FBSyxDQUFDLE1BQUQsRUFBU0UsVUFBVCxDQUFsQztBQUVBLGlFQUFlTSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVhdGh3aXNoY29mZmVlLy4vbW9kZWwvU2NoZW1hLmpzP2E2YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBmaXJzdE5hbWU6U3RyaW5nLFxyXG4gICAgbGFzdE5hbWU6U3RyaW5nLFxyXG4gICAgZW1haWw6U3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6U3RyaW5nXHJcbn0pXHJcblxyXG5jb25zdCBVc2VycyA9IG1vZGVscy51c2VyIHx8IG1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInVzZXJTY2hlbWEiLCJmaXJzdE5hbWUiLCJTdHJpbmciLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJVc2VycyIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./model/Schema.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../database/conn */ \"(api)/./database/conn.js\");\n/* harmony import */ var _model_Schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/Schema */ \"(api)/./model/Schema.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n    clientId: process.env.GOOGLE_ID,\n    clientSecret: process.env.GOOGLE_SECRET\n  }), next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  }), next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n    name: \"Credentials\",\n\n    async authorize(credentials, req) {\n      (0,_database_conn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().catch(error => {\n        error: \"Connection Failed ...\";\n      });\n      const result = await _model_Schema__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n        email: credentials.email\n      });\n\n      if (!result) {\n        throw new Error(\"No user Found with this Email please Sign up!\");\n      }\n\n      const checkPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_6__.compare)(credentials.password, result.password);\n\n      if (!checkPassword || result.email !== credentials.email) {\n        throw new Error(\"username or password doesn't match !\");\n      }\n\n      return result;\n    }\n\n  })]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlQSxnREFBUSxDQUFDO0VBQ3BCTyxTQUFTLEVBQUUsQ0FDUE4saUVBQWMsQ0FBQztJQUNiTyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQURUO0lBRWJDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0VBRmIsQ0FBRCxDQURQLEVBS1BYLGlFQUFjLENBQUM7SUFDYk0sUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUksU0FEVDtJQUViRixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZSztFQUZiLENBQUQsQ0FMUCxFQVNQWixzRUFBbUIsQ0FBQztJQUNsQmEsSUFBSSxFQUFDLGFBRGE7O0lBRWxCLE1BQU1DLFNBQU4sQ0FBZ0JDLFdBQWhCLEVBQTRCQyxHQUE1QixFQUFnQztNQUM5QmYsMERBQVksR0FBR2dCLEtBQWYsQ0FBcUJDLEtBQUssSUFBSTtRQUFDQSxLQUFLLEVBQUM7TUFBd0IsQ0FBN0Q7TUFFQSxNQUFNQyxNQUFNLEdBQUcsTUFBTWpCLDZEQUFBLENBQWM7UUFBQ21CLEtBQUssRUFBQ04sV0FBVyxDQUFDTTtNQUFuQixDQUFkLENBQXJCOztNQUNBLElBQUcsQ0FBQ0YsTUFBSixFQUFXO1FBQ1QsTUFBTSxJQUFJRyxLQUFKLENBQVUsK0NBQVYsQ0FBTjtNQUNEOztNQUNELE1BQU1DLGFBQWEsR0FBRyxNQUFNcEIsaURBQU8sQ0FBQ1ksV0FBVyxDQUFDUyxRQUFiLEVBQXNCTCxNQUFNLENBQUNLLFFBQTdCLENBQW5DOztNQUNBLElBQUcsQ0FBQ0QsYUFBRCxJQUFrQkosTUFBTSxDQUFDRSxLQUFQLEtBQWlCTixXQUFXLENBQUNNLEtBQWxELEVBQXdEO1FBQ3RELE1BQU0sSUFBSUMsS0FBSixDQUFXLHNDQUFYLENBQU47TUFDRDs7TUFDRCxPQUFPSCxNQUFQO0lBQ0Q7O0VBZGlCLENBQUQsQ0FUWjtBQURTLENBQUQsQ0FBdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWF0aHdpc2hjb2ZmZWUvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcclxuaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9jb25uJztcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL21vZGVsL1NjaGVtYSc7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxyXG4gICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgR2l0aHViUHJvdmlkZXIoe1xyXG4gICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgbmFtZTpcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMscmVxKXtcclxuICAgICAgICAgICAgY29ubmVjdE1vbmdvKCkuY2F0Y2goZXJyb3IgPT4ge2Vycm9yOlwiQ29ubmVjdGlvbiBGYWlsZWQgLi4uXCJ9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7ZW1haWw6Y3JlZGVudGlhbHMuZW1haWx9KVxyXG4gICAgICAgICAgICBpZighcmVzdWx0KXtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2VyIEZvdW5kIHdpdGggdGhpcyBFbWFpbCBwbGVhc2UgU2lnbiB1cCFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjaGVja1Bhc3N3b3JkID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCxyZXN1bHQucGFzc3dvcmQpXHJcbiAgICAgICAgICAgIGlmKCFjaGVja1Bhc3N3b3JkIHx8IHJlc3VsdC5lbWFpbCAhPT0gY3JlZGVudGlhbHMuZW1haWwpe1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoXCJ1c2VybmFtZSBvciBwYXNzd29yZCBkb2Vzbid0IG1hdGNoICFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBdLFxyXG4gICAgICBcclxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImNvbm5lY3RNb25nbyIsIlVzZXJzIiwiY29tcGFyZSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicmVxIiwiY2F0Y2giLCJlcnJvciIsInJlc3VsdCIsImZpbmRPbmUiLCJlbWFpbCIsIkVycm9yIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();