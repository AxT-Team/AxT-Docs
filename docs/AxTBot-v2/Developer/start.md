---
title: 创建第一个插件 - AxTBot-v2
---
# 创建第一个插件 - AxTBot-v2

## 概念明确
我们需要明确一个概念：框架会读取在.env中设定的`PLUGINS_DIR`值 并将其应用到插件读取函数中

因此，要创建一个插件，我们首先需要在plugins目录（您设定的plugins_dir值）下创建一个插件

大致格式如下：

```
📂 plugins
└── 📜 test.py
```

此处，您可以使用任意名称，只要目录下没有其他重名文件即可

## 引入模块

我们在`test.py`头部写入以下内容

``` python
from Core.Event import group_handle_event
```

`group_handle_event`是框架提供的一个事件处理函数，用于处理群聊消息。

有关事件处理函数，我们会在 [函数装饰器](handle) 一节细讲

## 写入核心功能

既然我们要实现接收 -> 发送的逻辑，我们就应该合理使用`函数装饰器`实现

以下是一段示例，当接收到命令为/help时的返回内容

```python{1,3,4,19}
from Core.Event import group_handle_event, send_group_message

@group_handle_event('/help', 'help')
async def help_handler(event):
    content = "\n=======AxT社区机器人=======" + "\n" + \
                   "| help | - 获取帮助菜单" + "\n" + \
                   "| ping | - 显示Ping菜单" + "\n" + \
                   "| ipinfo | - 显示IPInfo菜单" + "\n" + \
                   "| whois | - 显示Whois菜单" + "\n" + \
                   "| hotlist | - 显示每日热榜菜单" + "\n" + \
                   "| mc | - 查询Minecraft相关内容" + "\n" + \
                   "| jrrp | - 获取今日人品" + "\n" + \
                   "| remake | - 重来一世 你会变成什么" + "\n" + \
                   "| ask | - 读赛博之书 品百味人生" + "\n" + \
                   "===============" + "\n" + \
                   "官方社区群: 832275338" + "\n" + \
                   "===============" + "\n" + \
                   "AxTBot Public v 2.0"
    await send_group_message(event.group_openid, msg_type=0, content=content, msg_id=event.msg_id)
```

注意看加阴影的行，其中第 1 行我们引入了`group_handle_event`和`send_group_message`两个函数

其中，`group_handle_event`我们已经简单介绍了他的功能，而他的使用方式如下

```python
...
@group_handle_event('/help', 'help')
async def handle_event(event):
    # 这里执行其他操作...
    pass
```

其中，括号内的即为插件的注册命令

你可以看到，我在这里同时做了/和不带/的命令，这是因为框架开发周期较短，没有对自定义前缀进行合理判断而导致注册命令较乱

而后紧随一个`异步函数`，我们在这里给他命名为`handle_event`

::: tip
这里并非只允许`handle_event`名称的函数，实际上我们不对此做限制，您可以使用任何非内置函数名称
:::

我们就可以在函数内做判断了

## 完善插件

按照上述内容，我们已经能够接收由`/help`和`help`开头的信息并传入对应的函数装饰器了

那么，我们应该怎么做才能发回消息呢？

我们需要引入的就是`send_group_message`函数

用法如下：
```python
...
# 前部省略
@group_handle_event('/help', 'help')
async def handle_event(event):
    # 这里执行其他操作...
    await send_group_message(event.group_openid, msg_type=0, content='帮助菜单', msg_id=event.msg_id)
```

我们需要分析以下`send_group_message`函数，其接受参数较多，但为讲解方便，我们只对代码中出现的参数进行解释

- `group_openid`: 群聊ID **必填**

- `msg_type`: 发送消息的类型，详见[发送消息-群聊 QQ机器人文档](https://bot.q.qq.com/wiki/develop/api-v2/server-inter/message/send-receive/send.html#群聊)

- `content`: 消息内容

- `msg_id`: 用于回复用户消息，不填即为**主动消息**。有关主动消息限频，详见[发送消息 QQ机器人文档](https://bot.q.qq.com/wiki/develop/api-v2/server-inter/message/send-receive/send.html)

同时，我们还发现，在异步函数的开头，我们引入了一个量`event`，其带有当前事件内容（开发周期问题，富文本类消息的附件仍待验证可用性）
event的可用内容如下：
- group_openid: 群聊ID
- user_id: 用户ID （可能在未来更新为user_openid）
- content: 用户发送的信息（开发周期问题，content会附带命令头）
- timestamp: 时间戳，开放平台接收到用户信息的时间
- msg_id: 消息ID
- attachments: 附件文件，默认列表
- channel_id: 子频道ID
- guild_id: 频道ID
- seq: 发送消息的序列号
- event_type: 事件类型，详见 [事件 - QQ机器人文档](https://bot.q.qq.com/wiki/develop/api-v2/server-inter/message/send-receive/event.html) 中的各个事件类型

然后重启机器人，我们就可以使用`@机器人 help`或者`@机器人 /help`激活命令了，此时机器人会返回`@用户 帮助菜单`

那么，恭喜你，你已经完成了最基础的插件编写

## 下一步...

了解函数装饰器：[函数装饰器](./handle.md)

了解内置函数：[内置函数](./function.md)

使用日志记录器：[日志记录器](./logger.md)