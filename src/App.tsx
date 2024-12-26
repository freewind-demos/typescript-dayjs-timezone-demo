import { Descriptions, Divider, Flex, Typography } from 'antd';
import UtcDemo from './components/UtcDemo';

const { Title, Paragraph } = Typography;

function App() {
    return (
        <Flex vertical gap="small">
            <Title level={2}>Day.js UTC 插件</Title>
            <Paragraph>
                UTC插件提供了在UTC模式下解析、验证、操作和显示日期的功能。
                它允许你在本地模式和UTC模式之间切换，使跨时区处理日期变得更容易。
            </Paragraph>
            <div>
                <Paragraph>UTC插件提供的方法：</Paragraph>
                <Descriptions column={2} bordered>
                    <Descriptions.Item label="静态方法">
                        <Descriptions column={1}>
                            <Descriptions.Item label="dayjs.utc()">创建当前时间的UTC模式对象</Descriptions.Item>
                            <Descriptions.Item label="dayjs.utc(anotherDayjs)">将一个已有的 Dayjs 对象转换为 UTC 模式</Descriptions.Item>
                            <Descriptions.Item label="dayjs.utc(date)">将一个 Date 对象转换为 UTC 模式的 Dayjs 对象</Descriptions.Item>
                            <Descriptions.Item label="dayjs.utc('2024-01-01')">从字符串解析并创建UTC模式的对象</Descriptions.Item>
                            <Descriptions.Item label="dayjs.utc(1704067200000)">从时间戳创建UTC模式的对象</Descriptions.Item>
                            <Descriptions.Item label="dayjs.utc([2024, 0, 1])">从年、月（0-11）、日等数组创建UTC模式的对象</Descriptions.Item>
                        </Descriptions>
                    </Descriptions.Item>
                    <Descriptions.Item label="实例方法">
                        <Descriptions column={1}>
                            <Descriptions.Item label="dayjs().utc()">将当前对象转换为UTC模式</Descriptions.Item>
                            <Descriptions.Item label="dayjs().local()">将UTC模式的对象转换回本地模式</Descriptions.Item>
                            <Descriptions.Item label="dayjs().isUTC()">检查对象是否处于UTC模式，返回布尔值</Descriptions.Item>
                            <Descriptions.Item label="dayjs().utcOffset()">获取UTC偏移量（分钟）</Descriptions.Item>
                            <Descriptions.Item label="dayjs().utcOffset(120)">设置UTC偏移量为+02:00</Descriptions.Item>
                            <Descriptions.Item label="dayjs().utcOffset(-120)">设置UTC偏移量为-02:00</Descriptions.Item>
                        </Descriptions>
                    </Descriptions.Item>
                </Descriptions>
            </div>
            <Divider />
            <UtcDemo />
        </Flex>
    );
}

export default App; 