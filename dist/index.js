import { h } from 'vue';

//
var script = () => h('Hello');

const render = () => {};

script.render = render;
script.__file = "src/MyComponent.vue";

export default script;
