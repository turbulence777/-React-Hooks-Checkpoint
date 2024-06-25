import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Card.Text>
          <strong>Rating: </strong> {movie.rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
