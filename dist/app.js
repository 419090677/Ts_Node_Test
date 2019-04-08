"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test = __importStar(require("./controller/test"));
const test1_1 = require("./controller/test1");
const test2_1 = __importDefault(require("./controller/test2"));
const test3 = __importStar(require("./controller/test3"));
var app = express_1.default();
test.output();
var newtset1 = new test1_1.test1();
newtset1.test1Print();
var test2new = new test2_1.default();
test2new.printTest2();
var test3new = new test3.test1();
test3new.test1Print();
console.log("this is a test");
//# sourceMappingURL=app.js.map