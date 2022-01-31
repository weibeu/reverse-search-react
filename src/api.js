const axios = require('axios').default;


const API_BASE_URL = "http://127.0.0.1:5000/api"


function request(route, method, params) {
    let url = API_BASE_URL + route;
    return axios.request({
        url: url, method: method, params: params
    });
}


function search(route, query) {
    return request(route, "GET", {query: query});
}


module.exports.searchMovieFromSubtitles = function searchMovieFromSubtitles(query) {
    return search("/search-subtitles", query);
}
