import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Search = (props) => {
    const { search, handleChange } = props

    return (
        <input type='text' value={search} className="form-control" onChange={handleChange} placeholder='search by name or mobile'/>
    )
}

export default Search