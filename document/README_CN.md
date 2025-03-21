# Data flow diagram

（Data Flow Diagram，数据流程图）是一种图形化工具，用于描述系统或过程中数据流动的路径和处理过程。DFD图是一种结构化分析工具，常用于软件开发、系统分析和设计等领域，以可视化和清晰地表示数据流动和处理过程。

DFD图由以下几个核心元素组成：

进程（Process）：表示对数据进行处理、转换或操作的功能模块。进程通常用圆角矩形表示，例如计算、验证、存储等。

数据流（Data Flow）：表示在系统或过程中流动的数据。数据流通常用箭头线表示，箭头指向数据的流向方向。数据流可以是输入数据、输出数据或在不同进程之间传递的中间数据。

数据存储（Data Store）：表示数据在系统中的存储位置，如数据库、文件等。数据存储通常用长方形表示。

外部实体（External Entity）：表示与系统进行交互的外部实体，如用户、其他系统、传感器等。外部实体通常用矩形表示。

通过连接进程、数据流、数据存储和外部实体，DFD图展示了数据的流动路径和处理过程，帮助分析人员和设计人员理解系统的功能和数据交互。

DFD图一般分为多个层次，从顶层开始，逐步展开细化。顶层DFD图显示系统的整体概览，随着层次的深入，DFD图逐渐展示了更详细的数据流程和处理过程。

## example

![example](example.svg)

```dfd
entity	Clock
entity	Button
entity	Lamp
entity	Power Power supply
control	Timer
process	Driver

Driver  <:: Button	switch on
Timer   <:: Button	reset

Timer	::> Driver	switch off
Clock	::> Timer	tick

Driver	--> Lamp	voltage
Power	->> Driver	voltage
```

