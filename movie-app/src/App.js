import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: 'Inception',
          description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
          posterURL: 'https://via.placeholder.com/150',
          rating: 5
        },
        {
          title: 'Interstellar',
          description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
          posterURL: 'https://via.placeholder.com/150',
          rating: 4
        }
      ],
      filteredMovies: [],
      titleFilter: '',
      ratingFilter: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredMovies: this.state.movies });
  }

  handleFilter = (title, rating) => {
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(title.toLowerCase()) &&
             (rating === '' || movie.rating >= parseInt(rating));
    });
    this.setState({ filteredMovies, titleFilter: title, ratingFilter: rating });
  }

  handleAddMovie = () => {
    const newMovie = {
      title: prompt('Enter movie title:'),
      description: prompt('Enter movie description:'),
      posterURL: prompt('Enter movie poster URL:'),
      rating: parseInt(prompt('Enter movie rating:'))
    };
    this.setState(prevState => ({
      movies: [...prevState.movies, newMovie],
      filteredMovies: [...prevState.filteredMovies, newMovie]
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Movie App</h1>
        <Filter onFilter={this.handleFilter} />
        <button onClick={this.handleAddMovie}>Add Movie</button>
        <MovieList movies={this.state.filteredMovies} />
      </div>
    );
  }
}

export default App;
