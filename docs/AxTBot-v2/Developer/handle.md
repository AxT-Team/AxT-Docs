---
title: 函数装饰器 - AxTBot-v2
---
# 函数装饰器 - AxTBot-v2

::: danger
我们强烈推荐您先阅读上一节内容，否则可能出现知识衔接问题
:::

## group_handle_event
> 群聊事件处理函数装饰器，用于处理群事件
用法：
```python
from Core.Event import group_handle_event
...
@group_handle_event('/help', 'help')
async def handle_event(event):
    # 这里执行其他操作...
    pass
```
其中，event参数会携带进内容

- group_openid: 群聊ID
- user_id: 用户ID （可能在未来更新为user_openid）
- content: 用户发送的信息（开发周期问题，content会附带命令头）
- timestamp: 时间戳，开放平台接收到用户信息的时间
- msg_id: 消息ID
- attachments: 附件文件，默认列表



## private_handle_event
> 私聊事件处理函数装饰器，用于处理私聊事件
用法与上文相同，但event传入参数有变

- user_id: 用户ID （可能在未来更新为user_openid）
- content: 用户发送的信息（开发周期问题，content会附带命令头）
- timestamp: 时间戳，开放平台接收到用户信息的时间
- msg_id: 消息ID
- attachments: 附件文件，默认列表

## channel_handle_event
> 子频道事件处理函数装饰器，用于处理子频道事件

event带有

- user_id: 用户ID （可能在未来更新为user_openid）
- content: 用户发送的信息（开发周期问题，content会附带命令头）
- timestamp: 时间戳，开放平台接收到用户信息的时间
- msg_id: 消息ID
- attachments: 附件文件，默认列表
- channel_id: 子频道ID
- guild_id: 频道ID

## pchannel_handle_event
> 频道私聊事件处理函数装饰器，用于处理频道私聊事件

event带有

- user_id: 用户ID （可能在未来更新为user_openid）
- content: 用户发送的信息（开发周期问题，content会附带命令头）
- timestamp: 时间戳，开放平台接收到用户信息的时间
- msg_id: 消息ID
- attachments: 附件文件，默认列表
- channel_id: 子频道ID
- guild_id: 频道ID

::: warning WARN
目前暂未对除group_handle_event之外的其他装饰器进行测试，可能存在问题，请及时反馈
:::

## generic_handle_event
> 通用事件处理函数装饰器，用于处理所有事件

::: danger 请注意
此时对应的所有事件请自行通过传入的event.event_type进行判断
:::

```python
from Core.Event import generic_handle_event

@generic_handle_event()
async def handler(event):
```