import * as tslib_1 from "tslib";
import Vue from 'vue';
import { Component, Inject } from "vue-property-decorator";
import Axios from "axios";
import { Testes, TestState } from "../models";
import { ListCources, TestStart, TestDoing, TestResults } from "../components";
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(App.prototype, "ComponentName", {
        get: function () {
            return this.teststate.CurrentComponent;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", Testes)
    ], App.prototype, "testes", void 0);
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", TestState)
    ], App.prototype, "teststate", void 0);
    App = tslib_1.__decorate([
        Component({
            components: { ListCources: ListCources, TestStart: TestStart, TestDoing: TestDoing, TestResults: TestResults },
            data: function () {
                return {
                    TState: this.teststate
                };
            },
            methods: {},
            created: function () {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    var _url, tt;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _url = "/data/Tests.json";
                                return [4 /*yield*/, Axios.get(_url)];
                            case 1:
                                tt = _a.sent();
                                this.testes.TestesList = tt.data;
                                return [2 /*return*/];
                        }
                    });
                });
            }
        })
    ], App);
    return App;
}(Vue));
export default App;
//# sourceMappingURL=App.js.map