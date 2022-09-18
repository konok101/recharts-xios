import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Bar, BarChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChaert = () => {
    const [phones, setPhones]= useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=> {
            const laodData = data.data.data;
            const phnData = laodData.map(phone =>{
                const parts =phone.slug.split('-');
                const ph={
                    name: parts[0],
                    value: parseInt(parts[1])
                };
                return ph;
            })
            setPhones(phnData)
        })

    },[])
    return (
        <BarChart width={800} height={400} data={phones}>
        <Bar   dataKey="value" stroke="#8884d8" strokeWidth={2} />
        <XAxis dataKey="name"></XAxis>
        <Tooltip></Tooltip>
        <YAxis></YAxis>
      </BarChart>
    );
};

export default SpecialChaert;