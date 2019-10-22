import React from 'react';

const SearchInput = ({onSearchChange, type, placeholder, className, id}) => {
    return <input id={id ? id : `id${Date()}`} type={type ? type : 'search'} placeholder={placeholder ? placeholder : 'Search...'} className={className} onChange={event => onSearchChange(event.target.value)} />
}
export default SearchInput;