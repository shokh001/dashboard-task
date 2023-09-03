import React from 'react'
import ReactApexChart from 'react-apexcharts'

const DonutChart = ({
    series = [20, 10, 30, 20, 40, 80],
    colors = ['#FFACC8', '#4120A9', '#7C5CFC', '#5CAFFC', '#A1A9FE', '#EB7CA6'],
}) => {

    const options = {
        chart: {
            type: 'donut',
            borderRadius: '10',
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    background: 'transparent',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            fontSize: '22px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 600,
                            color: '#373d3f',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                },
            }
        },
        colors: colors,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                },
            }
        }]
    }

    return (
        <ReactApexChart options={options} series={series} type="donut" />
    )
}

export default DonutChart