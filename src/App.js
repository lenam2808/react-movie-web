import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard/MovieCard';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Loading from './components/Loadding';

function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([]);
  const [loadMore, setLoadMore] = useState(12); 
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      setMovies(data)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  
  const movieSlice = movies.slice(0, loadMore);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 8);
  }
  
  const keys = ["name", "genre"];
  
  useEffect(() => {
    getMovies();
  }, [])

  if (loading) {
    return <Loading />
  } 

  return (
    <div className="App">
      <NavBar setQuery={setQuery}/>
      <div className="label-name">
        <h1>Movies</h1>
      </div>
      <main className="main">
        {/* {
          movieSlice && movieSlice.length > 0 && movieSlice.filter(movie => keys.some((key) => movie[key].toLowerCase().includes(query))).map((movie) => <MovieCard key={movie.id} movie={movie} /> )
        } */}
        {
          query.length !== 0 ?
          (movies.filter(movie => keys.some((key) => movie[key].toLowerCase().includes(query))).map((movie) => <MovieCard key={movie.id} movie={movie} />)) 
          : 
          ( movieSlice.filter(movie => keys.some((key) => movie[key].toLowerCase().includes(query))).map((movie) => <MovieCard key={movie.id} movie={movie} /> ))
        }
      </main>
      <div className="Loadmore">
        <button className="btn-Loadmore" onClick={handleLoadMore}>Xem thêm</button>
      </div>
      <Footer />
    </div>
  )
}

export default App;
