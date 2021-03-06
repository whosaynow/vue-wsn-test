import { openBlock, createBlock } from 'vue';

var script = {
  mounted: function mounted(){
    console.log('hello');
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, " Hello world "))
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

export default script;
export { install };
