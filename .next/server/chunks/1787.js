exports.id = 1787;
exports.ids = [1787];
exports.modules = {

/***/ 71787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
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
  'd483a39a599a8d2fd426b86fa506fa0dffda8133': endpoint.bind(null, 'd483a39a599a8d2fd426b86fa506fa0dffda8133'),
  '23c5795d023633c25ce475851fad9ba51067e9ff': endpoint.bind(null, '23c5795d023633c25ce475851fad9ba51067e9ff'),
  'e82e4a7c4e2240eb49d183568e51ca173bb81e24': endpoint.bind(null, 'e82e4a7c4e2240eb49d183568e51ca173bb81e24'),
  'b658fa4707364861a295da40e2f3636bd404ea8c': endpoint.bind(null, 'b658fa4707364861a295da40e2f3636bd404ea8c'),
  'd49e57735fd98277e6eec1a646e9b2cd96e8d981': endpoint.bind(null, 'd49e57735fd98277e6eec1a646e9b2cd96e8d981'),
}


/***/ })

};
;