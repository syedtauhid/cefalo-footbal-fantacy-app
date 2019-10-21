import React from 'react';

const DropdownFilter = ({label, current}) => {
    return (
        <div className="drop-down">
            <div className="label">{label}</div>
            <div className="current">{current}</div>
            <ul className="dropdown-list">
                <li>2019/20</li>
                <li>2018/19</li>
                <li>2017/18</li>
            </ul>
        </div>
    )
};

export default DropdownFilter;