import _ from 'lodash'

export const uniqueCustomers = (customers) => {
    const result = _.uniqBy(customers, 'Phone')
    // console.log(result)
    return(result)
}

export const orderTotal= (customers) =>{
    let sum = 0
    customers.forEach( (user) => {
        sum +=user.Amount
    })
    return sum
}