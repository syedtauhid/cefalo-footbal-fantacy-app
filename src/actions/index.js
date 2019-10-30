import _ from 'lodash/fp';
import api from './api';

let actions = {};

export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_RESULTS = 'FETCH_RESULTS';
export const FETCH_CLUB_PLAYERS = 'FETCH_CLUB_PLAYERS';


actions.fetchPlayers =
    _.partial(api.getPlayers, [FETCH_PLAYERS]);

actions.fetchClubPlayers =
    _.partial(api.getClubPlayers, [FETCH_CLUB_PLAYERS]);

actions.fetchNews =
    _.partial(api.getNews, [FETCH_NEWS]);

actions.fetchResults =
    _.partial(api.getResults, [FETCH_RESULTS]);


export default actions;
