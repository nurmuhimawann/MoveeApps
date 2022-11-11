class FilterTools extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <form>
            <div class="card">
                <div class="card-header">
                    <h4>Sorting</h4>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="sort">Sort Results By</label>
                        <select class="form-select" id="sort" name="sort">
                            <option value="title ASC" selected>Title Ascending</option>
                            <option value="title DESC">Title Descending</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-header">
                    <h4>Filters</h4>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" name="title" id="title" placeholder="Title">
                    </div>
                    <div class="form-group mt-3">
                        <label for="rating">Rating</label>
                        <select class="form-select" id="rating" name="rating">
                            <option value="G" selected>G</option>
                            <option value="PG">PG</option>
                            <option value="PG-13">PG-13</option>
                            <option value="R">R</option>
                            <option value="NC-17">NC-17</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary mt-3" id="search"><i
                        class="fa-solid fa-magnifying-glass"></i> Search</button>
            </div>
        </form>
        `;
    }
}

customElements.define('filter-tools', FilterTools);