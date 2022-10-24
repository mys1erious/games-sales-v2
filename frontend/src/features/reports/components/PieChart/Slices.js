import React from "react";
import * as d3 from "d3";
import {BAR_PIE_DATA_COLORS} from "../../constants";
import {radius} from "./PieChart";


const onMouseOver = e => {
    e.target.style.strokeWidth = "3px";
    e.target.nextElementSibling.style.display = 'inline';
};
const onMouseOut = e => {
    e.target.style.strokeWidth = "1px";
    e.target.nextElementSibling.style.display = 'none';
};


const Slice = ({d, fill, text}) => (
    <g>
        <path d={d}
              fill={fill}
              stroke="black" strokeWidth="2px"
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
        />
        <text x={-315} y={195} fontSize={11}
              cursor="default" pointerEvents="none"
              fill="#635f5d" display="none">
            {text}
        </text>
    </g>
);


const Slices = ({data, pieData, yTitle, xTitle}) => {
    const color = d3.scaleOrdinal()
        .domain(data.map(d => d[xTitle]))
        .range(BAR_PIE_DATA_COLORS);

    const arc = (startAngle, endAngle) => d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
        .startAngle(startAngle)
        .endAngle(endAngle);

    return (
        <g>
        {pieData.map(pieObj =>
            <Slice key={pieObj.data[yTitle]}
                   fill={color(pieObj.data[xTitle])}
                   d={arc(pieObj.startAngle, pieObj.endAngle)()}
                   text = {`${pieObj.data[xTitle]}: ${pieObj.data[yTitle]}`}
            />)}
        </g>
    );
};


export default Slices;
