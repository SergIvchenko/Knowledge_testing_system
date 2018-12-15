import { QuestionResult } from './cources';
var TestState = /** @class */ (function () {
    function TestState() {
        this._choices = [];
        this._CurrentTest = null;
        this._CurrentQuestion = 0;
        this._inResultsPage = false;
        this.TestIsRunning = false;
        this.TimeLeftString = '';
    }
    Object.defineProperty(TestState.prototype, "choices", {
        get: function () {
            return this._choices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "CurrentComponent", {
        get: function () {
            //        return this._CurrentComponent; 
            if (this._CurrentTest == null)
                return 'list-cources';
            if (this._CurrentQuestion == 0)
                return 'test-start';
            if ((this._CurrentQuestion > 0) && (!this.TestIsRunning))
                return 'test-results';
            if ((this.TestIsRunning) && this._inResultsPage)
                return 'test-results';
            return 'test-doing';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "CurrentTest", {
        get: function () { return this._CurrentTest; },
        set: function (v) {
            this._CurrentTest = v;
            this._CurrentQuestion = 0;
            //        this.SetCurrentComponent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "CurrentQuestion", {
        get: function () { return this._CurrentQuestion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "enable2results", {
        get: function () {
            return (this._CurrentTest != null) && (this.Questions_Cnt == this._choices.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    TestState.prototype.Enter2ResultsPage = function () {
        this._inResultsPage = false;
        if (!this.enable2results)
            return;
        this._inResultsPage = true;
    };
    TestState.prototype.FromResultsPageBackToTest = function () {
        if (!this.TestIsRunning)
            return;
        this._inResultsPage = false;
    };
    Object.defineProperty(TestState.prototype, "Question", {
        get: function () {
            var _this = this;
            if (this._CurrentTest == null)
                return '';
            if (this._CurrentQuestion == 0)
                return '';
            var _rez = this._CurrentTest.questions.find(function (_v) { return _v.id == _this._CurrentQuestion; }).question;
            return _rez;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "Questions_Cnt", {
        get: function () {
            if (this._CurrentTest == null)
                return 0;
            if (this._CurrentQuestion == 0)
                return 0;
            var _rez = this._CurrentTest.questions.length;
            return _rez;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "GoodAnswer", {
        get: function () {
            var _this = this;
            if (this._CurrentTest == null)
                return 0;
            if (this._CurrentQuestion == 0)
                return 0;
            var _rez = this._CurrentTest.questions.find(function (_v) { return _v.id == _this._CurrentQuestion; }).good_answ;
            return _rez;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "SelectedAnswer", {
        get: function () {
            var _choice = this.choices[this.CurrentQuestion];
            if (_choice == undefined)
                return 0;
            return _choice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "CurrentAnswer", {
        get: function () {
            var _choice = this.choices[this.CurrentQuestion];
            if (_choice == undefined)
                return '';
            var _answ = this.Answers[_choice - 1];
            if (_answ == undefined)
                return '';
            return _answ.answer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "Answers", {
        get: function () {
            if (this._CurrentTest == null)
                return [];
            if (this._CurrentQuestion == 0)
                return [];
            return this._CurrentTest.questions[this._CurrentQuestion - 1].answers;
        },
        enumerable: true,
        configurable: true
    });
    TestState.prototype.SelectAnswer = function (_id) {
        this._choices[this.CurrentQuestion] = _id;
        this._choices = this._choices.map(function (t) { return t; });
    };
    Object.defineProperty(TestState.prototype, "Title", {
        get: function () {
            if (this._CurrentTest == null)
                return "";
            return this._CurrentTest.title;
        },
        enumerable: true,
        configurable: true
    });
    TestState.prototype.Next = function () {
        if (this._CurrentTest == null)
            return;
        if (this.CurrentQuestion >= this._CurrentTest.questions.length)
            return;
        this._CurrentQuestion++;
    };
    TestState.prototype.Prev = function () {
        if (this._CurrentTest == null)
            return;
        if (this.CurrentQuestion < 2)
            return;
        this._CurrentQuestion--;
    };
    TestState.prototype.StartTest = function () {
        var _this = this;
        if (this._CurrentTest == null)
            return;
        this._CurrentQuestion = 1;
        this._choices = [];
        var _start = new Date();
        var _min = _start.getMinutes();
        var _sec = _start.getSeconds();
        var _end = _start;
        _end.setSeconds(_sec);
        _end.setMinutes(_min + this._CurrentTest.exec_time_min);
        this._timeofstart = _start;
        this._timeofend = _end;
        this._handletimer = setInterval(function () { _this._refresh(); }, 1000);
    };
    Object.defineProperty(TestState.prototype, "_TestIsRunning", {
        get: function () {
            if (this._CurrentTest == null)
                return false;
            if (this._CurrentQuestion < 1)
                return false;
            var _now = new Date();
            var _diff = this._timeofend - _now;
            if (_diff < 1) {
                clearInterval(this._handletimer);
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestState.prototype, "_TimeLeftString", {
        get: function () {
            if (!this.TestIsRunning)
                return 'stopping';
            var _now = new Date();
            var _diff = this._timeofend - _now;
            var _tdiff = new Date(_diff);
            var _min = _tdiff.getMinutes();
            var _sec = _tdiff.getSeconds();
            var _rez = (_min > 0) ? _min + " m  " + _sec + " s" : _sec + " s";
            return _rez;
        },
        enumerable: true,
        configurable: true
    });
    TestState.prototype._refresh = function () {
        this.TestIsRunning = this._TestIsRunning;
        this.TimeLeftString = this._TimeLeftString;
    };
    TestState.prototype.SetTO2_10s = function () {
        if (!this.TestIsRunning)
            return;
        var _end = new Date();
        var _sec = _end.getSeconds();
        _end.setSeconds(_sec + 11);
        this._timeofend = _end;
    };
    TestState.prototype.CancelTest = function () {
        this._CurrentTest = null;
        this._CurrentQuestion = 0;
        this._inResultsPage = false;
        this._refresh();
    };
    TestState.prototype.GetTestResults = function () {
        if (this._CurrentTest == null)
            return [];
        var _rez = [];
        var _loop_1 = function (_q) {
            var _qr = new QuestionResult();
            _qr.id = _q.id;
            _qr.question = _q.question;
            _qr.answer_good = _q.answers.find(function (_a) { return _a.id == _q.good_answ; }).answer;
            _qr.answer_user = '';
            var _indx = this_1._choices[_q.id];
            if (_indx > 0) {
                _qr.answer_user = _q.answers.find(function (_a) { return _a.id == _indx; }).answer;
            }
            _rez.push(_qr);
        };
        var this_1 = this;
        for (var _i = 0, _b = this._CurrentTest.questions; _i < _b.length; _i++) {
            var _q = _b[_i];
            _loop_1(_q);
        }
        return _rez;
    };
    return TestState;
}());
export { TestState };
//# sourceMappingURL=TestState.js.map