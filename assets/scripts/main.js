import { API } from "./api.js";
import { UI } from "./ui.js";

// Import all classes and functions from api and ui module
const api = new API();
const ui = new UI();

// Initialize API and UI instances
document.addEventListener("DOMContentLoaded", async () => {
  // Render the loader
  ui.renderLoader();
  // Make an API request and render the interface with the data from the API
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log(err);
    });
});

ui.form.addEventListener("submit", (e) => {
  // Prevent page refresh
  e.preventDefault();

  // Access the value inside the input when the form is submitted
  const query = e.target[0].value.trim().toLowerCase();

  // Trim whitespace from the beginning and end of the searched word. If there is no query value, give a warning
  if (!query) {
    return alert("Please perform a valid search operation");
  }

  // Render the loader
  ui.renderLoader();

  // Update the title
  ui.updateTitle("Search results for: " + query);

  // Make an API request with the searched word and render the cards on the screen with the returned data
  api
    .searchMusic(query)
    .then((data) => ui.renderCards(data))
    .catch((err) => alert(err));
});

ui.list.addEventListener("click", (e) => {
  if (e.target.className == "play") {
    const card = e.target.closest("[data-title]");

    const data = card.dataset;

    ui.renderPlayer(data);
  }
});
