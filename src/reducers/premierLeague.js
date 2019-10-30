import { initializeState, pathRequestState, changeState, loadState } from 'redux-httprequest';
import {
    FETCH_CLUB_PLAYERS,
    FETCH_NEWS,
    FETCH_PLAYERS,
    FETCH_RESULTS
} from '../actions/index';

const initialState = {
  news: initializeState(),
  players: initializeState(),
  results: initializeState(),
};

export default function premierLeague(state = initialState, action) {

  switch (action.type) {
    case FETCH_CLUB_PLAYERS:
    case FETCH_PLAYERS:
      return pathRequestState('players', state, action, 'content');

    case FETCH_NEWS:
      console.log(action);
      return pathRequestState('news', state, action, 'content');

    case FETCH_RESULTS:
      return pathRequestState('results', state, action, 'content');
  }

  return state;
}
