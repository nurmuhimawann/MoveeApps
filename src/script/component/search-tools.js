class SearchTools extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }
    

    render() {
        this.innerHTML = `
        <style>
            .search-form {
                display: flex;
                height: 2.6rem
            }

            .search-form input {
                padding-left: 3rem;
            }

            input[type="search"] {
                background-color: #f8f8f8;
                border: 0;
            }

            input[type="search"]::placeholder {
                font-size: 1rem;
                color: $gray-500;
            }

            .search-form .icon {
                position: absolute;
                z-index: 2;
                display: block;
                width: 3rem;
                height: 2.6rem;
                line-height: 2.6rem;
                text-align: center;
                pointer-events: none;
                color: $gray-500;
                -webkit-text-stroke: 1px;
            }
        </style>

        <div class="row mb-4">
            <div class="col-lg-3">
                <h3 class="text-black">Filters</h3>
            </div>
            <div class="col-lg">
                <div class="search-form form-group" id="form">
                    <i class="bi bi-search icon"></i>
                    <input placeholder="Explore what movies you want to find. Search Now." class="form-control me-2" id="searchElement" type="search"/>
                    <button class="btn btn-dark" id="searchButtonElement" type="button">Search</button>
                </div>
            </div>
        </div>`;

        this.querySelector("#searchButtonElement").addEventListener(
            "click",
            this._clickEvent
        );
    }
}

customElements.define('search-tools', SearchTools);