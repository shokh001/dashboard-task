import ReactApexChart from 'react-apexcharts'
import './columnchart.css'

const ColumnChart = ({
    title = 'Spending Statistics',
    series = [{
        name: 'Expense',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }]
}) => {


    const options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            },
        },
        fill: {
            colors: ['#4623E9'], // Bar chart ranglari
            opacity: 1, // Bar chart ranglarining o'q bo'lishi
        },
        title: {
            text: title,
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                letterSpacing: '-0.02em',
                textAlign: 'left',

            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '12px',
                endingShape: 'rounded',
                borderRadius: 3,
                borderRadiusApplication: 'top',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            crosshairs: {
                show: false,
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            },
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    '<div class="tooltip-bar">' +
                    "<h4>" +
                    w.globals.seriesNames[0] +
                    "</h4>" +
                    "<span>" +
                    series[seriesIndex][dataPointIndex] +
                    "</span>" +

                    "</div>"
                )
            },
            marker: {
                show: false,
            },
            style: {
                fontSize: '12px',
                fontFamily: undefined,
                backgroundColor: '#000',

            },
            fixed: {
                enabled: false,
                position: 'topLeft',
                offsetX: 0,
                offsetY: 0,
            },
            x: {
                show: false,
            },
        }
    }

    return (
        <ReactApexChart options={options} series={series} type="bar" height={350} />
    )
}

export default ColumnChart