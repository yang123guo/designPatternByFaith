(function(window, undefined){
    // 把$返回给外界，内部的私有的用_来引导。
    function _$(args){
        // 这是模拟的构造函数，内部为_$函数的实现
    }

    // 把_$赋值给window,这样外部就可以在外部访问到
    window.$ = _$;

    $.onReady = function(fn){
        // 实例化出来_$对象 真正的注册到window上
        window.$ = function() {
            return new _$(args)
        }

        // 给onReady传入函数，且调用函数
        fn && fn();
    }

})(window, undefined)


// 调用
$.onReady(function(){
    alert();
})