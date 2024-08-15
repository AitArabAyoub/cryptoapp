import React from 'react'
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
function LineChart({history}) {
    const coinPrice = [];
    const coinTimestamp = [];
    for (let i = 0; i < history?.length; i++) {
        coinPrice.push(history[i]?.price)
        coinTimestamp.push(new Date(history[i]?.timestamp).toLocaleDateString());
    }
    const data =  {
        labels: coinTimestamp,
        datasets: [{
            fill : false,
            label: 'Price in USD',
            data: coinPrice,
            borderColor : "#0071bd"
        }]
    };
    const options = {
        scales : {
            y : 
            {
                ticks : {
                    beginAtZero : true
                }
            }
        }
    }
    return (
        <div className="container">
            <Line data={data} options={options}/>
        </div>
    )
}

export default LineChart