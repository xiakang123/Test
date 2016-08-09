/**
 * Created by Administrator on 2016/7/18 0018.
 */
//var socket = new WebSocket('ws://172.27.35.3:9090');
var socket = new WebSocket('ws://192.168.1.158:9090');
// 打开Socket
socket.onopen = function(event) {
    // 发送一个初始化消息
    //socket.send('I am the client and I\'m listening!');

    // 监听消息
    socket.onmessage = function(event) {
        console.log('Client received a message',event.data);

        var a = new ParseData(event.data);
    };

    // 监听Socket的关闭
    socket.onclose = function(event) {
        console.log('Client notified socket has closed',event.data);
    };

    // 关闭Socket....
    //socket.close()
};