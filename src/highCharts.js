import React, { Component } from 'react';
import _ from 'lodash';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/highcharts-more')(Highcharts);


export default class HighCharts extends Component {
  state = {
    chartOptions: {},
    loading: false,
  };
  componentDidMount() {
    const { file_id } = this.props;
    (async () => {
      const res = await fetch(`http://211.75.191.19:3006/file/${file_id}/bubbleChart`);
      const data = await res.text();
      const chartOptions = {
        chart: {
          type: 'packedbubble',
          height: '50%'
        },
        title: {
          text: '特徵分析'
        },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}'
        },
        plotOptions: {
          packedbubble: {
            minSize: '30%',
            maxSize: '80%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.05,
              splitSeries: true,
              seriesInteraction: false,
              dragBetweenSeries: true,
              parentNodeLimit: true
            },
            dataLabels: {
              enabled: true,
              format: '{series.name}',
              filter: {
                property: 'y',
                operator: '>',
                value: 250
              },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
              }
            }
          }
        },
        series: JSON.parse(data)
      };
      this.setState({ loading: false, chartOptions: chartOptions })
    })();

  }
  render() {
    const { chartOptions } = this.state;
    return (
      <div>
        <HighchartsReact options={chartOptions} highcharts={Highcharts} />
      </div>
    );
  };
};



