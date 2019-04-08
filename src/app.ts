import express from "express";
import * as test from "./controller/test";
import {test1} from "./controller/test1";
import test2 from "./controller/test2";
import * as test3 from "./controller/test3";
var app = express();
test.output();
var newtset1 = new test1();
newtset1.test1Print();
var test2new = new test2();
test2new.printTest2();
var test3new = new test3.test1();
test3new.test1Print();
console.log("this is a test");

