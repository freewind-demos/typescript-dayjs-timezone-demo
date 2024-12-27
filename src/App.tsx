import { Alert, Descriptions, Divider, Flex, Space, Typography } from 'antd';
import TimezoneDemo from './components/TimezoneDemo';

const { Title, Paragraph } = Typography;

function App() {
    return (
        <Flex vertical gap="small">
            <Title level={2}>Day.js Timezone 插件</Title>
            <Paragraph>
                Timezone插件提供了处理时区的功能，可以在不同时区之间转换时间，获取特定时区的时间。
                它依赖于UTC插件，需要先加载UTC插件才能使用。
            </Paragraph>
            <div>
                <Paragraph>Timezone插件提供的方法：</Paragraph>
                <Descriptions column={2} bordered>
                    <Descriptions.Item label="静态方法">
                        <Descriptions column={1}>
                            <Descriptions.Item label="dayjs.tz()">获取当前时区</Descriptions.Item>
                            <Descriptions.Item label="dayjs.tz.guess()">猜测当前系统时区</Descriptions.Item>
                            <Descriptions.Item label="dayjs.tz.setDefault('Asia/Shanghai')">设置默认时区</Descriptions.Item>
                            <Descriptions.Item label="dayjs.tz('2024-01-01', 'Asia/Tokyo')">在指定时区解析时间</Descriptions.Item>
                            <Descriptions.Item label="dayjs.tz.guess()">获取浏览器的本地时区</Descriptions.Item>
                        </Descriptions>
                    </Descriptions.Item>
                    <Descriptions.Item label="实例方法">
                        <Descriptions column={1}>
                            <Descriptions.Item label="dayjs().tz()">获取当前对象的时区</Descriptions.Item>
                            <Descriptions.Item label="dayjs().tz('America/New_York')">
                                <Space direction='vertical'>
                                    <div>将时间转换到指定时区</div>
                                    <Alert showIcon message="保持最终UTC不变，修改时区，所以naive time会变"></Alert>
                                </Space>
                            </Descriptions.Item>
                            <Descriptions.Item label="dayjs().tz('Asia/Shanghai', true)">
                                <Space direction='vertical'>
                                    <div>在指定时区创建相同本地时间</div>
                                    <Alert showIcon message="保持naive time不变，修改时区，所以最终UTC会变"></Alert>
                                </Space>
                            </Descriptions.Item>
                        </Descriptions>
                    </Descriptions.Item>
                </Descriptions>
            </div>
            <Divider />
            <TimezoneDemo />
        </Flex>
    );
}

export default App; 