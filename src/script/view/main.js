import '../component/movies.js';
// import '../component/search-bar';
// import '../component/search-result';
// import '../component/load-more';
import $ from 'jquery';
import DataSource from '../data/data-source.js';

const main = () => {
    const movieListElement = document.querySelector('movie-list');

    const renderResult = (results) => {
        movieListElement.movies = results;
    };

    const fallbackResult = (message) => {
        movieListElement.renderError(message);

        $('search-result').hide();
        $('load-more').hide();
    };

    const moviesList = async () => {
        try {
            const result = await DataSource.moviesList();
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    moviesList();
};

export default main;
