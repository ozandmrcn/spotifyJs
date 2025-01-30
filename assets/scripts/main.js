import { API } from "./api.js";
import { UI } from "./ui.js";

// import all classes and functions from api and ui module
const api = new API();

const ui = new UI();

// Initialize API and UI instances

document.addEventListener("DOMContentLoaded", async () => {
  ui.renderLoader();

  api
    .getPopular()
    // Fetch popular songs and render them on page load

    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.error(err);
    });

  e.preventDefault();

  const query = e.target[0].value.trim().toLowerCase();

  if (!query) {
    return alert("Please perform a valid search operation.");
  }

  ui.renderLoader();

  ui.updateTitle("Results for: " + query);

  api
    .searchMusic(query)
    .then((data) => {
      ui.renderCards(data);
    })
    .catch((err) => {
      alert(err);
    });
});

ui.list.addEventListener("click", (e) => {
  if (e.target.className == "play") {
    const card = e.target.closest("[data-title]");

    const data = card.dataset;

    ui.renderPlayer(data);
  }
});
