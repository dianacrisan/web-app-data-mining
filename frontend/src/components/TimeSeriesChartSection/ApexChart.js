import React from 'react';
import Chart from 'react-apexcharts';

export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Actual Price",
                data: this.props.values
            }],
            options: {
                chart: {
                    width: '100%',
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ["#11c0b9"],
                dataLabels: {
                    // enabled: true,
                    style: {
                        colors: ["#000"]
                    }
                },
                stroke: {
                    curve: 'smooth',
                },
                // markers: {
                //     size: 3
                // },
                title: {
                    text: 'Daily Price Evolution',
                    align: 'left'
                },
                xaxis: {
                    categories: this.props.dates,
                    type: "datetime",

                },
                tooltip: {
                    theme: 'dark',
                    style: {
                        colors: ["#11c0b9"]
                    },
                }
            }
        };
    }

    render() {
        return <>
            <div align="center">
                <Chart options={this.state.options} series={this.state.series} type="line" width={500} height={320} />
                <br />
            </div>
        </>
    }
}