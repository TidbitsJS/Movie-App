import React, { useState } from "react"
import MovieCard from 'components/MovieCard'

const SearchMovies = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
     e.preventDefault()

     const url = `https://api.themoviedb.org/3/search/movie?api_key=2100e2c736ecb18eeaeb006ede82abde&language=en-US&query=${query}&page=1&include_adult=false`

     try {
         const res = await fetch(url)
         const data = await res.json()
         setMovies(data.results)
         console.log(data.results);
     } catch(err) {
         console.error(err)
     }

  }

  return (
      <div className="searchBox" onSubmit={searchMovies}>
        <form className="form">
          <label className="label" htmlFor="query">Movie Name</label>
          <input
            type="text"
            name="query"
            placeholder="i.e. The Hobbit : Unexpected Journey"
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="button" type="submit">Search</button>
        </form>
        <MovieCard movie={movies}/>
      </div>
  )
}

export default SearchMovies
