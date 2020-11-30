'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var component = require('VueWsnTest');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var component__default = /*#__PURE__*/_interopDefaultLegacy(component);

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('vue-wsn-test', component__default['default']);
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
        return component__default['default'];
    }
});
exports.install = install;
//# sourceMappingURL=index.js.map
