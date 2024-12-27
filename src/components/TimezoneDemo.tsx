import { Alert, DatePicker, Space, Table, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React, { useMemo } from 'react';
import { getColorFromText } from '../utils/colors';

dayjs.extend(utc);
dayjs.extend(timezone);

console.log('Timezone plugin loaded:', typeof dayjs.tz === 'function');
console.log('UTC plugin loaded:', typeof dayjs.utc === 'function');

const { Text } = Typography;

interface TimeData {
    key: string;
    title: string;
    timezone: string;
    localTime: string;
    utcOffset: string;
    isoString: string;
}

const specifiedTimezone = 'America/Phoenix'

const TimezoneDemo: React.FC = () => {
    const [selectedTime, setSelectedTime] = React.useState<dayjs.Dayjs>(dayjs());

    const guessedTimezone = useMemo(() => {
        return dayjs.tz.guess();
    }, []);

    const timeComparisonData = useMemo(() => {
        if (!selectedTime) return [];

        const selectedTimeInfo = (): TimeData => {
            const newTime = selectedTime;
            return {
                key: specifiedTimezone,
                title: 'selectedTime',
                timezone: guessedTimezone,
                localTime: newTime.format('YYYY-MM-DD HH:mm:ss'),
                utcOffset: newTime.format('Z'),
                isoString: newTime.toISOString()
            }
        }
        const newTimeChangeNaiveTime = (): TimeData => {
            const newTime = dayjs(selectedTime).tz(specifiedTimezone)
            return {
                key: specifiedTimezone,
                title: 'selectedTime.tz(timezone)',
                timezone: specifiedTimezone,
                localTime: newTime.format('YYYY-MM-DD HH:mm:ss'),
                utcOffset: newTime.format('Z'),
                isoString: newTime.toISOString()
            }
        }

        const newTimeKeptNaiveTime = (): TimeData => {
            const newTime = dayjs(selectedTime).tz(specifiedTimezone, true);
            return {
                key: specifiedTimezone,
                title: 'selectedTime.tz(timezone, true)',
                timezone: specifiedTimezone,
                localTime: newTime.format('YYYY-MM-DD HH:mm:ss'),
                utcOffset: newTime.format('Z'),
                isoString: newTime.toISOString()
            }
        }

        return [
            selectedTimeInfo(),
            newTimeChangeNaiveTime(),
            newTimeKeptNaiveTime()
        ]
    }, [selectedTime]);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '时区',
            dataIndex: 'timezone',
            key: 'timezone',
        },
        {
            title: 'naive time',
            dataIndex: 'localTime',
            key: 'localTime',
            onCell: (record: TimeData) => ({
                style: {
                    backgroundColor: getColorFromText(record.localTime),
                }
            })
        },
        {
            title: 'UTC偏移',
            dataIndex: 'utcOffset',
            key: 'utcOffset',
            onCell: (record: TimeData) => ({
                style: {
                    backgroundColor: getColorFromText(record.utcOffset),
                }
            })
        },
        {
            title: 'UTC',
            dataIndex: 'isoString',
            key: 'isoString',
            onCell: (record: TimeData) => ({
                style: {
                    backgroundColor: getColorFromText(record.isoString),
                }
            })
        }
    ];

    return (
        <Space direction="vertical" size="large">
            <Space direction="vertical">
                <Text>当前系统时区：{guessedTimezone}</Text>
                <Space>
                    <div>
                        选择时间：
                        <DatePicker
                            showTime
                            onChange={setSelectedTime}
                            value={selectedTime}
                        />
                    </div>
                    <div>
                        当前时区：<Tag>{guessedTimezone}</Tag>
                    </div>
                    <div>
                        指定新时区：<Tag>{specifiedTimezone}</Tag>
                    </div>
                </Space>
                <Text>
                    {selectedTime && selectedTime.tz(specifiedTimezone).format('YYYY-MM-DD HH:mm:ss Z')}
                </Text>
            </Space>
            <Alert showIcon message={
                <div>仔细观察 <Tag>naive time</Tag> 和 <Tag>UTC</Tag>，体会这个插件的作用</div>
            } />
            <Table
                dataSource={timeComparisonData}
                columns={columns}
                pagination={false}
                bordered
            />
        </Space>
    );
};

export default TimezoneDemo;