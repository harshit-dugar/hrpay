/* eslint-disable react/prop-types */
import {Line} from 'react-chartjs-2'

function Charts({data}) {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
        {
            label: 'Salary Spent',
            data: Object.values(data),
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1
        }
        ]
    }
    const options = {
        scales: {
            x: {
            title: {
            display: true,
            text: 'Month'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Salary Spent'
            }
        }
        }
    };
  return (
    <div>
        <Line data={chartData} options={options}/>
    </div>
  )
}

export default Charts