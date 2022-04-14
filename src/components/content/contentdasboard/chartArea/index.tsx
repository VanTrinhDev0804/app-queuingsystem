import React from 'react'
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { useParams } from 'react-router-dom';
import { IParams, ItemCharts } from 'types';




const DasboardChartArea: React.FC<ItemCharts> = (props) => {

    const data = props.data
    console.log('data', data)
    const config = {
        data,
        width: 754,
        height: 373,
        xField: 'x',
        yField: 'y',
        xAxis: {
            range: [0, 1],
            tickCount: 4,
            max: 31
        },
        yAxis: {
            max: 6000,
        },
        smooth: true,


    };


    return (
        <Area {...config} />
        
    )
}

export default DasboardChartArea