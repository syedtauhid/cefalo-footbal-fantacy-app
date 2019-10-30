import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SectionHeader from '../SectionHeader';
import PlayersList from './PlayersList';

const Players = () => {
    const [searchKey, setSearchKey] = useState('');
    const onSearchPlayers = (key) => {
        setSearchKey(encodeURIComponent(key));
    };
    return (
        <div className="page-content">
            <SectionHeader heading="Players" onSearchChange={onSearchPlayers} />
            <ErrorBoundary>
                <PlayersList search={searchKey}/>
            </ErrorBoundary>
        </div>
    );
};
export default Players;
