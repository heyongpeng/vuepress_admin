(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{92:function(n,t,e){"use strict";e.r(t);var v=e(0),_=Object(v.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"node常用工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node常用工具"}},[n._v("#")]),n._v(" node常用工具")]),n._v(" "),e("blockquote",[e("p",[n._v("node 常用工具大整合")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("pm2 解决了node不能多线")])]),n._v(" "),e("li",[e("p",[n._v("nvm 让你的电脑里安装很多个不同的node版本")])]),n._v(" "),e("li",[e("p",[n._v("nrm 快速管理你的npm,多个镜像源内切换")])]),n._v(" "),e("li",[e("p",[n._v("nodemon 监控node代码段是否更新,让代码重新运行")])])])]),n._v(" "),e("blockquote",[e("p",[n._v("这些都是我个人平常总是使用的一些关于node的工具,不喜勿喷")])]),n._v(" "),e("h2",{attrs:{id:"pm2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[n._v("#")]),n._v(" pm2")]),n._v(" "),e("blockquote",[e("p",[n._v("先声明对于线程的补充 我们引用官方的解释：线程可以独立运行的最小的CPU单位，可以在同一个进程里并发运行，共享该进程下的内存地址空间")])]),n._v(" "),e("p",[n._v("都说js是单线程的语言,即使有很多工具的帮助,也改变不了单线程的一个特点,即使是使用了node之后")]),n._v(" "),e("p",[n._v("node的最大特点是异步I/O,node官网的几乎所有方法都提供了关于异步的使用方法,比如"),e("code",[n._v("dir.read(callback)")]),n._v("和"),e("code",[n._v("dir.readSync()")]),n._v(",但是node还是被很多人排挤的一部分原因是没办法多线程去运行node项目,但是pm2的诞生可以说是又极大的提升了node的地位,他可以充分利用cpu和内存的资源,让node发挥到了极致")]),n._v(" "),e("p",[n._v("关于pm2的常用命令")]),n._v(" "),e("ol",[e("li",[n._v("npm install pm2 -g 全局安装pm2")]),n._v(" "),e("li",[n._v("pm2 start xxx 运行某一个脚本\n"),e("fancybox",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-48-16.png"}})])],1),n._v(" "),e("li",[n._v("pm2 list 查看全部运行的node程序\n"),e("fancybox",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-50-23.png"}})])],1),n._v(" "),e("li",[n._v("pm2 stop <app_name|namespace|id|'all'|json_conf> 停止运行\n"),e("fancybox",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-51-30.png"}})])],1),n._v(" "),e("li",[n._v("pm2 delete <app_name|namespace|id|'all'|json_conf> 删除\n"),e("fancybox",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-53-01.png"}})])],1),n._v(" "),e("li",[n._v("pm2 reload all 重新加载所有的node线程")]),n._v(" "),e("li",[n._v("pm2 logs 查看所有日志\n"),e("fancybox",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-55-41.png"}})])],1)]),n._v(" "),e("h2",{attrs:{id:"nvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[n._v("#")]),n._v(" nvm")]),n._v(" "),e("blockquote",[e("p",[n._v("nvm是一种用来让你的电脑同时可以安装多个node版本,而且可以快速的切换各个node之间的版本,在开发的过程中,总会遇到一些要求node版本的特殊并且过分的理由,比如上次踩坑安装的easy-mock模拟的数据接口,竟然过分的要求node版本是1.8.x,太难了=-=")])]),n._v(" "),e("ol",[e("li",[n._v("npm i -g nvm 全局安装nvm")]),n._v(" "),e("li",[n._v("nvm ls 查看电脑安装了几个版本的node\n"),e("fancybox",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_14-59-21.png"}})])],1),n._v(" "),e("li",[n._v("nvm install node 安装最新版本的node")]),n._v(" "),e("li",[n._v("nvm install 6.14.4 安装制定版本的node")]),n._v(" "),e("li",[n._v("nvm use 6.14.4 使用某个版本的node\n"),e("fancybox",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_15-02-11.png"}})])],1),n._v(" "),e("li",[n._v("nvm uninstall 6.14.1 卸载某个版本的node")])]),n._v(" "),e("blockquote",[e("p",[n._v("还有很多高级的操作可以查看"),e("a",{attrs:{href:"https://github.com/nvm-sh/nvm"}},[n._v("官网")])])]),n._v(" "),e("h2",{attrs:{id:"nrm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[n._v("#")]),n._v(" nrm")]),n._v(" "),e("blockquote",[e("p",[n._v("nrm是一个用来快速切换pm2的,让你在多个镜像源之间来回穿梭")])]),n._v(" "),e("p",[n._v("nrm常用命令")]),n._v(" "),e("ol",[e("li",[n._v("npm i -g nrm 全局安装nrm")]),n._v(" "),e("li",[n._v("nrm ls 查看有多少个镜像源\n"),e("fancybox",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2019-12-31_15-09-49.png"}})])],1),n._v(" "),e("li",[e("code",[n._v("nrm add <registry> <url> [home]")]),n._v("  添加一个镜像源")]),n._v(" "),e("li",[e("code",[n._v("nrm use <registry>")]),n._v("   使用某个镜像源")]),n._v(" "),e("li",[e("code",[n._v("nrm current")]),n._v("          当前在哪个镜像源")]),n._v(" "),e("li",[e("code",[n._v("nrm del <registry>")]),n._v("   删除某个镜像源")])]),n._v(" "),e("blockquote",[e("p",[n._v("还有很多高级的操作可以查看"),e("a",{attrs:{href:"https://github.com/Pana/nrm"}},[n._v("官网")])])]),n._v(" "),e("h2",{attrs:{id:"nodemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodemon"}},[n._v("#")]),n._v(" nodemon")]),n._v(" "),e("blockquote",[e("p",[n._v("nodemon可以让你每次修改完js代码之后,只要保存之后,他就会重新加载这个代码段")])]),n._v(" "),e("ol",[e("li",[n._v("npm install -g nodemon 全局安装nodemon")]),n._v(" "),e("li",[n._v("nodemon app.js   监控这个代码段")])]),n._v(" "),e("blockquote",[e("p",[n._v("还有很多高级的操作可以查看"),e("a",{attrs:{href:"https://github.com/remy/nodemon"}},[n._v("官网")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);