import '../component/title-bar.js';
import '../component/hero-image.js';
import '../component/search-tools.js';
import "../component/movies.js";
import '../component/genre.js';


import DataSource from "../data/data-source.js";
import DataGenre from "../data/genre-movies.json";

const main = () => {
    const searchElement = document.querySelector("search-tools");
    const movieListElement = document.querySelector("movie-list");
    const genreTags = document.getElementById("tags");

    // initialization render movie
    const getMovies = (keyword) => {
        DataSource.getMovie(keyword).then(renderResult).catch(fallbackResult);
    };

    // search movie
    const onButtonSearchClicked = () => {
        selectedGenre = [];
        setGenre();
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

    // initialization genre movie
    const movieGenres = (id) => {
        DataSource.genreMovies(id).then(renderResult).catch(fallbackResult);
    };

    // render all movies
    getMovies("discover/movie");

    // search movie
    searchElement.clickEvent = onButtonSearchClicked;

    let selectedGenre = [];
    const setGenre = () => {
        const tags = document.querySelectorAll('tag');
        tags.forEach((genre) => {
            tags.addEventListener("click", () => {
                if (selectedGenre.length == 0) {
                    selectedGenre.push(genre.id);
                } else {
                    if (selectedGenre.includes(genre.id)) {
                        selectedGenre.forEach((id, idx) => {
                            if (id == genre.id) {
                                selectedGenre.splice(idx, 1);
                            }
                        });
                    } else {
                        selectedGenre.push(genre.id);
                    }
                }
                console.log(selectedGenre);
                movieGenres(selectedGenre.join(","));
                highlightSelection();
            });
        });
    };
    setGenre();

    const highlightSelection = () => {
        const tags = document.querySelectorAll(".tag");
        tags.forEach((tag) => {
            tag.classList.remove("highlight");
        });
        if (selectedGenre.length != 0) {
            selectedGenre.forEach((id) => {
                const highlightedTag = document.getElementById(id);
                highlightedTag.classList.add("highlight");
            });
        }
    };
};

export default main;
