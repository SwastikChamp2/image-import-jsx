import React, { useState } from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

const data = [
    { name: "Tech", current: 44, total: 100, fill: "#918ef4" },
    { name: "Consultancy", current: 85, total: 120, fill: "#256D3C" },
    { name: "Marketing", current: 70, total: 90, fill: "#36A2EB" },
    { name: "HR", current: 55, total: 80, fill: "#E79B32" },
];

const processedData = data.map(item => ({
    ...item,
    value: (item.current / item.total) * 100,
}));

const totalCurrent = data.reduce((acc, item) => acc + item.current, 0);
const totalTotal = data.reduce((acc, item) => acc + item.total, 0);

const MultiRingChart = () => {
    const [centerLabel, setCenterLabel] = useState({ name: "Total", current: totalCurrent, total: totalTotal });

    const CustomLabel = ({ viewBox }) => {
        const { cx, cy } = viewBox;
        return (
            <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                <tspan x={cx} dy="-10" fontSize="12" fontWeight="500" fill="#555">
                    {centerLabel.name}
                </tspan>
                <tspan x={cx} dy="24" fontSize="20" fontWeight="bold" fill="#222">
                    {centerLabel.current} / {centerLabel.total}
                </tspan>
            </text>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const hoveredItem = data.find(item => item.name === payload[0].payload.name);
            return (
                <div style={{ backgroundColor: "black", color: "white", padding: "5px 10px", borderRadius: "5px" }}>
                    {` ${payload[0].value.toFixed(2)}%`}
                </div>
            );
        }
        return null;
    };

    return (
        <RadialBarChart
            width={240}
            height={280}
            cx="50%"
            cy="42%"
            innerRadius="70%"
            outerRadius="110%"
            barSize={8}
            data={processedData}
            startAngle={90}
            endAngle={-270}
            onMouseLeave={() => setCenterLabel({ name: "Total", current: totalCurrent, total: totalTotal })}
        >
            <RadialBar
                minAngle={15}
                label={<CustomLabel />}
                background
                dataKey="value"
                onMouseEnter={(_, index) => setCenterLabel({
                    name: data[index].name,
                    current: data[index].current,
                    total: data[index].total,
                })}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" height={30} />
        </RadialBarChart>
    );
};

export default MultiRingChart;
