import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies({
  savedMovies,
  onDeleteMovie,
  savedMoviesIds,
  isDataLoading,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortFilteredMovies, setShortFilteredMovies] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const filterMovies = (arr, str) => {
    const filteredMovies = arr.filter((item) => {
      const nameRuToLowerCase = item.nameRU.toLowerCase();
      const searchMessageToLowerCase = str.toLowerCase();
      return nameRuToLowerCase.includes(searchMessageToLowerCase);
    });
    return filteredMovies;
  };

  useEffect(() => {
    setFilteredMovies([...savedMovies]);
    const resultShort = savedMovies.filter((item) => item.duration <= 40);
    setShortFilteredMovies(resultShort);
  }, [savedMovies]);

  const handleDeleteMovie = (movie) => {
    onDeleteMovie(movie);
  };

  const handleSearch = (message) => {
    const result = filterMovies(savedMovies, message);
    setFilteredMovies(result);
    const resultShort = result.filter((item) => item.duration <= 40);
    setShortFilteredMovies(resultShort);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <section className='movies saved-movies'>
      <div className='saved-movies__container'>
        <SearchForm
          isCheckboxChecked={isCheckboxChecked}
          onCheckboxChange={handleCheckboxChange}
          onSearchSubmit={handleSearch}
        />
        {isDataLoading ? (
          <Preloader />
        ) : (
          <>
            {isCheckboxChecked ? (
              <>
                {shortFilteredMovies.length === 0 && (
                  <span className='movies__nothing-found'>
                    Ничего не найдено
                  </span>
                )}
              </>
            ) : (
              <>
                {filteredMovies.length === 0 && (
                  <span className='movies__nothing-found'>
                    Ничего не найдено
                  </span>
                )}
              </>
            )}
            <MoviesCardList>
              {isCheckboxChecked ? (
                <>
                  {shortFilteredMovies.map((item) => (
                    <MoviesCard
                      card={item}
                      {...item}
                      key={item._id}
                      handleDeleteMovie={handleDeleteMovie}
                      savedMoviesIds={savedMoviesIds}
                    />
                  ))}
                </>
              ) : (
                <>
                  {filteredMovies.map((item) => (
                    <MoviesCard
                      card={item}
                      {...item}
                      key={item._id}
                      handleDeleteMovie={handleDeleteMovie}
                      savedMoviesIds={savedMoviesIds}
                    />
                  ))}
                </>
              )}
            </MoviesCardList>
          </>
        )}
      </div>
    </section>
  );
}

export default SavedMovies;
