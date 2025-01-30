// This module is responsible for handling the user interface of the application.
export class UI {
  constructor() {
    this.form = document.querySelector("form");
    this.list = document.querySelector(".list");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  }

  // renderLoader renders a loader element in the .list element

  sliceText(text) {
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    } else {
      return text;
    }
  }

  // renderCards takes an array of songs and renders them as html cards in the .list element

  renderCards(songs) {
    this.list.innerHTML = "";
    songs.forEach((song) => {
      const card = document.createElement("div");

      card.className = "card";

      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.img = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      card.innerHTML = `
            <div class="card">
              <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt=""
                />

                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

              <div class="card-info">
                <h4>${this.sliceText(song.title)}</h4>
                <h4>${this.sliceText(song.subtitle)}</h4>
              </div>`;

      this.list.appendChild(card);
    });
  }
  // This function displays a loading animation while data is being fetched

  renderLoader() {
    this.list.innerHTML = ` 
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>`;
  }

  toggleAnimation() {
    const image = document.querySelector(".info img");

    image.classList.toggle("animate");
  }

  renderPlayer(song) {
    this.player.innerHTML = `<div class="info">
        <img
          src="${song.img}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>

      <audio
        src="${song.mp3}"
        controls
        autoplay
      ></audio>

      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;

    const audio = this.player.querySelector("audio");

    audio.addEventListener("play", this.toggleAnimation);

    audio.addEventListener("pause", this.toggleAnimation);
  }

  // This function updates the title text content in the UI

  updateTitle(text) {
    this.title.textContent = text;
  }
}
