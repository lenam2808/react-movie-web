import "./MovieCard.css";
import React from 'react';

const MovieCard = ({ movie }) => {
    const { name, img_link, genre, imdb_rating, duration } = movie;
    return (
        <div className="cardContainer">
            <div className="cardImgContainer">
                <img className="cardImg" src={img_link} alt="movie-card" />
            </div>
            <div className="cardDetails">
                <div>
                    <span className="title">{name}</span>
                </div>
              
                <div>
                    <span className="genre">Genre: {genre}</span>
                </div>
                <div className="ratings">
                    <span>Rating: {imdb_rating}</span>
                    <span>{duration} mins</span>
                </div>

            </div>
        </div>
    )
}

export default MovieCard;