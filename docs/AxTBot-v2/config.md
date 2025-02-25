---
title: 配置项 - AxTBot-v2
---

# 配置项 - AxTBot-v2

得益于 python-dotenv 的支持，我们可以通过项目根目录下的 `.env` 文件配置机器人

项目树如下：
```bash
AxTBot-Public
│  .env <--- 配置文件  # [!code focus]
│  .env.example
│  main.py
│  README.md
│  requirements.txt
├─.venv
├─Core
├─data
├─plugins
└─utils
```

## 默认的配置项
通常，我们会在项目中附带`.env.example`用于配置解释，以下是当前的.env.example文件

```bash
# 连接配置
IP=127.0.0.1    # 监听IP地址 可不填 默认为0.0.0.0
PORT=8443       # 监听端口 可不填 默认为8443
WEBHOOK_PATH=/webhook   # 回调路径 可不填 默认为根 / 

## SSL配置 可不指定路径 不指定时默认为./data/cert.pem和./data/key.pem
SSL_CERT=./data/cert.pem
SSL_KEY=./data/key.pem


# 机器人配置
APPID=appid # QQ开放平台展示的AppID
BOT_SECRET=appsecret # QQ开放平台展示的AppSecret


# 通用配置
LOG_LEVEL=INFO # 日志等级 可不填 默认为INFO 可选值:INFO DEBUG


DATA_DIR=./data # 数据目录 可不填 默认为./data
LOG_DIR=./logs # 日志目录 可不填 默认为./logs
PLUGINS_DIR=./plugins # 插件目录 可不填 默认为./plugins
```

## 配置项说明

```bash{2-4}
# 连接配置
IP=127.0.0.1    # 监听IP地址 可不填 默认为0.0.0.0
PORT=8443       # 监听端口 可不填 默认为8443
WEBHOOK_PATH=/webhook   # 回调路径 可不填 默认为根 / 
```

前三个配置项是连接配置，用于配置机器人的监听地址和端口，以及回调路径

按照官方的说法，`PORT`只允许80 / 443 / 8080 / 8443四个端口，如果您正在使用其他方式进行转发端口则可忽略本限制

其中，`IP`项推荐填写`0.0.0.0`而非示例中的`127.0.0.1`，否则可能造成**无法访问外网**的问题

```bash{2-3}
## SSL配置 可不指定路径 不指定时默认为./data/cert.pem和./data/key.pem
SSL_CERT=./data/cert.pem
SSL_KEY=./data/key.pem
```

SSL配置，主要是基于官方平台的HTTPS限制以及ASGI服务启动时的限制

由于需要实际证书，且我们 **`并未测试过`** 自签证书的可用性，所以请上载可用证书

```bash{2-3}
# 机器人配置
APPID=appid # QQ开放平台展示的AppID
BOT_SECRET=appsecret # QQ开放平台展示的AppSecret
```
APPID和Bot_Secret分别对应开放平台（见下图）中的 `APPID（机器人ID）` 和 `AppSecret（机器人密钥）`

![pic](https://static.axtn.net/docs/img/axtbot/bot_setting.png)

::: tip 请注意
AppSecret需要机器人管理权限，**被分配的管理员无权限**

这两项必填！
:::

``` bash
# 通用配置
LOG_LEVEL=INFO # 日志等级 可不填 默认为INFO 可选值:INFO DEBUG

DATA_DIR=./data # 数据目录 可不填 默认为./data
LOG_DIR=./logs # 日志目录 可不填 默认为./logs
PLUGINS_DIR=./plugins # 插件目录 可不填 默认为./plugins
```

如注释所言，这些内容都有默认值，可不填