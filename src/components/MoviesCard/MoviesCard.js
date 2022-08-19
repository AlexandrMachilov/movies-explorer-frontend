import './MoviesCard.css';
import image from '../../images/movie-image.jpg';

function MoviesCard({ location }) {
  return (
    <article className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__name'>В погоне за Бенкси</h2>
        <p className='movies-card__duration'>27 минут</p>
      </div>
      <img
        className='movies-card__image'
        src={image}
        alt='Картинка фильма'
      ></img>
      {location.pathname === '/movies' ? (
        <button className='movies-card__button'>Сохранить</button>
      ) : (
        <button className='movies-card__button movies-card__delete-button'></button>
      )}
    </article>
  );
}

export default MoviesCard;
