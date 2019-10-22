import React, {useEffect, useState} from 'react';

const DropdownFilter = ({label, current, options = [], onChange}) => {
    const [toggleClick, setToggleClick] = useState(false);
    const [value, setValue] = useState(current);
    const toggleFilter = (e) => {
        e.stopPropagation();
        setToggleClick(!toggleClick);
        document.body.addEventListener('click', () => {
            setToggleClick(false);
        })
    }
    const onFilterChange = (e) => {
        e.stopPropagation();
        setValue(e.target.textContent);
        onChange(e.target.textContent);
        setToggleClick(false);
    }
    useEffect(() => {
        setValue(current);
    }, [current]);

    return (
        <div onClick={toggleFilter}  className={`drop-down ${toggleClick ? 'open' : '' }`}>
            <div className="label">{label}</div>
            <div className="current">{value}</div>
            <ul className="dropdown-list">
                {options.map((option, i) => <li key={i} onClick={onFilterChange}>{option}</li>)}
            </ul>
        </div>
    )
};

export default DropdownFilter;