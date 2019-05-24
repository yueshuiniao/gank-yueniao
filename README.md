## react-gank

### 简介

> - 一个简单的干货资讯和妹子图展示的单页面 WebApp
> - 使用的主要技术：react + redux + react-router + ES6 + webpack
> - 数据来源：[干货集中营](http://gank.io/api)，高德地图 API(获取定位)，[和风天气(天气数据)](http://www.kancloud.cn/hefengyun/weather/224291)
> - 页面效果比较简单，主要是给自己熟悉下 react、redux

### 截图

![](https://raw.githubusercontent.com/yueshuiniao/blog/master/images/gank.gif) <br/>
![](http://i.imgur.com/ByBYRMk.png) <br/>
![](http://i.imgur.com/d8AuXzz.png) <br/>

### 使用：

```
git clone git@github.com:yueshuiniao/gank-yueniao.git
cd gank-yueniao
npm i  //安装(npm下载速度可能较慢，可以用 npm --registry=https://registry.npm.taobao.org i 或安装cnpm进行下载)
npm start   //开发
npm run build   //打包
```

### 使用库：

- react &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//view
- redux &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//数据管理
- react-router &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//路由
- ReactCSStransitionGroup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//react 官方动画库
- axios &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//取数据
- redux-thunk &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//redux 异步控制
- react-hot-loader &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//热替换
- create-react-app &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//react 官方脚手架
- lib-flexible &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//移动端自适应
- sass &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//css 预处理器
