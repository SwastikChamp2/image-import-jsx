import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, Label } from "recharts";

const data = [
    { name: "Completed", value: 75 },
    { name: "Incomplete", value: 25 },
];

const COLORS = ["#6B50FF", "#00CFFF"]; // Purple & Blue

const DonutChart = () => {
    const renderCustomizedLabel = ({ percent }) => {
        return `${(percent * 100).toFixed(0)}%`;
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                    {/* <Label
                        value="Completed"
                        position="center"
                        fontSize="16"
                        fill="#000"
                        fontWeight="bold"
                    /> */}
                </Pie>
                <Tooltip formatter={(value) => `${value}`} />
                <Legend iconType="circle" />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DonutChart;
