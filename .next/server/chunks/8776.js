"use strict";
exports.id = 8776;
exports.ids = [8776];
exports.modules = {

/***/ 18776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchUser: () => (/* binding */ fetchUser),
/* harmony export */   fetchUserPost: () => (/* binding */ fetchUserPost),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers),
/* harmony export */   getActivity: () => (/* binding */ getActivity),
/* harmony export */   updateUser: () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44269);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6285);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43047);
/* harmony import */ var _mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28198);
/* harmony import */ var _models_thread_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42841);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53559);
/* __next_internal_action_entry_do_not_use__ updateUser,fetchUser,fetchUserPost,fetchUsers,getActivity */ 




async function updateUser({ userId, username, name, bio, image, path }) {
    try {
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_3__/* .connectToDB */ .P)();
        const dbresult = await _models_user_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOneAndUpdate({
            id: userId
        }, {
            username: username.toLowerCase(),
            name: name.toLowerCase(),
            bio,
            image,
            onboarded: true
        }, {
            upsert: true
        });
        if (path === "/profile/edit") {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)(path);
        }
        console.log(dbresult);
    } catch (error) {
        throw new Error(`Failed to create/update user: ${error.message}`);
    }
}
const fetchUser = async (userId)=>{
    try {
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_3__/* .connectToDB */ .P)();
        return await _models_user_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
            id: userId
        });
    // .populate({
    //    path: 'communties',
    //    model: 'communty'
    // })
    } catch (error) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
};
const fetchUserPost = async (userId)=>{
    try {
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_3__/* .connectToDB */ .P)();
        // FIND ALL THREAD AUTHORED BY USER WITH THE GIVEN ID
        // TODO: Populate community
        const threads = await _models_user_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
            id: userId
        }).populate({
            path: "threads",
            model: _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            populate: {
                path: "children",
                model: _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                populate: {
                    path: "author",
                    model: _models_user_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    select: "name image id"
                }
            }
        });
        return threads;
    } catch (error) {
        throw new Error(`Failed to fetch user posts: ${error.message}`);
    }
};
const fetchUsers = async ({ userId, searchString = "", pageNumber = 1, pageSize = 20, sortBy = "desc" })=>{
    try {
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_3__/* .connectToDB */ .P)();
        const skipAmount = (pageNumber - 1) * pageSize;
        const regex = new RegExp(searchString, "i");
        const query = {
            id: {
                $ne: userId
            }
        };
        if (searchString.trim() !== "") {
            query.$or = [
                {
                    username: {
                        $regex: regex
                    }
                },
                {
                    name: {
                        $regex: regex
                    }
                }
            ];
        }
        const sortOptions = {
            createdAt: sortBy
        };
        const userQuery = _models_user_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.find(query).sort(sortOptions).skip(skipAmount).limit(pageSize);
        const totalUsersCount = await _models_user_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.countDocuments(query);
        const users = await userQuery.exec();
        const isNext = totalUsersCount > skipAmount + users.length;
        return {
            users,
            isNext
        };
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
};
const getActivity = async (userId)=>{
    try {
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_3__/* .connectToDB */ .P)();
        // find all threads created by the user
        const userThreads = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.find({
            author: userId
        });
        // collect all the child thread ids (replies) from the 'children' field
        const childThreads = userThreads.reduce((acc, userThread)=>{
            return acc.concat(userThread.children);
        }, []);
        const replies = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.find({
            _id: {
                $in: childThreads
            },
            author: {
                $ne: userId
            }
        }).populate({
            path: "author",
            model: _models_user_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            select: "name image _id"
        });
        return replies;
    } catch (error) {
        throw new Error(`Failed to fetch activity: ${error.message}`);
    }
};

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)([
    updateUser,
    fetchUser,
    fetchUserPost,
    fetchUsers,
    getActivity
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("d483a39a599a8d2fd426b86fa506fa0dffda8133", null, updateUser);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("23c5795d023633c25ce475851fad9ba51067e9ff", null, fetchUser);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("e82e4a7c4e2240eb49d183568e51ca173bb81e24", null, fetchUserPost);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("b658fa4707364861a295da40e2f3636bd404ea8c", null, fetchUsers);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("d49e57735fd98277e6eec1a646e9b2cd96e8d981", null, getActivity);


/***/ })

};
;