import DataGenre from '../data/genre-movies.json';

class GenreMovies extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            #tags {
                width: 80%;
                display: flex;
                flex-wrap: wrap;
            }
            
            .tag {
                color: #0d6efd;
                font-weight: 400;
                padding: 5px 10px;
                margin: 5px;
                margin-right: 10px;
                border: 1px solid #0d6efd;
                border-radius: 5px;
                cursor: pointer;
            }
            
            .tag:hover {
                background-color: #0d6efd;
                color: #FFF !important;
            }
            
            .tag.highlight {
                background-color: #d63031;
                color: #FFF !important;
                font-weight: 600;
            }
        </style>
        `;
        let htmlContent = '';
        DataGenre.genres.map((genres, idx) => {
            htmlContent += `
                <div class="tag text-center" id="${idx}">${genres.name}</div>
            `;
        });

        this.innerHTML += htmlContent;
        this.querySelector("#tag").addEventListener(
            "click",
            this._clickEvent
        );
    }
}


customElements.define("movie-genre", GenreMovies);
