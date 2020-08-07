import React from 'react'

const MovieCard = ({movie}) => {
  let noMovie = false
  if(movie === undefined || movie.length === 0) {
    noMovie = true
    console.log("empty");
    movie = [
      {
        id: 25,
        title: 'No such Movie - @ Life',
        poster_path: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
        overview: 'Database has no record of such thing. Might be in Matrix.',
        release_date: "20-20-2020",
        vote_average: '10',
      }
    ]
  }
  return (
    <div className="card--list">
      {movie.filter(cinema => cinema.poster_path).map((cinema, index) => (
        <div key={cinema.id} className="card">

          <img className="card--image"
               src={noMovie ? `${cinema.poster_path}` : `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${cinema.poster_path}`}
               alt={(cinema.ttile) + 'Poster'}/>
          <div className="card--content">
            <h3 className="card--title">{cinema.title}</h3>
            <p><small><strong>RELEASE DATE:</strong> {cinema.release_date}</small></p>
            <p><small><strong>Rating:</strong> {cinema.vote_average} / 10</small></p>
            <p className="card--desc">{cinema.overview}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default MovieCard
