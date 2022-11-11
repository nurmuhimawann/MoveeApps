class TitleBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="row mb-3">
            <h1 class="text-black">Moveee Apps</h1>
        </div>`;
    }
}

customElements.define('title-bar', TitleBar);