import React from 'react';
import SearchInput from './SearchInput';

const SectionHeader = (props) => {
    return (
        <header className="page-hero">
            <div className="wrapper col-12">
                <h1 className="page-title"><img src='/img/epl.png' alt='logo' style={{maxWidth:'100px'}}/> {props.heading}</h1>
                {
                    (props.showSearch || props.onSearchChange) &&
                    <div className="search-container">
                        <div className="search-input-container" role="search">
                            <label htmlFor="searchInput" className="visuallyHidden">Search for a Player</label>
                            <SearchInput onSearchChange={props.onSearchChange} id="searchInput" type="text" placeholder="Search..." className="search-text-container search-input" />
                            <div className="search-icon-container search-commit" role="button">
                                <div className="icn search-sm"><span className="visuallyHidden">Submit search</span></div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
};

export default SectionHeader;
