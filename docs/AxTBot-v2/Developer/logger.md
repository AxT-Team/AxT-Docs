---
title: 日志记录器 - AxTBot-v2
---
# 日志记录器 - AxTBot-v2
在上几节中，我们已经详细了解了当前框架所支持的内置函数以及部分函数装饰器

在本节中，我们将介绍日志记录器，它将记录所有框架所执行的操作，并记录到日志文件中，以便于我们后续分析。

我们可以通过以下方式导入自带的日志记录器

```python
from Core.Logger import logger

logger.info("Hello World!")
logger.warning("Hello World!")
logger.error("Hello World!")
logger.debug("Hello World!")
logger.critical("Hello World!")
logger.event("Hello World!")
logger.success("Hello World!")
```

