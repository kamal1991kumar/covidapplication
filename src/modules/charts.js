const options = {
  credits: {
    enabled: false,
  },
  legend: {
    symbolHeight: 10,
    symbolWidth: 10,
    symbolRadius: 10,
    verticalAlign: "bottom",
    itemDistance: 5,
    itemMarginTop: 5,
    itemHoverStyle: {
      color: "#000",
    },
    itemStyle: {
      color: "#999",
      fontSize: "10px",
      lineHeight: 20,
    },
  },
  tooltip: {
    pointFormat: "<b>{point.y}</b>",
  },
  chart: {
    plotShadow: false,
    backgroundColor: null,
    plotBorderWidth: 0,
    height: 250,
  },
  title: {
    text: "",
  },
};

export const chart = {
  pie(payload) {
    const _data = payload.map((i) => {
      return [i.status, i.count];
    });

    let _options = {
      ...options,

      chart: {
        ...options.chart,
        type: "pie",
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
          },
          borderWidth: 0,
          colors: ["#09554F", "#25D0C1", "#1DA89C"],
          showInLegend: true,
        },
      },
      series: [{ data: _data }],
    };

    return _options;
  },
  bar(payload) {
    const _series = [
      {
        name: "Pending",
        color: "#09554F",
        data: [],
      },
      {
        name: "Completed",
        color: "#25D0C1",
        data: [],
      },
      {
        name: "Upcoming",
        color: "#1DA89C",
        data: [],
      },
    ];
    const _dump = ["mon", "tue", "wed", "thu", "fri"];
    if (payload.length !== 0) {
      _dump.forEach((i) => {
        const _day = payload[0][i];
        _series[0].data.push(_day[0].count);
        _series[1].data.push(_day[1].count);
        _series[2].data.push(_day[2].count);
      });
    }

    let _options = {
      ...options,
      chart: {
        ...options.chart,
        type: "column",
      },
      tooltip: {
        pointFormat:
          '<span style="font-size:9px;">{series.name}</span>: <b>{point.y}</b><br/>',
      },
      plotOptions: {
        column: {
          stacking: "normal",
          borderWidth: 0,
          dataLabels: {
            enabled: true,
          },
        },
      },
      xAxis: {
        categories: ["Mon", "Tue", "Web", "Thu", "Fri"],
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
      },
      series: _series,
    };

    return _options;
  },
};
