// 命令模式分为：简单命令模式 复杂命令模式 闭包封装命令模式
var CommandInterface = new BH.Interface('CommandInterface', ['execute'])

// 命令模式的主要概念


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

var startCommand = new MakeStart(obj);
startCommand();
