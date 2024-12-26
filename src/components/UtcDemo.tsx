import { DatePicker, Space, Table, Typography } from 'antd';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import React, { useMemo } from 'react';
import { getColorFromText } from '../utils/colors';

dayjs.extend(utc);

const { Paragraph } = Typography;

interface TimeData {
    key: string;
    type: string;
    code: string;
    format: string;
    toString: string;
    toISOString: string;
    utcOffset: number;
    isUtc: string;
}

const UtcDemo: React.FC = () => {
    const [selectedTime, setSelectedTime] = React.useState<dayjs.Dayjs | null>(null);

    const selectedLocalTime = useMemo(() => {
        if (!selectedTime) return null;
        return dayjs(selectedTime);
    }, [selectedTime]);

    const utcTime = useMemo(() => {
        if (!selectedLocalTime) return null;
        return selectedLocalTime.utc();
    }, [selectedTime]);

    const convertedLocalTime = useMemo(() => {
        if (!utcTime) return null;
        return utcTime.local();
    }, [selectedLocalTime]);

    const utcTimeWithOffset = useMemo(() => {
        if (!utcTime) return null;
        return utcTime.utcOffset(120);
    }, [utcTime]);

    const timeComparisonData = useMemo(() => {
        if (!selectedLocalTime || !utcTime || !convertedLocalTime || !utcTimeWithOffset) return [];

        return [
            {
                key: 'original local',
                type: 'OriginalLocal Time',
                code: 'dayjs(selectedTime)',
                format: selectedLocalTime.format('YYYY-MM-DD HH:mm:ss Z'),
                toString: selectedLocalTime.toString(),
                toISOString: selectedLocalTime.toISOString(),
                utcOffset: selectedLocalTime.utcOffset(),
                isUtc: selectedLocalTime.isUTC() ? '是' : '否',
            },
            {
                key: 'utc',
                type: 'UTC Time',
                code: 'dayjs.utc(selectedTime)',
                format: utcTime.format('YYYY-MM-DD HH:mm:ss Z'),
                toString: utcTime.toString(),
                toISOString: utcTime.toISOString(),
                utcOffset: utcTime.utcOffset(),
                isUtc: utcTime.isUTC() ? '是' : '否',
            },
            {
                key: 'converted local',
                type: 'Converted Local Time',
                code: 'dayjs(utcTime).local()',
                format: convertedLocalTime.format('YYYY-MM-DD HH:mm:ss Z'),
                toString: convertedLocalTime.toString(),
                toISOString: convertedLocalTime.toISOString(),
                utcOffset: convertedLocalTime.utcOffset(),
                isUtc: convertedLocalTime.isUTC() ? '是' : '否',
            },
            {
                key: 'utc with offset',
                type: 'UTC with Offset',
                code: 'dayjs(utcTime).utcOffset(120)',
                format: utcTimeWithOffset.format('YYYY-MM-DD HH:mm:ss Z'),
                toString: utcTimeWithOffset.toString(),
                toISOString: utcTimeWithOffset.toISOString(),
                utcOffset: utcTimeWithOffset.utcOffset(),
                isUtc: utcTimeWithOffset.isUTC() ? '是' : '否',
            }
        ] as TimeData[];
    }, [selectedTime, utcTime]);

    const columns = [
        {
            title: '时间类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '代码',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: `format('YYYY-MM-DD HH:mm:ss Z')`,
            dataIndex: 'format',
            key: 'format',
            onCell: (record: TimeData) => ({
                style: {
                    backgroundColor: getColorFromText(record.format),
                }
            })
        },
        {
            title: 'toString()',
            dataIndex: 'toString',
            key: 'toString',
            onCell: (record: TimeData) => ({
                style: {
                    backgroundColor: getColorFromText(record.toString),
                }
            })
        },
        {
            title: 'toISOString()',
            dataIndex: 'toISOString',
            key: 'toISOString',
            onCell: (record: TimeData) => ({
                style: {
                    backgroundColor: getColorFromText(record.toISOString),
                }
            })
        },
        {
            title: 'utcOffset()',
            dataIndex: 'utcOffset',
            key: 'utcOffset',
            onCell: (record: TimeData) => ({
                style: {
                    backgroundColor: getColorFromText(String(record.utcOffset)),
                }
            })
        },
        {
            title: 'isUTC()',
            dataIndex: 'isUtc',
            key: 'isUtc',
            onCell: (record: TimeData) => ({
                style: {
                    backgroundColor: getColorFromText(record.isUtc),
                }
            })
        },
    ];

    return (
        <Space direction="vertical" >
            <Space>
                选择时间：
                <DatePicker
                    showTime
                    onChange={(date) => setSelectedTime(date ?? undefined)}
                    value={selectedTime}
                />
            </Space>
            <div>
                {selectedTime && (
                    <Table
                        dataSource={timeComparisonData}
                        columns={columns}
                        pagination={false}
                        bordered
                    />
                )}
            </div>
        </Space>
    );
};

export default UtcDemo; 