// import './movies-item';

// class MovieList extends HTMLElement {
//     set movies(movies) {
//         this._movies = movies;
//         this.render();
//     }

//     render() {
//         this.innerHTML = '';
//         this.className = "row row-cols-1 row-cols-lg-3 row-cols-xl-3 gy-4";
//         this._movies.forEach((movie) => {
//             const movieItemElement = document.createElement('movie-item');
//             movieItemElement.movie = movie;
//             this.append(movieItemElement);
//         });
//     }

//     renderError(message) {
//         this.innerHTML = '';
//         this.innerHTML +=`
//     <h1 class="font-bold -mt-3 mb-4 mx-5">${message}</h1>
//     `;
//     }
// }
// customElements.define('movie-list', MovieList);

import "./movies-item.js";

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this.className = "row row-cols-auto row-cols-md-auto";
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }
}

customElements.define("movie-list", MovieList);
