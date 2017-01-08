export const scrollToBottom = {
    getScrollTop:function(){
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if(document.body){
            bodyScrollTop = document.body.scrollTop;
        }
        if(document.documentElement){
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    },
    getScrollHeight:function(){
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if(document.body){
            bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement){
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    },
    getClientHeight:function(){
        var windowHeight = 0;
        if(document.compatMode == "CSS1Compat"){
            windowHeight = document.documentElement.clientHeight;
        }else{
            windowHeight = document.body.clientHeight;
        }
        console.log(document.documentElement.clientHeight, document.body.clientHeight)
        return windowHeight;
    },
    onScrollEvent:function(callback){
        var This = this;
        window.onscroll = function(){
            if(This.getScrollTop() + This.getClientHeight() >= This.getScrollHeight()){
                typeof callback == "function" && callback.call(this);
            }
        }
    }
};

//我们来在 window 上注册onscroll事件来测试一下
// scrollToBottom.onScrollEvent(function(){
//     alert("滚动条到底部了");
// });