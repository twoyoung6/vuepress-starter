# 出生一件事

# 项目重要文件结构介绍

```
└─newborn-onething // 打包出来的文件夹
└─public
└─src
    ├─assets
    │  ├─css
    │  ├─image
    │  ├─js
    │  │  ├─api.js  // 接口定义
    │  │  ├─consfig.js  // 图片获取接口 getImg 定义
    │  └─json
    ├─components
    ├─router
    ├─store
    └─views
└─云化实名认证.md // 父亲实名认证刷脸需要调用的相关接口文档
└─save.json // 接口/newborn-onething-consumer/base/save最终提交的数据结构
```

# 项目运行

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for test

```
npm run test
or
npm run vconsole
```

### Compiles and minifies for production

```
npm run prod
```

### delpoy

<font color=red>注意！此服务是耦合在后端 java 工程中运行的，所以需要将构建的包提供给后端再进行部署。而环境的判断不需要通过 npm 构建指令来判断，发到线上会自动根据运行环境来判断请求域名。（具体逻辑见 api.js）</font>

# 核心业务流程介绍

## 首次办理流程

### 情况一：三项都办理《出生医学证明》签发 、新生儿入户、基本医保参保登记

- 父母民族成分不同的流程：

  办理须知——>母亲授权（刷脸认证）——>父亲信息页（刷脸认证）——>新生儿信息页——>父母双方信息页——>新生儿入户页——>民族成分申请书——>参保登记——>收件信息——>父母电子签名——>办理成功页

- 父母民族成分相同的流程：

  办理须知——>母亲授权（刷脸认证）——>父亲信息页（刷脸认证）——>新生儿信息页——>父母双方信息页——>新生儿入户页——>参保登记——>收件信息——>父母电子签名——>办理成功页

### 情况二：只办理《出生医学证明》签发 、新生儿入户

- 父母民族成分不同的流程：

  办理须知——>母亲授权（刷脸认证）——>父亲信息页（刷脸认证）——>新生儿信息页——>父母双方信息页——>新生儿入户页——>民族成分申请书——>收件信息——>父母电子签名——>办理成功页

- 父母民族成分相同的流程：

  办理须知——>母亲授权（刷脸认证）——>父亲信息页（刷脸认证）——>新生儿信息页——>父母双方信息页——>新生儿入户页——>收件信息——>父母电子签名——>办理成功页

## 重新提交办理流程

### 医院出生证明审核失败

点击重新提交——>新生儿信息页——>父母信息页——>成功页

### 公安局入户审核失败

点击重新提交——>父母信息页——>新生儿入户页——>成功页

### 医保局参保审核失败

点击重新提交——>参保登记页——>成功页

# 关于本地调试

- 1.本地 ip 打开服务，访问地址类似：http://172.16.124.70:8020/#/ 将 172.16.124.70 替换成自己的本机 ip；

- 2.APP 扫一扫扫码访问效果如下图：

  <img src="src/assets/image/uat.jpg" width="52%">