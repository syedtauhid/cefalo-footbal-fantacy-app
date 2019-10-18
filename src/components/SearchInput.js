import React from 'react';

const SearchInput = ({onSearchChange}) => {
    return <input type="search" placeholder="Search..." onChange={event => onSearchChange(event.target.value)} />
}
export default SearchInput;