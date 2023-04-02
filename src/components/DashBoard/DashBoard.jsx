import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    const marksArray =[{
        id: 1,
        name : "student-1",
        physics: 90,
        chemistry:75,
        math:95
    },
    {
        id: 2,
        name : "student-2",
        physics: 52,
        chemistry:75,
        math:62
    }
,{
    id: 3,
    name : "student-3",
    physics: 90,
    chemistry:75,
    math:95
}
,{
    id: 4,
    name : "student-4",
    physics: 90,
    chemistry:75,
    math:95
}
,{
    id: 5,
    name : "student-5",
    physics: 90,
    chemistry:75,
    math:95
},
{
    id: 6,
    name : "student-6",
    physics: 90,
    chemistry:75,
    math:95
},{
    id: 7,
    name : "student-7",
    physics: 90,
    chemistry:75,
    math:95
},
{
    id: 8,
    name : "student-8",
    physics: 90,
    chemistry:75,
    math:95
},
{
    id: 9,
    name : "student-9",
    physics: 90,
    chemistry:75,
    math:95
},
{
    id: 10,
    name : "student-10",
    physics: 90,
    chemistry:75,
    math:95
},
{
    id: 11,
    name : "student-11",
    physics: 90,
    chemistry:75,
    math:95
},
{
    id: 12,
    name : "student-12",
    physics: 90,
    chemistry:75,
    math:95
}

]
    return (
        <div>
            <LineChart 
            width={500}
            height={300}
            data={marksArray}
            > <Line dataKey="physics" ></Line>
             <Line dataKey="chemistry" ></Line>
             <Line stroke="#8884d8" dataKey="math" ></Line>
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
             </LineChart>

        </div>
    );
};

export default DashBoard;