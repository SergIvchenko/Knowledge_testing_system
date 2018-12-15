import * as tslib_1 from "tslib";
import { Vue, Inject, Component } from 'vue-property-decorator';
import { TestState, Testes } from '../models';
var BaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseComponent, _super);
    function BaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseComponent.prototype, "title", {
        get: function () { return this.teststate.Title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "question", {
        get: function () { return this.teststate.Question; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "question_num", {
        get: function () { return this.teststate.CurrentQuestion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "question_cnt", {
        get: function () { return this.teststate.Questions_Cnt /* CurrentTest.questions.length*/; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "answers", {
        get: function () { return this.teststate.Answers; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "good_answ", {
        get: function () { return this.teststate.GoodAnswer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "sel_answ", {
        get: function () { return this.teststate.SelectedAnswer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "cur_answer", {
        get: function () { return this.teststate.CurrentAnswer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "enable2result", {
        get: function () { return this.teststate.enable2results; },
        enumerable: true,
        configurable: true
    });
    BaseComponent.prototype.settest = function (test) { this.teststate.CurrentTest = test; };
    BaseComponent.prototype.start = function () { this.teststate.StartTest(); };
    BaseComponent.prototype.cancel = function () { this.teststate.CancelTest(); };
    BaseComponent.prototype.prev = function () { this.teststate.Prev(); };
    BaseComponent.prototype.next = function () { this.teststate.Next(); };
    BaseComponent.prototype.selectAnswer = function (item) { this.teststate.SelectAnswer(item.id); };
    Object.defineProperty(BaseComponent.prototype, "testisrunning", {
        get: function () { return this.teststate.TestIsRunning; },
        enumerable: true,
        configurable: true
    });
    BaseComponent.prototype.setTO2_10s = function () { this.teststate.SetTO2_10s(); };
    BaseComponent.prototype.ToResultsPage = function () { this.teststate.Enter2ResultsPage(); };
    BaseComponent.prototype.Back2Test = function () { this.teststate.FromResultsPageBackToTest(); };
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", Testes)
    ], BaseComponent.prototype, "testes", void 0);
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", TestState)
    ], BaseComponent.prototype, "teststate", void 0);
    BaseComponent = tslib_1.__decorate([
        Component({
            data: function () {
                return {
                    alltests: this.testes,
                    timeleft: this.teststate.TimeLeftString,
                    curtest: this.teststate.CurrentTest,
                    testresults: this.teststate.GetTestResults()
                };
            }
        })
    ], BaseComponent);
    return BaseComponent;
}(Vue));
export default BaseComponent;
//# sourceMappingURL=BaseComponent.js.map