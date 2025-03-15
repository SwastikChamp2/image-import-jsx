import React from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";

const data = {
    "name": "Companies",
    "color": "#624bff",  // Purple
    "children": [
        {
            "name": "Capexgo",
            "color": "#198754",  // Green
            "children": [
                {
                    "name": "Hiring",
                    "color": "#dc3545",  // Red
                    "children": [
                        { "name": "Tech", "color": "#624bff", "loc": 50000 },
                        { "name": "Sales", "color": "#198754", "loc": 40000 },
                        { "name": "Creative", "color": "#dc3545", "loc": 45000 }
                    ]
                },
                {
                    "name": "Payroll",
                    "color": "#624bff",  // Purple
                    "children": [
                        { "name": "Salaries", "color": "#198754", "loc": 38000 },
                        { "name": "Benefits", "color": "#dc3545", "loc": 42000 }
                    ]
                }
            ]
        },
        {
            "name": "Vectorio",
            "color": "#dc3545",  // Red
            "children": [
                {
                    "name": "Growth",
                    "color": "#624bff",  // Purple
                    "children": [
                        { "name": "Leaders", "color": "#198754", "loc": 35000 },
                        { "name": "Training", "color": "#dc3545", "loc": 37000 }
                    ]
                },
                {
                    "name": "Skills",
                    "color": "#198754",  // Green
                    "children": [
                        { "name": "Upskill", "color": "#624bff", "loc": 36000 },
                        { "name": "Workshops", "color": "#dc3545", "loc": 34000 }
                    ]
                }
            ]
        },
        {
            "name": "Semno",
            "color": "#624bff",  // Purple
            "children": [
                {
                    "name": "Staffing",
                    "color": "#198754",  // Green
                    "children": [
                        { "name": "Projects", "color": "#dc3545", "loc": 42000 },
                        { "name": "Freelance", "color": "#624bff", "loc": 41000 }
                    ]
                },
                {
                    "name": "Search",
                    "color": "#dc3545",  // Red
                    "children": [
                        { "name": "Executives", "color": "#198754", "loc": 39000 },
                        { "name": "Specialists", "color": "#624bff", "loc": 37000 }
                    ]
                }
            ]
        }
    ]
};





const SunburstChart = () => {
    return (
        <div style={{ height: 300, width: 300, marginBottom: 50 }}>
            <ResponsiveSunburst
                data={data}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                id="name"
                value="loc"
                cornerRadius={2}

                borderColor={{ theme: 'background' }}
                borderWidth={10}
                colors={{ scheme: 'nivo' }}
                childColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            0.1
                        ]
                    ]
                }}
                arcLabel={'id'}
                enableArcLabels={true}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.4
                        ]
                    ]
                }}
            />
        </div>
    );
};

export default SunburstChart;
