---
title: 内置函数 - AxTBot-v2
---
在讲解过事件装饰器以后，我们可以更新一步，了解怎么样做出发送消息的动作

::: danger
请注意，由于开发周期较短，目前暂未支持撤回消息或管理发送消息的功能
:::

## load_plugins
异步函数，用于载入插件

其可传入一个`plugins_dir` 此时会从指定的目录中 使用importlib热加载插件，不填则默认.env中配置的plugins_dir

```python
from Core.Event import load_plugins
await load_plugins(plugins_dir="plugins")
```

## get_message_count
异步函数，用于获取各种类型的消息计数，返回int值

必须传入event_type，可选值为：
- 单聊 C2C_MESSAGE_CREATE
- 群聊 GROUP_AT_MESSAGE_CREATE
- 频道私聊 DIRECT_MESSAGE_CREATE
- 文字子频道 AT_MESSAGE_CREATE
- (私域)文字子频道 MESSAGE_CREATE

在部分旧版本中，还支持读取如加好友、删好友等事件，但目前已经添加了机制判断，因此不再支持，可能未来会重新支持

```python
from Core.Event import get_message_count
count = await get_message_count(event_type="C2C_MESSAGE_CREATE")
print(count) # 输出消息数
```

## send_group_message
异步函数，用于发送群聊消息

- group_openid: 群聊的 openid
- msg_type: 消息类型
    - 0: 文本消息
    - 2: Markdown 消息
    - 3: Ark 消息
    - 4: Embed 消息
    - 7: 富媒体消息
- content: 文本内容（仅在 msg_type=0 时使用）
- markdown: Markdown 对象（仅在 msg_type=2 时使用）
- ark: Ark 对象（仅在 msg_type=3 时使用）
- embed: Embed 对象（仅在 msg_type=4 时使用）
- media: 富媒体对象（仅在 msg_type=7 时使用）
- msg_id: 前置收到的用户发送过来的消息 ID，用于发送被动消息（回复）
- msg_seq: 回复消息的序号，与 msg_id 联合使用
- event_id: 前置收到的事件 ID，用于发送被动消息

```python
from Core.Event import group_handle_event, send_group_message
...
@group_handle_event('/help', 'help')
async def handle_event(event):
    await send_group_message(group_openid=event.group_openid, msg_type=0, content="help")
```

## upload_media
异步函数，用于上传媒体文件

- group_openid: 群聊的 openid
- file_type: 媒体类型（1: 图片, 2: 视频, 3: 语音）
- url: 媒体资源的 URL
- srv_send_msg: 是否直接发送消息（True/False）

::: warning 请注意
srv_send_msg参数若设置为true，消息将立即发送，且占用 **`主动频次`**

此函数的返回值应保存，然后通过send_group_message函数发送消息
:::

```python
from Core.Event import group_handle_event, send_group_message, upload_media

@group_handle_event('test','/test')
async def event_handler(event):
    response, code = await upload_media(event.group_openid, 1, "https://test.link/1.png", False)
    # 此处code若为1，即成功上传，任何原因导致的上传失败则返回0，且返回错误信息
    if code == 1:
        await send_group_message(event.group_openid, msg_type=7, content=" ", msg_id=event.msg_id, media=response)
        # 由于开放平台的蛋疼机制，在type=7的时候还需要填入content为空格
```

## get_current_access_token
同步函数，用于获取当前登录的access_token

```python
from Core.Auth import auth
access_token = auth.get_current_access_token()
```

## get_current_run_time
同步函数，用于获取当前框架在线运行时间

```python
from Core.Auth import auth
run_time = auth.get_current_run_time()
```


