// 闭包命令模式
function makeStart() {
    return function() {
        obj.start();
    }
}

function makeStop() {
    return function() {
        obj.stop();
    }
}