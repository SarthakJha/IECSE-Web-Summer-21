import React from 'react';

const SearchBar =(props) => {
    return(
        <div className="search-main">
        <i class="fa fa-search icon fa-2x"></i>
        <input
            type="search"
            className="search"
            placeholder="Seach a Song"
            onChange={props.handleChange}
        />

        </div>
    )
}

export default SearchBar