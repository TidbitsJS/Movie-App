import React from 'react'
import SearchMovies from 'components/SearchMovies'
import 'App.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
         <h1 className="title">React Movie Search</h1>
         <SearchMovies />
      </div>
    );
  }
}

export default App;
