import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { chart } from '../modules';
import {http} from '../modules/http'

export default function ChartView( props ) {

    


    const { chartType, ...rest } = props;
    const _options = chart[ chartType ]( { ...rest } );
    


    useEffect( () => {
    http.task.getpie().then( ( response ) => {
        console.log(response.payload.objectList)
        
       })
    })

    return(
        <HighchartsReact
            highcharts={Highcharts}
            options={ _options }
            
        />
    );
}

ChartView.defaultProps = {
    chartType: 'pie'
};


// const [count1,setcount1]=useState([

    // ])
    // const [count2,setcount2]=useState([

    // ])
    // const [count3,setcount3]=useState([

    // ])


    // const id=1
        // setcount1(response.payload.objectList[0].count)
        // setcount2(response.payload.objectList[1].count)
        // setcount3(response.payload.objectList[2].count)