class TitleBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="row mb-3">
            <h2 class="text-black">Moveee Apps</h2>
        </div>`;
    }
}

customElements.define('title-bar', TitleBar);