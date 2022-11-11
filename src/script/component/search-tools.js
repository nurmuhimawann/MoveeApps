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
        <div class="row mb-4">
            <div class="col-lg-3">
                <h3 class="text-black">Filters</h3>
            </div>
            <div class="col-lg">
                
                <div class="search-form form-group" id="form">
            <input placeholder="Search the movies..." class="form-control me-2" id="searchElement" type="search"/>
            <button class="btn btn-dark" id="searchButtonElement" type="button">Search</button>
          </div>
            </div>
        </div>
        `;

        this.querySelector("#searchButtonElement").addEventListener(
            "click",
            this._clickEvent
        );
    }
}

customElements.define('search-tools', SearchTools);

// <form>
                //         <input type="text" class="form-control mr-sm-2" id="search-movies"
                //             placeholder="Explore what movies you want to find. Search Now">
                //         <button class="btn btn-dark" id="searchButtonElement" type="button">Search</button>
                // </form>