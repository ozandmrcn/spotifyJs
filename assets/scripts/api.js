// This class is responsible for interacting with the API to fetch popular songs

export class API {
  // This method fetches popular songs from the API
  async getPopular() {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "552cbfe757msh690b4e4786df2c0p1c8e12jsn9038c122b37f",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };

    const urls = [
      `https://shazam.p.rapidapi.com/search?term=Duman`,
      `https://shazam.p.rapidapi.com/search?term=mor%20ve%20otesi`,
    ];

    const responses = await Promise.all(urls.map((url) => fetch(url, options)));

    const data = await Promise.all(responses.map((res) => res.json()));

    const formattedData = data.flatMap((item) =>
      item.tracks.hits.map((i) => i.track)
    );

    return formattedData;
  }

  async searchMusic(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query
      .trim()
      .toLowerCase()}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "552cbfe757msh690b4e4786df2c0p1c8e12jsn9038c122b37f",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };

    // This method makes a search request to the API with the given query string
    const res = await fetch(url, options);

    // Process the JSON response to extract relevant data

    const data = await res.json();

    const formattedData = data.tracks.hits.map((item) => item.track);

    return formattedData;
  }
}
