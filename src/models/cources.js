//type TestRecord=any;
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
var TestRecord = /** @class */ (function () {
    function TestRecord() {
    }
    return TestRecord;
}());
var Testes = /** @class */ (function () {
    function Testes() {
        this.TestesList = [];
    }
    return Testes;
}());
var QuestionResult = /** @class */ (function () {
    function QuestionResult() {
    }
    Object.defineProperty(QuestionResult.prototype, "IsRight", {
        get: function () { return (this.answer_good == this.answer_user); },
        enumerable: true,
        configurable: true
    });
    ;
    return QuestionResult;
}());
export { Testes, TestRecord, Question, Answer, QuestionResult };
//# sourceMappingURL=cources.js.map