import React from 'react';

const PlayersHeader = () => {
    return (
        <header className="page-hero">
            <div className="wrapper col-12">
                <h1 className="page-title">Players</h1>
                <div className="search-container">
                    <div className="search-input-container" role="search">
                        <label for="searchInput" className="visuallyHidden">Search for a Player</label>
                        <input id="searchInput" type="text" value="" placeholder="Search for a Player" className="search-text-container search-input"/>
                        <div className="search-icon-container search-commit" role="button">
                            <div className="icn search-sm"><span className="visuallyHidden">Submit search</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default PlayersHeader;