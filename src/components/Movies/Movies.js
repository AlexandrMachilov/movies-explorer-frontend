import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({
  movies,
  onSearchSubmit,
  numberOfCardsToRender,
  numberOfCardsToAdd,
  onSaveMovie,
  savedMoviesIds,
  onDislikeMovie,
  isDataLoading,
}) {
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem('filteredMovies')) || []
  );
  const [shortFilteredMovies, setShortFilteredMovies] = useState(
    JSON.parse(localStorage.getItem('shortFilteredMovies')) || []
  );
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(
    JSON.parse(localStorage.getItem('checkboxStatus')) || false
  );
  const [cardsToRender, setCardsToRender] = useState(numberOfCardsToRender);
  const [isSearchHandeled, setIsSearchHandled] = useState(false);

  const filterMovies = (arr, str) => {
    const filteredMovies = arr.filter((item) => {
      const nameRuToLowerCase = item.nameRU.toLowerCase();
      const searchMessageToLowerCase = str.toLowerCase();
      return nameRuToLowerCase.includes(searchMessageToLowerCase);
    });
    return filteredMovies;
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setIsSearchHandled(true);
  };

  useEffect(() => {
    if (localStorage.getItem('filteredMovies')) {
      const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
      setShortFilteredMovies(
        filteredMovies.filter((item) => item.duration <= 40)
      );
    }
  }, []);

  const handleCheckboxOnLoadFromLocalstorage = (message) => {
    filterMovies(movies, message);
  };

  const handleSearch = (message) => {
    setCardsToRender(numberOfCardsToRender);
    onSearchSubmit((movies) => {
      const result = filterMovies(movies, message);
      setFilteredMovies(result);
      const resultShort = result.filter((item) => item.duration <= 40);
      setShortFilteredMovies(resultShort);
      if (isCheckboxChecked) {
        localStorage.setItem(
          'shortFilteredMovies',
          JSON.stringify(resultShort)
        );
        localStorage.removeItem('filteredMovies');
      } else {
        localStorage.setItem('filteredMovies', JSON.stringify(result));
        localStorage.removeItem('shortFilteredMovies');
      }
      localStorage.setItem('checkboxStatus', JSON.stringify(isCheckboxChecked));
    });

    setIsSearchHandled(true);
  };

  const handleButtonMoreClick = () => {
    setCardsToRender(cardsToRender + numberOfCardsToAdd);
  };

  const handleMovieCardLike = (card) => {
    onSaveMovie(card);
  };

  return (
    <section className='movies'>
      <div className='movies__container'>
        <SearchForm
          isCheckboxChecked={isCheckboxChecked}
          onCheckboxChange={handleCheckboxChange}
          onSearchSubmit={handleSearch}
          handleCheckboxOnLoadFromLocalstorage={
            handleCheckboxOnLoadFromLocalstorage
          }
        />
        {isDataLoading ? (
          <Preloader />
        ) : (
          <>
            {isCheckboxChecked ? (
              <>
                {isSearchHandeled && shortFilteredMovies.length === 0 && (
                  <span className='movies__nothing-found'>
                    Ничего не найдено
                  </span>
                )}
              </>
            ) : (
              <>
                {isSearchHandeled && filteredMovies.length === 0 && (
                  <span className='movies__nothing-found'>
                    Ничего не найдено
                  </span>
                )}
              </>
            )}
            <MoviesCardList>
              {isCheckboxChecked ? (
                <>
                  {shortFilteredMovies.slice(0, cardsToRender).map((item) => (
                    <MoviesCard
                      card={item}
                      {...item}
                      key={item.id}
                      handleMovieCardLike={handleMovieCardLike}
                      savedMoviesIds={savedMoviesIds}
                      onDislikeMovie={onDislikeMovie}
                    />
                  ))}
                </>
              ) : (
                <>
                  {filteredMovies.slice(0, cardsToRender).map((item) => (
                    <MoviesCard
                      card={item}
                      {...item}
                      key={item.id}
                      handleMovieCardLike={handleMovieCardLike}
                      savedMoviesIds={savedMoviesIds}
                      onDislikeMovie={onDislikeMovie}
                    />
                  ))}
                </>
              )}
            </MoviesCardList>

            {isCheckboxChecked ? (
              <>
                {shortFilteredMovies.length >
                  shortFilteredMovies.slice(0, numberOfCardsToRender).length &&
                shortFilteredMovies.length >= cardsToRender ? (
                  <div className='more-button__container'>
                    <button
                      className='more-button'
                      onClick={handleButtonMoreClick}
                    >
                      Ещё
                    </button>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                {filteredMovies.length >
                  filteredMovies.slice(0, numberOfCardsToRender).length &&
                filteredMovies.length >= cardsToRender ? (
                  <div className='more-button__container'>
                    <button
                      className='more-button'
                      onClick={handleButtonMoreClick}
                    >
                      Ещё
                    </button>
                  </div>
                ) : null}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Movies;
