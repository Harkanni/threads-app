"use strict";
(() => {
var exports = {};
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 13714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/webhook/clerk/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/svix/dist/index.js
var dist = __webpack_require__(58777);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(40063);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js
var action_proxy = __webpack_require__(44269);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./lib/models/community.model.ts

const CommunitySchema = new (external_mongoose_default()).Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    image: String,
    bio: String,
    createdBy: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        ref: "User"
    },
    threads: [
        {
            type: (external_mongoose_default()).Schema.Types.ObjectId,
            ref: "Thread"
        }
    ],
    members: [
        {
            type: (external_mongoose_default()).Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});
const Community = (external_mongoose_default()).models.Community || external_mongoose_default().model("Community", CommunitySchema);
/* harmony default export */ const community_model = (Community);

// EXTERNAL MODULE: ./lib/models/thread.model.ts
var thread_model = __webpack_require__(42841);
// EXTERNAL MODULE: ./lib/models/user.model.ts
var user_model = __webpack_require__(43047);
// EXTERNAL MODULE: ./lib/mongoose.ts
var mongoose = __webpack_require__(28198);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(53559);
;// CONCATENATED MODULE: ./lib/actions/community.actions.ts
/* __next_internal_action_entry_do_not_use__ createCommunity,fetchCommunityDetails,fetchCommunityPosts,fetchCommunities,addMemberToCommunity,removeUserFromCommunity,updateCommunityInfo,deleteCommunity */ 




async function createCommunity(id, name, username, image, bio, createdById // Change the parameter name to reflect it's an id
) {
    try {
        (0,mongoose/* connectToDB */.P)();
        // Find the user with the provided unique id
        const user = await user_model/* default */.Z.findOne({
            id: createdById
        });
        if (!user) {
            throw new Error("User not found"); // Handle the case if the user with the id is not found
        }
        const newCommunity = new community_model({
            id,
            name,
            username,
            image,
            bio,
            createdBy: user._id
        });
        const createdCommunity = await newCommunity.save();
        // Update User model
        user.communities.push(createdCommunity._id);
        await user.save();
        return createdCommunity;
    } catch (error) {
        // Handle any errors
        console.error("Error creating community:", error);
        throw error;
    }
}
async function fetchCommunityDetails(id) {
    try {
        (0,mongoose/* connectToDB */.P)();
        const communityDetails = await community_model.findOne({
            id
        }).populate([
            "createdBy",
            {
                path: "members",
                model: user_model/* default */.Z,
                select: "name username image _id id"
            }
        ]);
        return communityDetails;
    } catch (error) {
        // Handle any errors
        console.error("Error fetching community details:", error);
        throw error;
    }
}
async function fetchCommunityPosts(id) {
    try {
        (0,mongoose/* connectToDB */.P)();
        const communityPosts = await community_model.findById(id).populate({
            path: "threads",
            model: thread_model/* default */.Z,
            populate: [
                {
                    path: "author",
                    model: user_model/* default */.Z,
                    select: "name image id"
                },
                {
                    path: "children",
                    model: thread_model/* default */.Z,
                    populate: {
                        path: "author",
                        model: user_model/* default */.Z,
                        select: "image _id"
                    }
                }
            ]
        });
        return communityPosts;
    } catch (error) {
        // Handle any errors
        console.error("Error fetching community posts:", error);
        throw error;
    }
}
async function fetchCommunities({ searchString = "", pageNumber = 1, pageSize = 20, sortBy = "desc" }) {
    try {
        (0,mongoose/* connectToDB */.P)();
        // Calculate the number of communities to skip based on the page number and page size.
        const skipAmount = (pageNumber - 1) * pageSize;
        // Create a case-insensitive regular expression for the provided search string.
        const regex = new RegExp(searchString, "i");
        // Create an initial query object to filter communities.
        const query = {};
        // If the search string is not empty, add the $or operator to match either username or name fields.
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
        // Define the sort options for the fetched communities based on createdAt field and provided sort order.
        const sortOptions = {
            createdAt: sortBy
        };
        // Create a query to fetch the communities based on the search and sort criteria.
        const communitiesQuery = community_model.find(query).sort(sortOptions).skip(skipAmount).limit(pageSize).populate("members");
        // Count the total number of communities that match the search criteria (without pagination).
        const totalCommunitiesCount = await community_model.countDocuments(query);
        const communities = await communitiesQuery.exec();
        // Check if there are more communities beyond the current page.
        const isNext = totalCommunitiesCount > skipAmount + communities.length;
        return {
            communities,
            isNext
        };
    } catch (error) {
        console.error("Error fetching communities:", error);
        throw error;
    }
}
async function addMemberToCommunity(communityId, memberId) {
    try {
        (0,mongoose/* connectToDB */.P)();
        // Find the community by its unique id
        const community = await community_model.findOne({
            id: communityId
        });
        if (!community) {
            throw new Error("Community not found");
        }
        // Find the user by their unique id
        const user = await user_model/* default */.Z.findOne({
            id: memberId
        });
        if (!user) {
            throw new Error("User not found");
        }
        // Check if the user is already a member of the community
        if (community.members.includes(user._id)) {
            throw new Error("User is already a member of the community");
        }
        // Add the user's _id to the members array in the community
        community.members.push(user._id);
        await community.save();
        // Add the community's _id to the communities array in the user
        user.communities.push(community._id);
        await user.save();
        return community;
    } catch (error) {
        // Handle any errors
        console.error("Error adding member to community:", error);
        throw error;
    }
}
async function removeUserFromCommunity(userId, communityId) {
    try {
        (0,mongoose/* connectToDB */.P)();
        const userIdObject = await user_model/* default */.Z.findOne({
            id: userId
        }, {
            _id: 1
        });
        const communityIdObject = await community_model.findOne({
            id: communityId
        }, {
            _id: 1
        });
        if (!userIdObject) {
            throw new Error("User not found");
        }
        if (!communityIdObject) {
            throw new Error("Community not found");
        }
        // Remove the user's _id from the members array in the community
        await community_model.updateOne({
            _id: communityIdObject._id
        }, {
            $pull: {
                members: userIdObject._id
            }
        });
        // Remove the community's _id from the communities array in the user
        await user_model/* default */.Z.updateOne({
            _id: userIdObject._id
        }, {
            $pull: {
                communities: communityIdObject._id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        // Handle any errors
        console.error("Error removing user from community:", error);
        throw error;
    }
}
async function updateCommunityInfo(communityId, name, username, image) {
    try {
        (0,mongoose/* connectToDB */.P)();
        // Find the community by its _id and update the information
        const updatedCommunity = await community_model.findOneAndUpdate({
            id: communityId
        }, {
            name,
            username,
            image
        });
        if (!updatedCommunity) {
            throw new Error("Community not found");
        }
        return updatedCommunity;
    } catch (error) {
        // Handle any errors
        console.error("Error updating community information:", error);
        throw error;
    }
}
async function deleteCommunity(communityId) {
    try {
        (0,mongoose/* connectToDB */.P)();
        // Find the community by its ID and delete it
        const deletedCommunity = await community_model.findOneAndDelete({
            id: communityId
        });
        if (!deletedCommunity) {
            throw new Error("Community not found");
        }
        // Delete all threads associated with the community
        await thread_model/* default */.Z.deleteMany({
            community: communityId
        });
        // Find all users who are part of the community
        const communityUsers = await user_model/* default */.Z.find({
            communities: communityId
        });
        // Remove the community from the 'communities' array for each user
        const updateUserPromises = communityUsers.map((user)=>{
            user.communities.pull(communityId);
            return user.save();
        });
        await Promise.all(updateUserPromises);
        return deletedCommunity;
    } catch (error) {
        console.error("Error deleting community: ", error);
        throw error;
    }
}

(0,action_validate/* default */.Z)([
    createCommunity,
    fetchCommunityDetails,
    fetchCommunityPosts,
    fetchCommunities,
    addMemberToCommunity,
    removeUserFromCommunity,
    updateCommunityInfo,
    deleteCommunity
]);
(0,action_proxy/* createActionProxy */.U)("51eba7e7949154604a4a4343aa26fc4c80feaa48", null, createCommunity);
(0,action_proxy/* createActionProxy */.U)("e9500d54ec93e0f44043cc5d68bb347de6975bfd", null, fetchCommunityDetails);
(0,action_proxy/* createActionProxy */.U)("e9031a7da278fc2d047ef3702cbe0f2c9bb4690e", null, fetchCommunityPosts);
(0,action_proxy/* createActionProxy */.U)("ba5aa31cabcc98a5ed247244dd6be7e4b7a46bec", null, fetchCommunities);
(0,action_proxy/* createActionProxy */.U)("091e8154aeead7ff6818f9785a4c1434986057aa", null, addMemberToCommunity);
(0,action_proxy/* createActionProxy */.U)("143f336224c88fb55ce4e88c75daa0296747ef52", null, removeUserFromCommunity);
(0,action_proxy/* createActionProxy */.U)("4fb42295d64a7fcdcd2d65ff49881e3190d3d8ac", null, updateCommunityInfo);
(0,action_proxy/* createActionProxy */.U)("38e901d3e75a72ae3ffa66eb0b74adf30b6b214c", null, deleteCommunity);

;// CONCATENATED MODULE: ./app/api/webhook/clerk/route.ts
/* eslint-disable camelcase */ // Resource: https://clerk.com/docs/users/sync-data-to-your-backend
// Above article shows why we need webhooks i.e., to sync data to our backend
// Resource: https://docs.svix.com/receiving/verifying-payloads/why
// It's a good practice to verify webhooks. Above article shows why we should do it




const POST = async (request)=>{
    const payload = await request.json();
    const header = (0,headers.headers)();
    const heads = {
        "svix-id": header.get("svix-id"),
        "svix-timestamp": header.get("svix-timestamp"),
        "svix-signature": header.get("svix-signature")
    };
    // Activitate Webhook in the Clerk Dashboard.
    // After adding the endpoint, you'll see the secret on the right side.
    const wh = new dist.Webhook(process.env.NEXT_CLERK_WEBHOOK_SECRET || "");
    let evnt = null;
    try {
        evnt = wh.verify(JSON.stringify(payload), heads);
    } catch (err) {
        return next_response/* default */.Z.json({
            message: err
        }, {
            status: 400
        });
    }
    const eventType = evnt?.type;
    // Listen organization creation event
    if (eventType === "organization.created") {
        // Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/CreateOrganization
        // Show what evnt?.data sends from above resource
        const { id, name, slug, logo_url, image_url, created_by } = evnt?.data ?? {};
        try {
            // @ts-ignore
            await createCommunity(// @ts-ignore
            id, name, slug, logo_url || image_url, "org bio", created_by);
            return next_response/* default */.Z.json({
                message: "User created"
            }, {
                status: 201
            });
        } catch (err) {
            console.log(err);
            return next_response/* default */.Z.json({
                message: "Internal Server Error"
            }, {
                status: 500
            });
        }
    }
    // Listen organization invitation creation event.
    // Just to show. You can avoid this or tell people that we can create a new mongoose action and
    // add pending invites in the database.
    if (eventType === "organizationInvitation.created") {
        try {
            // Resource: https://clerk.com/docs/reference/backend-api/tag/Organization-Invitations#operation/CreateOrganizationInvitation
            console.log("Invitation created", evnt?.data);
            return next_response/* default */.Z.json({
                message: "Invitation created"
            }, {
                status: 201
            });
        } catch (err) {
            console.log(err);
            return next_response/* default */.Z.json({
                message: "Internal Server Error"
            }, {
                status: 500
            });
        }
    }
    // Listen organization membership (member invite & accepted) creation
    if (eventType === "organizationMembership.created") {
        try {
            // Resource: https://clerk.com/docs/reference/backend-api/tag/Organization-Memberships#operation/CreateOrganizationMembership
            // Show what evnt?.data sends from above resource
            const { organization, public_user_data } = evnt?.data;
            console.log("created", evnt?.data);
            // @ts-ignore
            await addMemberToCommunity(organization.id, public_user_data.user_id);
            return next_response/* default */.Z.json({
                message: "Invitation accepted"
            }, {
                status: 201
            });
        } catch (err) {
            console.log(err);
            return next_response/* default */.Z.json({
                message: "Internal Server Error"
            }, {
                status: 500
            });
        }
    }
    // Listen member deletion event
    if (eventType === "organizationMembership.deleted") {
        try {
            // Resource: https://clerk.com/docs/reference/backend-api/tag/Organization-Memberships#operation/DeleteOrganizationMembership
            // Show what evnt?.data sends from above resource
            const { organization, public_user_data } = evnt?.data;
            console.log("removed", evnt?.data);
            // @ts-ignore
            await removeUserFromCommunity(public_user_data.user_id, organization.id);
            return next_response/* default */.Z.json({
                message: "Member removed"
            }, {
                status: 201
            });
        } catch (err) {
            console.log(err);
            return next_response/* default */.Z.json({
                message: "Internal Server Error"
            }, {
                status: 500
            });
        }
    }
    // Listen organization updation event
    if (eventType === "organization.updated") {
        try {
            // Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/UpdateOrganization
            // Show what evnt?.data sends from above resource
            const { id, logo_url, name, slug } = evnt?.data;
            console.log("updated", evnt?.data);
            // @ts-ignore
            await updateCommunityInfo(id, name, slug, logo_url);
            return next_response/* default */.Z.json({
                message: "Member removed"
            }, {
                status: 201
            });
        } catch (err) {
            console.log(err);
            return next_response/* default */.Z.json({
                message: "Internal Server Error"
            }, {
                status: 500
            });
        }
    }
    // Listen organization deletion event
    if (eventType === "organization.deleted") {
        try {
            // Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/DeleteOrganization
            // Show what evnt?.data sends from above resource
            const { id } = evnt?.data;
            console.log("deleted", evnt?.data);
            // @ts-ignore
            await deleteCommunity(id);
            return next_response/* default */.Z.json({
                message: "Organization deleted"
            }, {
                status: 201
            });
        } catch (err) {
            console.log(err);
            return next_response/* default */.Z.json({
                message: "Internal Server Error"
            }, {
                status: 500
            });
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fwebhook%2Fclerk%2Froute&name=app%2Fapi%2Fwebhook%2Fclerk%2Froute&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fclerk%2Froute.ts&appDir=C%3A%5CUsers%5COwner%5CDesktop%5CReact%20Folder%5Cthreads%5Capp&appPaths=%2Fapi%2Fwebhook%2Fclerk%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/webhook/clerk/route",
        pathname: "/api/webhook/clerk",
        filename: "route",
        bundlePath: "app/api/webhook/clerk/route"
    },
    resolvedPagePath: "C:\\Users\\Owner\\Desktop\\React Folder\\threads\\app\\api\\webhook\\clerk\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/webhook/clerk/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3342,4813,2961,9841,5501,8777,9532], () => (__webpack_exec__(13714)));
module.exports = __webpack_exports__;

})();