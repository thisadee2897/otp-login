import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'ตัวอย่าง 1', value: 10 },
    { name: 'ตัวอย่าง 2', value: 15 },
    { name: 'ตัวอย่าง 3', value: 7 },
    { name: 'ตัวอย่าง 4', value: 20 },
    { name: 'ตัวอย่าง 5', value: 12 },
    { name: 'ตัวอย่าง 6', value: 5 },
    { name: 'ตัวอย่าง 7', value: 9 },
    { name: 'ตัวอย่าง 8', value: 18 },
    { name: 'ตัวอย่าง 9', value: 11 },
    { name: 'ตัวอย่าง 10', value: 14 },
    { name: 'ตัวอย่าง 11', value: 8 },
    { name: 'ตัวอย่าง 12', value: 16 },
    { name: 'ตัวอย่าง 13', value: 13 },
    { name: 'ตัวอย่าง 14', value: 6 },
    { name: 'ตัวอย่าง 15', value: 19 },
    { name: 'ตัวอย่าง 16', value: 17 },
    { name: 'ตัวอย่าง 17', value: 3 },
    { name: 'ตัวอย่าง 18', value: 22 },
    { name: 'ตัวอย่าง 19', value: 9 },
    { name: 'ตัวอย่าง 20', value: 12 },
];

const Home = () => {
    return (
        <>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <BarChart width={800} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#F0AA06" />
                </BarChart>
            </div>
        </>
    );
};

export default Home;
