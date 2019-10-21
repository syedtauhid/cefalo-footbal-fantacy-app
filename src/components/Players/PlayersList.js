import React from 'react';
import PlayersFilter from './PlayersFilter'
import PlayerRow from './PlayerRow'
import Loader from '../Loader'

const PlayersList = () => {
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
                        <PlayerRow data={{player: 'Player 1', image: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/Photo-Missing.png', position: 'Forward', flag: 'TR', nationality: 'Turkey'}}/>
                        <PlayerRow data={{player: 'Rolando Aarons', image: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p155513.png', position: 'Midfielder', flag: 'GB-ENG', nationality: 'England'}}/>
                    </tbody>
                </table>
            </div>
        </div>
        <Loader/>
        </>
    )
};

export default PlayersList;