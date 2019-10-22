import React, { useEffect, useState } from 'react';
import PlayersFilter from './PlayersFilter'
import PlayerRow from './PlayerRow'
import Loader from '../Loader'

const PlayersList = ({search}) => {
    const [players, setPlayers] = useState([]);
    const fetchPlayersData = () => {
        const data = [
            {player: 'Player 1', image: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/Photo-Missing.png', position: 'Forward', flag: 'TR', nationality: 'Turkey'},
            {player: 'Rolando Aarons', image: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p155513.png', position: 'Midfielder', flag: 'GB-ENG', nationality: 'England'}
        ];

        if(search) {
            setPlayers(data.filter((item) => item.player.toLowerCase().indexOf(search.toLowerCase()) > -1));
        } else {
            setPlayers(data);
        }
    };
    
    useEffect(() => {
        fetchPlayersData();
    }, [search]);
    return (
        <>
        <div className="wrapper">
            <PlayersFilter/>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th className="hide-s">Position</th>
                            <th className="hide-s">Nationality</th>
                        </tr>
                    </thead>
                    <tbody>
                        { players.map((d, i) => <PlayerRow key={i} data={d} />) }
                    </tbody>
                </table>
            </div>
        </div>
        <Loader/>
        </>
    )
};

export default PlayersList;