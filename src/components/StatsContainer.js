import React from 'react'
import StatsItem from './StatsItem'
import {orderTotal, uniqueCustomers} from './helper'
import 'bootstrap/dist/css/bootstrap.min.css'

const StatsContainer = (props) => {
    const { customers } = props
    const ordersCount = customers.length 

    return(
        <div className="row mb-3  mt-3">
            <StatsItem count={ordersCount} text='Orders'/>
            <StatsItem count={orderTotal(customers)} text='Amount'/>
            <StatsItem count={uniqueCustomers(customers).length} text='Customers'/>
        </div>
    )
}

export default StatsContainer