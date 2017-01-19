##react-gank

###简介
>* 一个简单的干货资讯和妹子图展示的单页面WebApp
>* 使用的主要技术：react + redux + react-router + ES6 + webpack
>* 数据来源：[干货集中营](http://gank.io/api)，高德地图API(获取定位)，[和风天气(天气数据)](http://www.kancloud.cn/hefengyun/weather/224291)
>* 页面效果比较简单，主要是给自己熟悉下react、redux

###截图
![](https://raw.githubusercontent.com/yueshuiniao/mkImg/master/fLWHSY7.gif) <br/>
![](http://i.imgur.com/ByBYRMk.png) <br/>
![](http://i.imgur.com/d8AuXzz.png) <br/>

###使用：
```
git clone git@github.com:yueshuiniao/gank-yueniao.git
cd gank-yueniao
npm i  //安装(npm下载速度可能较慢，可以用 npm --registry=https://registry.npm.taobao.org i 或安装cnpm进行下载)
npm start   //开发
npm run build   //打包
```
###使用库：
+ react //view
+ redux //数据管理
+ react-router //路由
+ axios //取数据
+ redux-thunk //redux异步控制
+ react-hot-loader //热替换
+ create-react-app //react官方脚手架
+ lib-flexible //移动端自适应
+ sass //css预处理器

###主要技术点总结：
+ 移动端自适应方案，使用手淘的移动端自适应方案[lib-flexible](https://github.com/amfe/article/issues/17)，对这套方案，进行了完整的尝试，也对sass有了进一步的学习使用
+ react： 在官方脚手架create-react-app展开模板的基础上，配置了v3.0的react-hot-loader和sass，是这个应用的模板；花了一些时间研究react-hot-loader的配置使用，感觉很值得，能给人一流的编码体验； 组件化的react，函数式编程体验； 函数组件比class组件优雅的多，传递props也方便很多，所以不需要触发生命周期函数时，全用函数组件就对了； 使用ReactCSStransitionGroup实现了加载动画和左侧导航栏动画，这种动画实现的方式很简洁，适合入场出场动画。
+ react-router： 有一种很强烈的感觉，路由是一个应用的灵魂，一个好的路由设定就相当于搭起一个好骨架，又高又瘦又美
+ redux： 理解了这个框架后，觉得思路实在是太酷了；action=>reducer=>state=>view=>action=>reducer... 不知道从哪开始写的时候，就写action；这个应用里的异步处理只使用redux-thunk，使用axios取数据，所有取数据都写在action里，在组件componentDidMount函数里触发首次取数据的动作，对取数据的的过程request、success、fail分别dispatch对应action，经过reducer返回对应的数据；有了redux后，编码的过程就变成了：要做什么？=>写一个action=>经过reducer改变对应state=>把state和action绑定给组件，展示state，展示变化，触发action时继续这个过程，简洁的单项数据流，完美的思路。
+ ES6： ES6写起来真是太棒了，总是能找到更简单更酷更优雅的写法
+ 对overflow和scroll事件有了更深入的理解，通过对div的scroll事件的监听，通过scrollTop、scrollHeight、clientHeight三个的关系，判断元素滚动条滚动到底部，进而取下一页的数据，不过原生的滚动条好像，我的4.4的android系统好像显示不太好，我写了个小demo试了下，body的还可以，div好像就不行，在网上也咩有找到可用的处理办法，试了div { -webkit-overflow-scrolling: touch; }并没有用，暂时还没有找到处理办法，下次还是用iScroll好了。
+ ......
+ 当然，这只是初版，待续...