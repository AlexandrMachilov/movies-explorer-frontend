import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({location}) {
  return (
    <section className='movies saved-movies'>
      <div className='saved-movies__container'>
        <SearchForm />
        <MoviesCardList location={location}>
          <MoviesCard location={location} />
        </MoviesCardList>
      </div>
    </section>
  );
}

export default SavedMovies;
