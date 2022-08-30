import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './UseInfo.css'
const ChartsPage = () => {


  ChartJS.register(ArcElement, Tooltip);
  
   const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [1225, 225],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      };

      const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 180).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             var text = " today $225 ",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2;
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }]
   

        return (
           
            <div className="chartrevanue">
                <div className="revanuepie"><Doughnut data={data} plugins={plugins} options={{ responsive: true }} /></div>
                <div className="revenueAmount">
                    <div className='TotalSales'>
                        <span>total sales made</span> <br />
                        <h5>$1225</h5>
                    </div>
                    <div className="revanueDetails">
                        <div className="threeoptions"> 
                        <span>Target</span> <br />
                        <h5>$2251</h5></div>
                        <div className="threeoptions">
                        <span>Today</span> <br />
                        <h5>$107</h5>
                        </div>
                        <div className="threeoptions">
                        <span>All time</span> <br />
                        <h5>$3465</h5>
                        </div>
                    </div>
                </div>
            </div>
                
           
        );
    }


export default ChartsPage;