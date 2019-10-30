import React, {useState} from 'react';
import DropdownFilter from '../DropdownFilter'

const PlayersFilter = ({onChangeFilter}) => {
    const seasons = ['2019/20', '2018/19', '2017/18']; // https://footballapi.pulselive.com/football/competitions/1/compseasons?page=0&pageSize=100
    const clubs = ['All Clubs', 'Arsenal', 'Aston Villa']; // https://footballapi.pulselive.com/football/teams?page=0&pageSize=100&altIds=true&compSeasons={Season_Id}
    const [season, setSeason] = useState(seasons[0]);
    const [club, setClub] = useState(clubs[0]);

    const onReset = (e) => {
        setSeason(seasons[0]);
        setClub(clubs[0]);
        onChangeFilter({season, club});
    };
    const onSeasonChange = (value) => {
        setSeason(value);
        onChangeFilter({season: value, club});
    };
    const onClubChange = (value) => {
        setClub(value);
        onChangeFilter({season, club: value});
    };
    return (
        <section className="page-filter">
            <DropdownFilter label="Filter by Season" current={season} options={seasons} onChange={onSeasonChange} />
            <DropdownFilter label="Filter by Club" current={club} options={clubs} onChange={onClubChange} />

            <div className="filter-button filter-button--reset" role="button" onClick={onReset}>
                <i className="filter-button__icon icn reset-b"></i>
                <i className="filter-button__icon filter-button__icon--hover icn reset-p"></i>
                <span className="filter-button__text">Reset Filters</span>
            </div>
        </section>
    )
};

export default PlayersFilter;
