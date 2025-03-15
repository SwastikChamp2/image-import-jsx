import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
    { day: "Mon", new: 20, closed: 10 },
    { day: "Tue", new: 32, closed: 18 },
    { day: "Wed", new: 50, closed: 30 },
    { day: "Thu", new: 38, closed: 25 },
    { day: "Fri", new: 35, closed: 20 },
    { day: "Sat", new: 49, closed: 28 },
    { day: "Sun", new: 50, closed: 30 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border rounded shadow">
                <p className="font-semibold">{label}</p>
                <p>✅ Submitted: {payload[0].value}</p>
                <p>🔵 New: {payload[1].value}</p>
            </div>
        );
    }
    return null;
};

const LineBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="new" stroke="#6B5B95" strokeWidth={2} dot={{ fill: "#6B5B95", r: 5 }} />
                <Line type="monotone" dataKey="closed" stroke="#BDC3C7" strokeWidth={2} dot={{ fill: "#BDC3C7", r: 5 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineBarChart;
