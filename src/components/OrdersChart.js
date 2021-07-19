import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Chart } from "react-google-charts"

const OrdersChart = (props) => {
    const { data } = props 
    
    

    const chartData = [
        ['No. of Orders', 'Customer Count']
    ]

    for (const key in data){
        chartData.push([key, data[key]])
    }

    return (
        <Chart
        width={'400px'}
        height={'250px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        const data = {chartData} 
        options={{
            title: 'Order Distribution',
        }}
        rootProps={{ 'data-testid': '1' }}
        />
    )
}

export default OrdersChart