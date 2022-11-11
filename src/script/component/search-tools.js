class SearchTools extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="row mb-4">
            <div class="col-lg-3">
                <h3 class="text-black">Filters</h3>
            </div>
            <div class="col-lg-6">
                <form>
                    <div class="mb-3">
                            <!-- <i class="bi bi-search"></i> -->
                            <input type="text" class="form-control" id="search-movies"
                                placeholder="Explore what movies you want to find. Search Now">
                    </div>
                </form>
            </div>
            <div class="col-lg-3">
                <a href="#" class="btn btn-primary float-end"><i class="fa-solid fa-plus-circle"></i> Create</a>
            </div>
        </div>
        `;
    }
}

customElements.define('search-tools', SearchTools);