exports.id = 3605;
exports.ids = [3605];
exports.modules = {

/***/ 53605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'7d87a73be4ef0115e52728423651f15ba59e8b0c': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 71478)).then(mod => mod["createThread"]),
'de7f741c01c14691255988023a64f2247af564ee': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 71478)).then(mod => mod["fetchThreads"]),
'7b05d7ff43b4752fdbed4f666b34a5bbf5ad6e14': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 71478)).then(mod => mod["fetchThreadsById"]),
'2151776ce5b3eee10acbd4dc01788260a71c67ae': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 71478)).then(mod => mod["addCommentToThread"]),
'd483a39a599a8d2fd426b86fa506fa0dffda8133': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["updateUser"]),
'23c5795d023633c25ce475851fad9ba51067e9ff': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["fetchUser"]),
'e82e4a7c4e2240eb49d183568e51ca173bb81e24': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["fetchUserPost"]),
'b658fa4707364861a295da40e2f3636bd404ea8c': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["fetchUsers"]),
'd49e57735fd98277e6eec1a646e9b2cd96e8d981': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["getActivity"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  '7d87a73be4ef0115e52728423651f15ba59e8b0c': endpoint.bind(null, '7d87a73be4ef0115e52728423651f15ba59e8b0c'),
  'de7f741c01c14691255988023a64f2247af564ee': endpoint.bind(null, 'de7f741c01c14691255988023a64f2247af564ee'),
  '7b05d7ff43b4752fdbed4f666b34a5bbf5ad6e14': endpoint.bind(null, '7b05d7ff43b4752fdbed4f666b34a5bbf5ad6e14'),
  '2151776ce5b3eee10acbd4dc01788260a71c67ae': endpoint.bind(null, '2151776ce5b3eee10acbd4dc01788260a71c67ae'),
  'd483a39a599a8d2fd426b86fa506fa0dffda8133': endpoint.bind(null, 'd483a39a599a8d2fd426b86fa506fa0dffda8133'),
  '23c5795d023633c25ce475851fad9ba51067e9ff': endpoint.bind(null, '23c5795d023633c25ce475851fad9ba51067e9ff'),
  'e82e4a7c4e2240eb49d183568e51ca173bb81e24': endpoint.bind(null, 'e82e4a7c4e2240eb49d183568e51ca173bb81e24'),
  'b658fa4707364861a295da40e2f3636bd404ea8c': endpoint.bind(null, 'b658fa4707364861a295da40e2f3636bd404ea8c'),
  'd49e57735fd98277e6eec1a646e9b2cd96e8d981': endpoint.bind(null, 'd49e57735fd98277e6eec1a646e9b2cd96e8d981'),
}


/***/ }),

/***/ 71478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCommentToThread: () => (/* binding */ addCommentToThread),
/* harmony export */   createThread: () => (/* binding */ createThread),
/* harmony export */   fetchThreads: () => (/* binding */ fetchThreads),
/* harmony export */   fetchThreadsById: () => (/* binding */ fetchThreadsById)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44269);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6285);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_thread_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42841);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43047);
/* harmony import */ var _mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28198);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53559);
/* __next_internal_action_entry_do_not_use__ createThread,fetchThreads,fetchThreadsById,addCommentToThread */ 




async function createThread({ text, author, communityId, path }) {
    try {
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_4__/* .connectToDB */ .P)();
        const createdThread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.create({
            text,
            author,
            community: null
        });
        // update the user model
        await _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.findByIdAndUpdate(author, {
            $push: {
                threads: createdThread._id
            }
        });
        (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)(path);
    } catch (error) {
        throw new Error(`Error creating thread: ${error.message}`);
    }
}
async function fetchThreads(pageNumber = 1, pageSize = 30) {
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_4__/* .connectToDB */ .P)();
    const skipAmount = (pageNumber - 1) * pageSize;
    // fetch the thread that have no parent (i.e top-level threads.....)
    const postQuery = _models_thread_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.find({
        parentId: {
            $in: [
                null,
                undefined
            ]
        }
    }).sort({
        createdAt: "desc"
    }).skip(skipAmount).limit(skipAmount).populate({
        path: "author",
        model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    }).populate({
        path: "children",
        populate: {
            path: "author",
            model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            select: "_id name parentId image"
        }
    });
    const totalPostsCount = await _models_thread_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.countDocuments({
        parentId: {
            $in: [
                null,
                undefined
            ]
        }
    });
    const posts = await postQuery.exec();
    const isNext = totalPostsCount > skipAmount + posts.length;
    return {
        posts,
        isNext
    };
}
async function fetchThreadsById(id) {
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_4__/* .connectToDB */ .P)();
    // TODO: POPULATE COMMUNITY
    try {
        const thread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findById(id).populate({
            path: "author",
            model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            select: "_id id name image"
        }).populate({
            path: "children",
            populate: [
                {
                    path: "author",
                    model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    select: "_id id name parentId image"
                },
                {
                    path: "children",
                    model: _models_thread_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    populate: {
                        path: "author",
                        model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        select: "_id id name parentId image"
                    }
                }
            ]
        }).exec();
        return thread;
    } catch (error) {
        throw new Error(`Error fetching thread: ${error.message}`);
    }
}
async function addCommentToThread({ threadId, commentText, userId, path }) {
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_4__/* .connectToDB */ .P)();
    try {
        // FIND THE ORIGINAL THREAD BY IT'S ID
        const originalThread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findById(threadId);
        if (!originalThread) {
            throw new Error("Thread not found");
        }
        // CREATE A NEW THREAD WITH THE COMMENT TEXT
        const commentThread = new _models_thread_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
            text: commentText,
            author: userId,
            parentId: threadId
        });
        // Save the new thread to the database
        const savedComentThread = await commentThread.save();
        // update the orignal thread to include the comment
        originalThread.children.push(savedComentThread._id);
        // save the original thread
        await originalThread.save();
        (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)(path);
    } catch (error) {
        throw new Error(`Error adding comment to thread: ${error.message}`);
    }
}

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)([
    createThread,
    fetchThreads,
    fetchThreadsById,
    addCommentToThread
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("7d87a73be4ef0115e52728423651f15ba59e8b0c", null, createThread);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("de7f741c01c14691255988023a64f2247af564ee", null, fetchThreads);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("7b05d7ff43b4752fdbed4f666b34a5bbf5ad6e14", null, fetchThreadsById);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("2151776ce5b3eee10acbd4dc01788260a71c67ae", null, addCommentToThread);


/***/ })

};
;