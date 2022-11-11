const API_URL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=25607a3072cf47fce78da43cfa96480b';
// https://api.themoviedb.org/3/movie/now_playing?api_key=25607a3072cf47fce78da43cfa96480b
class DataSource {
    static moviesList() {
        return fetch(`${API_URL}movie/now_playing?${KEY}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                }
                return Promise.reject(new Error(`${path} is not found`));
            });
    }

    static searchMovie(keyword) {
        const searchListElement = document.querySelector('search-list');
        return fetch(`${API_URL}search/movie?${KEY}&query=${keyword}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.errors) {
                    return Promise.reject(
                        new Error((searchListElement.style.display = 'none'))
                    );
                }
                if (responseJson.results.length >= 1) {
                    return Promise.resolve(responseJson.results);
                }
                return Promise.reject(new Error(`${keyword} is not found`));
            });
    }
}

export default DataSource;