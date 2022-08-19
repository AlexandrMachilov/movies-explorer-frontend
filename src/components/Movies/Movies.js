import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ location }) {
  return (
    <section className='movies'>
      <div className='movies__container'>
        <SearchForm />
        <MoviesCardList location={location}>
          <MoviesCard location={location} />
          <MoviesCard location={location} />
          <MoviesCard location={location} />
        </MoviesCardList>
      </div>
    </section>
  );
}

export default Movies;
