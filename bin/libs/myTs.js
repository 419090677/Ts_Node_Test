var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GrandFather = /** @class */ (function () {
    function GrandFather() {
    }
    GrandFather.prototype.PrintName = function () {
        console.log(this.myName);
    };
    GrandFather.prototype.sayHello = function () {
        console.log('Hello');
    };
    return GrandFather;
}());
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father() {
        return _super.call(this) || this;
    }
    return Father;
}(GrandFather));
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(myname) {
        var _this = _super.call(this) || this;
        _this.myName = myname;
        return _this;
    }
    return Son;
}(Father));
var son = new Son('Peter');
son.PrintName();
//# sourceMappingURL=myTs.js.map