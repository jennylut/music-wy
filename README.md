## React creat-react-app 脚手架搭建环境步骤

##  npm install -g create-react-app  <!-- 全局安装creat-react-app -->

## create-react-app myapp  <!-- 使用命令创建应用，myapp为项目名称 -->

## cd myapp   <!-- 进入目录，然后启动  -->

## npm start


## 更改默认端口号- 进入node-modules文件夹找到start.js,找到一下两行
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3300;
const HOST = process.env.HOST || '0.0.0.0';

这里可以更改默认端口号3000为3300