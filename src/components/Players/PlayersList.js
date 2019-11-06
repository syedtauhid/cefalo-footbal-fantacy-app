import React, { useEffect, useState } from 'react';
import PlayersFilter from './PlayersFilter'
import PlayerRow from './PlayerRow'
import Loader from '../Loader'

const PlayersList = ({playersData, search}) => {
    const [players, setPlayers] = useState([]);
    const [filters, setFilters] = useState({});
    const fetchPlayersData = () => {
        // https://footballapi.pulselive.com/football/players?pageSize=30&compSeasons={Season_Id}&altIds=true&page={Page_Num}&type=player&id=-1&compSeasonId={Season_Id}
        // https://footballapi.pulselive.com/football/teams/{Club_Id}/compseasons/{Season_Id}/staff?pageSize=30&compSeasons={Season_Id}&altIds=true&page=0&type=player

        if(search) {
            setPlayers(playersData.filter((player) => player.name.display.toLowerCase().includes(search.toLowerCase()) > -1));
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
        <Loader/>
        </>
    )
};

export default PlayersList;
