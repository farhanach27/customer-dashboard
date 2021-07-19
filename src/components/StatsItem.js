import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const StatsItem = (props) => {
    const { count, text } = props
    return (
        <div className="col-md-4">
            <div className="card bg-info " style={{ width: "18rem"}}>
                <div className="card-header"><h1>{ count }</h1></div>
                    <div className="card-body">
                        <div className="card-title">
                            <h3>{ text }</h3>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default StatsItem