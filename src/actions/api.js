import http from './http';

let api = {};

const respond = action => async dispatch => {
  try {
    const res = await dispatch(action);

    if (!res) {
      // No request response
      console.error('No API response.');
    }

    return res.response;

  } catch (e) {
    console.error(e);
  }
};

// Players
api.getPlayers = (type, query) => (dispatch) =>
  dispatch(respond(http.getThunk(type, `/players`, query)));

api.getClubPlayers = (type, query) => (dispatch) =>
    dispatch(respond(http.getThunk(type, `/teams/${query.clubId}/compseasons/${query.compSeasons}/staff`, query)));

// Seasons
api.getSeasons = (type, query = {pageSize: 100, page:0}) => (dispatch) =>
    dispatch(respond(http.getThunk(type, `/competitions/1/compseasons`, query)));

// Teams
api.getTeams = (type, seasonId = 274) => (dispatch) =>
    dispatch(respond(http.getThunk(type, `/compseasons/${seasonId}/teams`)));

//
api.getResults = (type, query={}) => (dispatch) =>
    dispatch(respond(http.getThunk(type, `/fixtures`, query)));

// News
api.getNews = (type, pageSize = 12) => (dispatch) => {
  fetch(`https://api.canary.platform.pulselive.com/production/stream/fb43114f-4af4-437e-966d-ca94851a29e0/posts/?pageSize=${pageSize}`)
      .then(res => res.json())
      .then(response => dispatch({type, response, statusCode:200})
  )
};


export default api;
