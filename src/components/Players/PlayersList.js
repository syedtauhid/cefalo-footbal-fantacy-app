import React, { useEffect, useState } from 'react';
import PlayerRow from './PlayerRow'

const PlayersList = ({playersData, search}) => {
    const [players, setPlayers] = useState([]);
    const [filters, setFilters] = useState({});
    const fetchPlayersData = () => {
        if(search) {
            setPlayers(playersData.filter((player) => player.name.display.toLowerCase().includes(search.toLowerCase())));
        } else {
            setPlayers(playersData);
        }

    };

    useEffect(() => {
        fetchPlayersData();
    }, [search]);

    const onChangeFilter = (f) => {
        setFilters(f);
        fetchPlayersData();
    };

    return (
        <>
        <div className="wrapper">
            {/* <PlayersFilter onChangeFilter={onChangeFilter} /> */}
            <div className="table">
                <table className="table-borderless">
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
        </>
    )
};

export default PlayersList;
