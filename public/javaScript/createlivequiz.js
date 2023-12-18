
var room;

const socket = io();

socket.on('roomCreateMsg',(msg) =>{
    alert(msg);
})


async function createroom(){
    var roomid = document.getElementById('rid').value;
    
}

async function sendmsg(){
    console.log("in send");
    var msg = document.getElementById('msg').value;
    socket.emit('sendMsg',  msg, room);
}

async function start(){
    socket.emit('start',room);
}