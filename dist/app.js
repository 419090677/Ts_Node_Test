"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const app = express_1.default();
const server = http_1.default.createServer(app);
const io = socket_io_1.default(server);
const router = express_1.default.Router();
var port = 3000;
app.use(express_1.default.static('./bin/'));
router.get('/', (res, req) => {
    console.log("this is a render test");
    req.render("index.html");
});
io.on("connection", function (socket) {
    socket.on("socketIoTest", function (data) {
        console.log(data);
        socket.emit("ServerSendMsg", data);
    });
});
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});
// import * as test from "./controller/test";
// import {test1} from "./controller/test1";
// import test2 from "./controller/test2";
// import * as test3 from "./controller/test3";
// var app = express();
// test.output();
// var newtset1 = new test1();
// newtset1.test1Print();
// var test2new = new test2();
// test2new.printTest2();
// var test3new = new test3.test1();
// test3new.test1Print();
// console.log("this is a test");
//# sourceMappingURL=app.js.map