# 手机应用和PC浏览器端共用一个node服务器

***
###网页的博客
blog是网页的博客,采用node开发后台服务器，数据库采用的是mongodb，框架是node的express框架。  

##<a name="link"/> 博客的打开操作方法:
进入blog文件夹，输入node app.js启动node服务器，输入`localhost:3000`即可，前提是你已经安装`node.js`和`MongoDB`，并且mongodb服务开启。（学习来自github N-blog） 
***
###手机端APP
Sports是手机端的应用，目前开发是采用的是安卓，采用的是Ionic的框架，基于phonegap/cordova，是一款接近原生的Html5移动App开发框架,其开发语言是基于angular.js。  
手机端App刚开始尝试开发，正在学习之中，边学边整~~。

##<a name="link"/> 手机端APP操作方法:
1. 可以安装到安卓手机上，目前Sports文件夹下没有打包成Apk，需要PC上安装Ionic环境和安卓开发环境，使用Ionic打包方式安装到安卓手机，安装环境也需要将Ionic和安卓版本进行匹配安装配置，不然不会成功。
* 使用Ionic的`Ionic serve`进行电脑端调试，服务端依旧是上面的node，但是这会涉及到跨域的问题，需要进行相应的跨域设置（本开发暂时是将访问的头进行设置）。 

