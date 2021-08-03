import React from 'react';

const SearchBar =(props) => {
    return(
        <div className="sear">
        <i class="sea"></i>
        <input
            type="search"
            className="search"
            placeholder="Search songs / albums / playlists...."
            onChange={props.handleChange}
        />

        </div>
    )
}

export default SearchBar