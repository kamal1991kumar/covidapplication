 import { cloneDeepWith } from "lodash";

const options = {
    credits: {
        enabled: false
    },
    legend: {
        symbolHeight: 10,
        symbolWidth: 10,
        symbolRadius: 10,
        verticalAlign: 'bottom',
        itemDistance: 5,
        itemMarginTop: 5,
        itemHoverStyle: {
            color: '#000',
        },
        itemStyle: {
            color: '#999',
            fontSize: '10px',
            lineHeight: 20,
        }
    },
    tooltip: {
        pointFormat: '<b>{point.y}</b>'
    },
    chart: {
        plotShadow: false,
        backgroundColor: null,
        plotBorderWidth: 0,
        height: 250,
    },
    title: {
        text: ''
    }
};

export const chart = {
    pie() {

        let _options = {
            ...options,
            chart: {
                ...options.chart,
                type: "pie"
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false
                    },
                    borderWidth: 0,
                    colors: ["#09554F", "#25D0C1", "#1DA89C"],
                    showInLegend: true
                }
            },
            series: [{ data: [['Pending', 10], ['Completed', 10], ['Upcoming', 10]] }]
        };

        return _options;
    },
    bar() {

        let _options = {
            ...options,
            chart: {
                ...options.chart,
                type: "column"
            },
            tooltip: {
                pointFormat:
                    '<span style="font-size:9px;">{series.name}</span>: <b>{point.y}</b><br/>'
            },
            plotOptions: {
                column: {
                    stacking: "normal",
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            xAxis: {
                categories: [ 'Mon', 'Tue', 'Web', 'Thu', 'Fri' ]
            },
            yAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0
            },
            series: [{
                name: 'Pending',
                color: '#09554F',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Completed',
                color: '#25D0C1',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Upcoming',
                color: '#1DA89C',
                data: [3, 4, 4, 2, 5]
            }]
        };

        return _options;

    }
};