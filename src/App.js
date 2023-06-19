import "./App.css";
import Row from "./components/Row/Row";
import requests from "./components/requests";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Originals"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default App;
