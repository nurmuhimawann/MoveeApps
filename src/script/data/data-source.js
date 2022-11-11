// Base URL
const API_URL = 'https://api.themoviedb.org/3/';
// API Key
const KEY = 'api_key=25607a3072cf47fce78da43cfa96480b';

class DataSource extends HTMLElement {
    static getMovie(keyword) {
        return fetch(`${API_URL}/${keyword}?sort_by=popularity.desc&${KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.resolve(`${keyword} is not found`);
                }
            });
    }

    static searchMovies(keyword) {
        return fetch(`${API_URL}/search/movie?${KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    static genreMovies(id) {
        return fetch(`${API_URL}/discover/movie?${KEY}&with_genres=${id}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource;
