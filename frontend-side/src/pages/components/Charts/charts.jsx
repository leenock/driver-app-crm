import React from 'react'
import { XYPlot, Lineseries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'recharts';


const data = [
    { x: 0, y:8 },
    { x: 1, y:5 },
    { x: 2, y:4 },
    { x: 3, y:9 },
    { x: 4, y:1 },
    { x: 5, y:7 },
    { x: 6, y:6 },
    { x: 7, y:3 },
    { x: 8, y:2 },
    { x: 9, y:8 },
 
  ];

const charts = () => {
  return (
   <div style={{ marginTop: "15px"}}>
    <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <Lineseries data={data} color="red" />
        <Lineseries data={data} color="purple" />
        <Lineseries data={data} color="yellow" />
    </XYPlot>
   </div>
  )
}

export default charts