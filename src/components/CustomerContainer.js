import React, {useState} from 'react'
import { orderTotal, uniqueCustomers } from './helper'
import Search from './Search';
import CustomersTable from './CustomersTable'
import 'bootstrap/dist/css/bootstrap.min.css'

const CustomerContainer = (props) => {
    const { customers } = props
    const [ search, setSearch ] = useState('')
    const onlyUniqueCustomers = uniqueCustomers(customers)

    
    const showDetails = (customer) => {
        const customerOrders = customers.filter( cust => cust.Phone === customer.Phone)
        const customerOrderTotal = orderTotal(customerOrders)
        alert(`
            Name - ${customer.Name}
            Order Count - ${customerOrders.length}
            Order Total - ${customerOrderTotal}
        `)
    }

    const handleChange = (e) => {
        const term = e.target.value
        setSearch(term)
    }

    const filteredUniqueCustomers = () => {
        const result = onlyUniqueCustomers.filter( (cust) => {
            return cust.Name.toLowerCase().includes(search) || cust.Phone.toString().includes(search)
        })
        return result
    }

    return (
        <div className="mb-3">
            <div className="row">
                <div className="col-md-8">
                    <h2>Listing Customer's - {onlyUniqueCustomers.length} </h2>
                </div>
                <div className="col-md-4">
                    <Search search={search} handleChange={handleChange} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <CustomersTable customers={filteredUniqueCustomers()} showDetails={showDetails} />
                </div>
            </div>
        </div>
    )
}

export default CustomerContainer