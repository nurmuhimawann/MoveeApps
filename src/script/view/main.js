// import '../component/movies.js';
import '../component/search-tools.js';
// // import axios from "axios"
// // import '../component/search-result';
// // import '../component/load-more';
// import $ from 'jquery';
// import DataSource from '../data/data-source.js';

// const main = () => {
//     const searchElement = document.querySelector("form");

//     const onButtonSearchClicked = () => {
//         searchMovie(searchElement.value);
//     };

//     const searchMovie = async (keyword) => {
//         // loaderElement.style.display = 'block';

//         try {
//             const result = await DataSource.searchMovie(keyword);
//             renderResult(result);
//         } catch (message) {
//             fallbackResult(message)
//         }
//     }

//     // Search Movie
//     searchElement.clickEvent = onButtonSearchClicked;


//     // Batas
//     const movieListElement = document.querySelector('movie-list');

//     const renderResult = (results) => {
//         movieListElement.movies = results;
//     };

//     const fallbackResult = (message) => {
//         movieListElement.renderError(message);

//         $('search-result').hide();
//         $('load-more').hide();
//     };

//     const moviesList = async () => {
//         try {
//             const result = await DataSource.moviesList();
//             renderResult(result);
//         } catch (message) {
//             fallbackResult(message);
//         }
//     };

//     moviesList();

// };

// export default main;





import "../component/movies.js";
// import "../component/banner-list.js";
// import "../component/header-navbar.js";

import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-tools");
    // const banner = document.querySelector("banner-list");
    const movieListElement = document.querySelector("movie-list");
    // const genreTags = document.getElementById("tags");

    // initialization render movie
    const getMovies = (keyword) => {
        DataSource.getMovie(keyword).then(renderResult).catch(fallbackResult);
    };

    // search movie
    const onButtonSearchClicked = () => {
        // selectedGenre = [];
        // setGenre();
        if (onButtonSearchClicked) {
            searchMovie(searchElement.value);
        } else {
            getMovies("discover/movie");
        }
    };

    const searchMovie = async (keyword) => {
        try {
            const results = await DataSource.searchMovies(keyword);
            renderResult(results);
        } catch (e) {
            fallbackResult(e);
        }
    };

    const renderResult = (results) => {
        movieListElement.movies = results;
    };
    const fallbackResult = (e) => {
        movieListElement.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }
      </style>

      <h2 class="placeholder>${e}</h2>
    `;
    };

    // initialization category movie
    const movieGenres = (id) => {
        DataSource.genreMovies(id).then(renderResult).catch(fallbackResult);
    };

    // initialization banner
    const setMovies = async (keyword) => {
        try {
            const result = await DataSource.bannerMovies(keyword);
            let finalResult = [];
            for (let i = 0; i < 3; i++) {
                finalResult.push(result[Math.floor(Math.random() * result.length - 1)]);
            }
            console.log(finalResult);
            banner.banners = finalResult;
        } catch (message) {
            banner.renderError(message);
        }
    };

    // render all movies
    getMovies("discover/movie");
    // set banner
    setMovies("trending");

    // search movie
    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;
