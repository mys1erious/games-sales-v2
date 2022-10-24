import React, {useState} from "react";

import BarChart from "../BarChart";
import PieChart from "../PieChart";
import SwitchButton from "./SwitchButton";

const BAR = 'bar';
const PIE = 'pie';


const BarPieChart = ({data, title, xTitle, yTitle}) => {
    const [type, setType] = useState(BAR);

    const charts = {
        [BAR]: <BarChart data={data} title={title}
                         xTitle={xTitle} yTitle={yTitle}/>,
        [PIE]: <PieChart data={data} title={title}
                         xTitle={xTitle} yTitle={yTitle}/>
    }

    const switchOnChange = () => {
        if (type === BAR)
            setType(PIE)
        else if (type === PIE)
            setType(BAR)
    };

    return(
        <>
        <SwitchButton sx={{float: 'right', top: 5, right: 10}}
            onChange={switchOnChange}/>
        {charts[type]}
        </>
    )
};


export default React.memo(BarPieChart);
