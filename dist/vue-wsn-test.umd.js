(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueWsnTest = {}, global.vue));
}(this, (function (exports, vue) { 'use strict';

  var script = {
    mounted: function mounted(){
      console.log('hello');
    }
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", null, " Hello world "))
  }

  script.render = render;
  script.__file = "src/VueWsnTest.vue";

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
      if (install.installed) { return; }
      install.installed = true;
      Vue.component('vue-wsn-test', script);
  }

  // Create module definition for Vue.use()
  var plugin = {
      install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
      GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
      GlobalVue = global.Vue;
  }
  if (GlobalVue) {
      GlobalVue.use(plugin);
  }

  exports.default = script;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
