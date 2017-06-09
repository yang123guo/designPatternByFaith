(function(window, undefined){
    // 把$返回给外界，内部的私有的用_来引导。
    function _$(args){
        // 这是模拟的构造函数，内部为_$函数的实现
    }

    // Function类上扩展一个可以实现链式编程的方法
    Function.prototype.method = function(methodName, fn){
        this.prototype.[methodName] = fn;
        return this;
    }


    // 构造函数原型上添加方法和属性
    _$.prototype = {
        constructor : _$,
        addEvent : function(){
            // 逻辑代码
            alert('event');
            return this;
        },
        setStyle : function(){
            // 逻辑代码
            alert('setStyle')
            return this;
        }
    }

    // 把_$赋值给window,这样外部就可以在外部访问到
    window.$ = _$;

    _$.onReady = function(fn){
        // 实例化出来_$对象 真正的注册到window上
        window.$ = function() {
            return new _$(args)
        }

        // 给onReady传入函数，且调用函数
        fn && fn();

        // 实现链式编程
        _$.method('addEvent', function(){

        }).method('setStyle', function(){

        })
    }

})(window, undefined)


// 调用
$.onReady(function(){
    alert();
})