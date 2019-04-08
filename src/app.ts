import express from "express";
import http from "http";
import socketIo from "socket.io";
import path from "path";

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const router = express.Router();
var port = 3000;

app.use(express.static('./bin/'));

router.get('/', (res,req) =>{
    console.log("this is a render test");
    req.render("index.html");
})

io.on("connection", function(socket){
    socket.on("socketIoTest", function(data){
       console.log(data);
       socket.emit("ServerSendMsg", data);
    });
 })

 server.listen(port, function(){
     console.log('Server listening at port %d', port)
 })

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

