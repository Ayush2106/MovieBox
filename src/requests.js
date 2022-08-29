const API_KEY = "9ee2e8f87a44ee015ab0810f17c75c32";

const requests = {
fetchTrending : `/trending/allweek?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US `,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requests;