import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'MG4', value: 10 },
    { name: 'MG5', value: 15 },
    { name: 'VS', value: 7 },
    { name: 'ZS', value: 20 },
    { name: 'HS', value: 12 },
    { name: 'DG', value: 5 },
    { name: 'GC', value: 9 },
    { name: 'MAXUS9', value: 18 },
    { name: 'ES', value: 11 },
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
