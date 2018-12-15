import Vue from "vue";
import App from './components/App.vue';
import { Testes, TestState } from './models';
new Vue({
    el: '#app',
    render: function (h) { return h(App); },
    provide: function () { return { testes: new Testes(), teststate: new TestState() }; }
});
//# sourceMappingURL=index.js.map