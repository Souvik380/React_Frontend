import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Filters.css"


function Filters() {
    return (
        <div className="filters">
            <SearchIcon className="search-icon"/>
            <p>Enter your filters here</p>
            <div className="rect-container">
                <div className="rect">
                    <p>SAVE FILTERS</p>
                </div>
            </div>
        </div>
    )
}

export default Filters
