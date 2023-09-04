"use strict";
exports.id = 1900;
exports.ids = [1900];
exports.modules = {

/***/ 6285:
/***/ ((module, exports, __webpack_require__) => {


const cacheExports = {
    unstable_cache: (__webpack_require__(92768)/* .unstable_cache */ .A),
    revalidateTag: (__webpack_require__(46174).revalidateTag),
    revalidatePath: (__webpack_require__(38729)/* .revalidatePath */ .t)
};
// https://nodejs.org/api/esm.html#commonjs-namespaces
// When importing CommonJS modules, the module.exports object is provided as the default export
module.exports = cacheExports;
// make import { xxx } from 'next/server' work
exports.unstable_cache = cacheExports.unstable_cache;
exports.revalidatePath = cacheExports.revalidatePath;
exports.revalidateTag = cacheExports.revalidateTag;


/***/ }),

/***/ 12271:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _dynamicnossr = __webpack_require__(5070);
const _staticgenerationasyncstorage = __webpack_require__(13539);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 84713:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clientHookInServerComponentError", ({
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
}));
const _interop_require_default = __webpack_require__(73297);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(39100));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 67158:
/***/ ((module, exports, __webpack_require__) => {

// useLayoutSegments() // Only the segments for the current place. ['children', 'dashboard', 'children', 'integrations'] -> /dashboard/integrations (/dashboard/layout.js would get ['children', 'dashboard', 'children', 'integrations'])

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __webpack_require__(39100);
const _approutercontext = __webpack_require__(26021);
const _hooksclientcontext = __webpack_require__(64629);
const _clienthookinservercomponenterror = __webpack_require__(84713);
const _getsegmentvalue = __webpack_require__(85891);
const _serverinsertedhtml = __webpack_require__(99107);
const _redirect = __webpack_require__(75287);
const _notfound = __webpack_require__(92241);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(12271);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        // This only happens in `pages`. Type is overwritten in navigation.d.ts
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 85891:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 38729:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "t", ({
    enumerable: true,
    get: function() {
        return revalidatePath;
    }
}));
const _revalidatetag = __webpack_require__(46174);
function revalidatePath(path) {
    return (0, _revalidatetag.revalidateTag)(path);
} //# sourceMappingURL=revalidate-path.js.map


/***/ }),

/***/ 46174:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "revalidateTag", ({
    enumerable: true,
    get: function() {
        return revalidateTag;
    }
}));
function revalidateTag(tag) {
    const staticGenerationAsyncStorage = fetch.__nextGetStaticStore == null ? void 0 : fetch.__nextGetStaticStore();
    const store = staticGenerationAsyncStorage == null ? void 0 : staticGenerationAsyncStorage.getStore();
    if (!store || !store.incrementalCache) {
        throw new Error(`Invariant: static generation store missing in revalidateTag ${tag}`);
    }
    if (!store.revalidatedTags) {
        store.revalidatedTags = [];
    }
    if (!store.revalidatedTags.includes(tag)) {
        store.revalidatedTags.push(tag);
    }
    if (!store.pendingRevalidates) {
        store.pendingRevalidates = [];
    }
    store.pendingRevalidates.push(store.incrementalCache.revalidateTag == null ? void 0 : store.incrementalCache.revalidateTag(tag).catch((err)=>{
        console.error(`revalidateTag failed for ${tag}`, err);
    }));
    // TODO: only revalidate if the path matches
    store.pathWasRevalidated = true;
} //# sourceMappingURL=revalidate-tag.js.map


/***/ }),

