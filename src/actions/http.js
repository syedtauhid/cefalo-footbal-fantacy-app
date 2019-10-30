import ReduxHttpRequest from 'redux-httprequest';

const serverUrl = 'https://footballapi.pulselive.com/football';

export const newsApi = ReduxHttpRequest('https://api.canary.platform.pulselive.com/production/stream/fb43114f-4af4-437e-966d-ca94851a29e0/');
export default ReduxHttpRequest(serverUrl);
