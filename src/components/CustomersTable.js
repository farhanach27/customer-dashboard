import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CustomersTable.css'

const CustomersTable = (props) => {
    const { customers , showDetails} = props

    return (
        <div className="table-wrapper-scroll-y my-custom-scrollbar tableFixed" >
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Phone </th>
                        <th> Show </th>
                    </tr>
                </thead>
                <tbody>
                    { customers.map ( (customer) => {
                        return (
                            <tr key={customer.Phone}>
                                <td> {customer.Name} </td>
                                <td> {customer.Phone} </td>
                                <td> <button onClick = {() => {
                                    showDetails(customer)
                                }} className="btn btn-primary"> show </button> </td>
                                
                            </tr>
                        )
                    })}
                </tbody>
             </table>
        </div>
        
    )
}

export default CustomersTable