/***/ 92768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "A", ({
    enumerable: true,
    get: function() {
        return unstable_cache;
    }
}));
const _staticgenerationasyncstorage = __webpack_require__(13539);
const _constants = __webpack_require__(62078);
const _patchfetch = __webpack_require__(12181);
function unstable_cache(cb, keyParts, options = {}) {
    const staticGenerationAsyncStorage = (fetch.__nextGetStaticStore == null ? void 0 : fetch.__nextGetStaticStore()) || _staticgenerationasyncstorage.staticGenerationAsyncStorage;
    const store = staticGenerationAsyncStorage == null ? void 0 : staticGenerationAsyncStorage.getStore();
    const incrementalCache = (store == null ? void 0 : store.incrementalCache) || globalThis.__incrementalCache;
    if (!incrementalCache) {
        throw new Error(`Invariant: incrementalCache missing in unstable_cache ${cb.toString()}`);
    }
    if (options.revalidate === 0) {
        throw new Error(`Invariant revalidate: 0 can not be passed to unstable_cache(), must be "false" or "> 0" ${cb.toString()}`);
    }
    const cachedCb = async (...args)=>{
        const joinedKey = `${cb.toString()}-${Array.isArray(keyParts) && keyParts.join(",")}-${JSON.stringify(args)}`;
        // We override the default fetch cache handling inside of the
        // cache callback so that we only cache the specific values returned
        // from the callback instead of also caching any fetches done inside
        // of the callback as well
        return staticGenerationAsyncStorage.run({
            ...store,
            fetchCache: "only-no-store",
            isStaticGeneration: !!(store == null ? void 0 : store.isStaticGeneration),
            pathname: (store == null ? void 0 : store.pathname) || "/"
        }, async ()=>{
            const cacheKey = await (incrementalCache == null ? void 0 : incrementalCache.fetchCacheKey(joinedKey));
            const cacheEntry = cacheKey && !((store == null ? void 0 : store.isOnDemandRevalidate) || incrementalCache.isOnDemandRevalidate) && await (incrementalCache == null ? void 0 : incrementalCache.get(cacheKey, true, options.revalidate));
            const tags = options.tags || [];
            if (Array.isArray(tags) && store) {
                if (!store.tags) {
                    store.tags = [];
                }
                for (const tag of tags){
                    if (!store.tags.includes(tag)) {
                        store.tags.push(tag);
                    }
                }
            }
            const implicitTags = (0, _patchfetch.addImplicitTags)(store);
            for (const tag of implicitTags){
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            }
            const invokeCallback = async ()=>{
                const result = await cb(...args);
                if (cacheKey && incrementalCache) {
                    await incrementalCache.set(cacheKey, {
                        kind: "FETCH",
                        data: {
                            headers: {},
                            // TODO: handle non-JSON values?
                            body: JSON.stringify(result),
                            status: 200,
                            tags,
                            url: ""
                        },
                        revalidate: typeof options.revalidate !== "number" ? _constants.CACHE_ONE_YEAR : options.revalidate
                    }, options.revalidate, true);
                }
                return result;
            };
            if (!cacheEntry || !cacheEntry.value) {
                return invokeCallback();
            }
            if (cacheEntry.value.kind !== "FETCH") {
                console.error(`Invariant invalid cacheEntry returned for ${joinedKey}`);
                return invokeCallback();
            }
            let cachedValue;
            const isStale = cacheEntry.isStale;
            if (cacheEntry) {
                const resData = cacheEntry.value.data;
                cachedValue = JSON.parse(resData.body);
            }
            const currentTags = cacheEntry.value.data.tags;
            if (isStale) {
                if (!store) {
                    return invokeCallback();
                } else {
                    if (!store.pendingRevalidates) {
                        store.pendingRevalidates = [];
                    }
                    store.pendingRevalidates.push(invokeCallback().catch((err)=>console.error(`revalidating cache with key: ${joinedKey}`, err)));
                }
            } else if (tags && !tags.every((tag)=>{
                return currentTags == null ? void 0 : currentTags.includes(tag);
            })) {
                if (!cacheEntry.value.data.tags) {
                    cacheEntry.value.data.tags = [];
                }
                for (const tag of tags){
                    if (!cacheEntry.value.data.tags.includes(tag)) {
                        cacheEntry.value.data.tags.push(tag);
                    }
                }
                incrementalCache == null ? void 0 : incrementalCache.set(cacheKey, cacheEntry.value, options.revalidate, true);
            }
            return cachedValue;
        });
    };
    // TODO: once AsyncLocalStorage.run() returns the correct types this override will no longer be necessary
    return cachedCb;
} //# sourceMappingURL=unstable-cache.js.map


/***/ }),

/***/ 26021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\Owner\\Desktop\\React Folder\\threads\\node_modules\\next\\dist\\shared\\lib\\app-router-context.js");
 //# sourceMappingURL=app-router-context.js.map


/***/ }),

/***/ 64629:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\Owner\\Desktop\\React Folder\\threads\\node_modules\\next\\dist\\shared\\lib\\hooks-client-context.js");
 //# sourceMappingURL=hooks-client-context.js.map


/***/ }),

/***/ 5070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\Owner\\Desktop\\React Folder\\threads\\node_modules\\next\\dist\\shared\\lib\\lazy-dynamic\\dynamic-no-ssr.js");
 //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 99107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\Owner\\Desktop\\React Folder\\threads\\node_modules\\next\\dist\\shared\\lib\\server-inserted-html.js");
 //# sourceMappingURL=server-inserted-html.js.map


/***/ }),

/***/ 64980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(67158);


/***/ })

};
;