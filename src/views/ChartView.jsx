import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { chart } from '../modules';

export default function ChartView( props ) {

    const { chartType, ...rest } = props;
    const _options = chart[ chartType ]( { ...rest } );

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