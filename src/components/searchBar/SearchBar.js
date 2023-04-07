import React from "react";

const SearchBar = ({ term, onChange, onSubmit }) => {
    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={onChange}/> 
                </div>
            </form>
        </div>
    )
}

export default SearchBar;