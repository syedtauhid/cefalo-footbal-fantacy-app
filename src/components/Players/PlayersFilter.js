import React from 'react';
import DropdownFilter from '../DropdownFilter'

const PlayersFilter = () => {
    return (
        <section className="page-filter">
            <DropdownFilter label="Filter by Season" current="2019/20" options="" />
            {/* <div className="drop-down">
                <div className="label">Filter by Season</div>
                <div className="current">2019/20</div>
                <ul className="dropdown-list">
                    <li>2019/20</li>
                    <li>2018/19</li>
                    <li>2017/18</li>
                </ul>
            </div> */}
            <DropdownFilter label="Filter by Club" current="All Clubs" options="" />
            {/* <div className="drop-down">
                <div className="label">Filter by Club</div>
                <div className="current">All Clubs</div>
                <ul className="dropdown-list">
                    <li>All Clubs</li>
                    <li>Arsenal</li>
                    <li>Aston Villa</li>
                </ul>
            </div> */}
            <div className="filter-button filter-button--reset" role="button">
                <i className="filter-button__icon icn reset-b"></i>
                <i className="filter-button__icon filter-button__icon--hover icn reset-p"></i>
                <span className="filter-button__text">Reset Filters</span>
            </div>
        </section>
    )
};

export default PlayersFilter;