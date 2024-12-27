# DayJS 时区转换演示

## selectedTime.tz 函数说明

`selectedTime.tz(timezone, keepLocalTime)` 是 Day.js 时区插件的核心方法，用于处理时区转换。它有两种使用方式：

1. **仅转换时区显示（默认模式）**
   - 调用方式：`selectedTime.tz(timezone)`
   - 特点：保持 UTC 时间不变，仅改变时区显示
   - 示例：
     ```javascript
     // 当前时区：Asia/Shanghai
     // UTC: 2024-12-27T12:04:33.323Z
     const selectedTime = dayjs('2024-12-27 20:04:33');
     
     // 转换为 America/Phoenix 时区
     const phoenixTime = selectedTime.tz('America/Phoenix');
     
     // 结果：
     // naive time: 2024-12-27 05:04:33
     // UTC 偏移: -07:00
     // UTC 时间: 2024-12-27T12:04:33.323Z

     // UTC不变，naive time变了
     ```

2. **保持本地时间不变**
   - 调用方式：`selectedTime.tz(timezone, true)`
   - 特点：保持 naive time 不变，改变 UTC 时间
   - 示例：
     ```javascript
     // 当前时区：Asia/Shanghai
     // // UTC: 2024-12-27T12:04:33.323Z
     const selectedTime = dayjs('2024-12-27 20:04:33');
     
     // 转换为 America/Phoenix 时区，保持本地时间不变
     const phoenixTime = selectedTime.tz('America/Phoenix', true);
     
     // 结果：
     // naive time: 2024-12-27 20:04:33
     // UTC 偏移: -07:00
     // UTC 时间: 2024-12-28T03:04:33.323Z

     // naive time不变，UTC变了
     ```

## 运行项目

```bash
npm install
npm start
```
