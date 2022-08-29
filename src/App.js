import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
// import Navbar from './Navbar';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Banner/>
        <Row title = "Originals"  isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
        <Row  title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
<Footer/>

    </div>
  );
}

export default App;
