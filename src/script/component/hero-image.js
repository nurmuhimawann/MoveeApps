import Hero from "../../assets/hero-image.jpg";

class HeroImage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div>
            <img src="${Hero}" class="img-fluid rounded-4 mx-auto d-block mb-4" alt="hero">
        </div>`;
    }
}

customElements.define('hero-image', HeroImage);