"use strict";
exports.id = 6297;
exports.ids = [6297];
exports.modules = {

/***/ 99805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ho: () => (/* binding */ addCommentToThread),
/* harmony export */   gK: () => (/* binding */ createThread)
/* harmony export */ });
/* unused harmony exports fetchThreads, fetchThreadsById */
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56937);
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53009);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61324);



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ createThread,fetchThreads,fetchThreadsById,addCommentToThread */ 

var createThread = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("7d87a73be4ef0115e52728423651f15ba59e8b0c");
var fetchThreads = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("de7f741c01c14691255988023a64f2247af564ee");
var fetchThreadsById = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("7b05d7ff43b4752fdbed4f666b34a5bbf5ad6e14");
var addCommentToThread = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("2151776ce5b3eee10acbd4dc01788260a71c67ae");



/***/ }),

/***/ 91555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ThreadValidation),
/* harmony export */   g: () => (/* binding */ CommentValidation)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19098);

const ThreadValidation = zod__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry({
    thread: zod__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().nonempty().min(3, {
        message: "Minimum 3 characters."
    }),
    accountId: zod__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_()
});
const CommentValidation = zod__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry({
    thread: zod__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().nonempty().min(3, {
        message: "Minimum 3 characters."
    })
});


/***/ })

};
;