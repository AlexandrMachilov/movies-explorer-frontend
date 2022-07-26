import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  card,
  handleMovieCardLike,
  handleDeleteMovie,
  savedMoviesIds,
  onDislikeMovie,
}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);

  const handleLike = () => {
    setIsLiked(true);
    setLikedMovies([card.id, ...likedMovies]);
    handleMovieCardLike(card);
  };

  const handleDislike = () => {
    setIsLiked(false);
    onDislikeMovie(card.id);
  };

  const checkLikeStatus = () => {
    savedMoviesIds.includes(card.id) ? setIsLiked(true) : setIsLiked(false);
  };

  useEffect(checkLikeStatus, [card.id, savedMoviesIds]);

  const deleteMovie = () => {
    handleDeleteMovie(card);
  };

  const handleLikeCLick = () => {
    if (isLiked) {
      handleDislike()
    } else {
      handleLike()
    }
  }

  const serverUrl = 'https://api.nomoreparties.co';
  const movieDuration = (min) => {
    return `${Math.floor(min / 60)}ч ${min % 60}мин`;
  };

  return (
    <article className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__name'>{card.nameRU}</h2>
        <p className='movies-card__duration'>{movieDuration(card.duration)}</p>
      </div>
      <a href={card.trailerLink} target='blank'>
        <img
          className='movies-card__image'
          src={location.pathname === '/movies' ? serverUrl + card.image.url : card.image}
          alt={card.nameRU}
        ></img>
      </a>
      {location.pathname === '/movies' ? (
        <button
          className={`movies-card__button ${isLiked && 'movies-card__add-button_active'}`}
          onClick={handleLikeCLick}
        >
          Сохранить
        </button>
      ) : (
        <button
          className='movies-card__button movies-card__delete-button'
          onClick={deleteMovie}
        ></button>
      )}
    </article>
  );
}

export default MoviesCard;
