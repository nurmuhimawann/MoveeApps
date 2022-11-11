class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card card-content">
            <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top" alt="${this._movie.original_title}">
            <div class="card-body">
                <h5 class="card-title">${this._movie.original_title}</h5>
                <div class="card-text">
                    <div class="row">
                        <span>Release Date: ${this._movie.release_date}</span>
                        <span>Rating: ${this._movie.vote_average}</span>
                    </div>
                </div>
            </div>
        </div>`;
        this.className = "col-lg-3 mb-3";
    }
}
customElements.define('movie-item', MovieItem);