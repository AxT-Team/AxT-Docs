---
title: 自建服务 - AxTBot-v2
---
# 快速起步 - 自主搭建机器人
::: danger 警告
自主搭建有一定的**技术门槛**和**条件**，如果您只是用户，请阅读 [快速起步 - 使用官方机器人](/AxTBot-v2/start) 章节，而不是**本节内容**
:::

## 前置条件
请确保您已经安装了以下环境：
- Python 3.8+
- Git（可选）

## 下载
下载 [AxTBot 仓库源码](https://github.com/AxT-Team/AxTBot)（推荐使用Git）

``` bash
git clone https://github.com/AxT-Team/AxTBot.git
```


## 安装并运行
1. 配置虚拟环境（可选）

进入源码目录，并在控制台中输入如下命令创建venv虚拟环境
``` bash
D:\AxTBot> py -m venv <文件夹名>
```

2. 安装依赖

如果你使用venv虚拟环境，那么在venv虚拟环境中安装依赖
``` bash
D:\AxTBot> <虚拟环境文件夹>\Scripts\Activate
(venv) D:\AxTBot> pip install -r requirements.txt
```

3. 运行

简单一行
``` bash
(venv) D:\AxTBot> py main.py
```

---

## 下一步...

如果您希望配置机器人框架，请参阅 [配置项](config)

如果您希望使用AxTBot进行开发，请参阅 [开发指南](Developer/)