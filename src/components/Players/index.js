import React from 'react';
import PlayersHeader from './PlayersHeader'
import PlayersList from './PlayersList'

const Players = () => {
    return (
        <div className="page-content">
            <PlayersHeader/>
            <PlayersList/>
        </div>
    );
};
export default Players;