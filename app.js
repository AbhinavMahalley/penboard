const express = require("express");//access
const socket = require("socket.io");//access

const app = express();//initialized and server ready
app.use(express.static("public"));

let port = 5000;
let server = app.listen(port, () => {
    console.log("listening to port " + port);
})

let io = socket(server);

io.on("connection", (socket) => {
    console.log("Made socket connection");
    //recieved data
    socket.on("beginPath",(data) => {
        //data from frontend
        // now Transfer data to all connected computers
       io.emit("beginPath",data);
    })
    socket.on("drawStroke",(data) => {
        io.emit("drawStroke",data);
    })
    socket.on("redoUndo",(data) => {
       io.emit("redoUndo",data);
    })
})
