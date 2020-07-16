import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { chart } from "../modules";
import { http } from "../modules/http";

export default function ChartView(props) {
  const { chartType } = props;
  const [state, setState] = useState({
    isLoading: true,
    chartData: [],
  });
  const _options = chart[chartType](state.chartData);

  useEffect(() => {
    http.chart[chartType]().then((response) => {
      setState({ isLoading: false, chartData: response.payload.objectList });
    });
  }, []);

  if (state.isLoading) {
    return (
      <div className="grid-inner">
        <div className="loader" />
      </div>
    );
  }

  return <HighchartsReact highcharts={Highcharts} options={_options} />;
}

ChartView.defaultProps = {
  chartType: "pie",
};
