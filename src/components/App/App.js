import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { useEffect, useState, useMemo } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {
  const routesWithHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const routesWithFooter = ['/', '/movies', '/saved-movies'];
  const location = useLocation();
  const navigate = useNavigate();
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(0);
  const [numberOfCardsToAdd, setNumberOfCardsToAdd] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = useState([]);
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [isRequestOk, setIsRequestOk] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      mainApi
        .tokenCheck()
        .then(() => {
          setIsLoggedIn(true);
          setIsUserChecked(true);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('token');
        });
    } else {
      setIsUserChecked(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    Promise.all([
      mainApi.getUserData(),
      moviesApi.getMovies(),
      mainApi.getSavedMovies(),
    ])
      .then(([user, allMovies, movies]) => {
        setCurrentUser(user);
        setMovies(allMovies);
        setSavedMovies(movies.filter((item) => item.owner === user._id));
        setSavedMoviesIds(
          movies
            .filter((item) => item.owner === user._id)
            .map((item) => item.movieId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);

  // Поиск фильмов
  const getMovies = (filterCallback) => {
    setIsDataLoading(true);
    filterCallback(movies);
    setIsDataLoading(false);
  }
  const handleMoviesSearchSubmit = (filterCallback) => {
    getMovies(filterCallback);  
  };

  useMemo(() => {
    let res;
    let add;
    switch (true) {
      case currentWidth >= 1280:
        res = 12;
        add = 3;
        break;
      case currentWidth >= 768:
        res = 8;
        add = 2;
        break;
      case currentWidth >= 320:
        res = 5;
        add = 2;
        break;
      default:
        res = 6;
        add = 3;
        break;
    }
    setNumberOfCardsToRender(res);
    setNumberOfCardsToAdd(add);
  }, [currentWidth]);

  // сохранение карточек
  const handleSaveMovies = (movie) => {
    return mainApi
      .addMovieToSaved(movie)
      .then((newMovie) => {
        console.log(newMovie);
        setSavedMovies([newMovie, ...savedMovies]);
        setSavedMoviesIds([newMovie.movieId, ...savedMoviesIds]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMoviesFromSaved = (movie) => {
    return mainApi
      .deleteFromSaved(movie)
      .then((res) => {
        console.log(res);
        setSavedMovies((state) => state.filter((el) => el._id !== res._id));
        setSavedMoviesIds((state) => state.filter((el) => el !== res.movieId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDislikeMovie = (id) => {
    const movieToDelete = savedMovies.find((el) => el.movieId === id);
    handleDeleteMoviesFromSaved(movieToDelete);
  };

  const resizeHandler = () => {
    setTimeout(() => {
      setCurrentWidth(window.innerWidth);
    }, 10000);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
  }, [currentWidth]);

  const handleRegisterSubmit = ({ name, password, email }) => {
    mainApi
      .register({ name, password, email })
      .then(() => {
        handleLoginSubmit({ password: password, email: email });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginSubmit = ({ password, email }) => {
    mainApi
      .login({ password, email })
      .then((res) => {
        localStorage.setItem('token', res.jwt);
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleExit = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.clear();
    setCurrentUser({});
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(false);
    setIsRequestOk(false);
  };

  const handleUpdateUserInfo = ({ name, email }) => {
    mainApi
      .editUserData({ name, email })
      .then((res) => {
        setIsRequestOk(!isRequestOk);
        setIsPopupOpen(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        {isUserChecked ? (
          <>
            {routesWithHeader.includes(location.pathname) ? (
              <Header loggedIn={isLoggedIn} />
            ) : null}
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route
                path='/movies'
                element={
                  <ProtectedRoute loggedIn={isLoggedIn}>
                    <Movies
                      movies={movies}
                      onSearchSubmit={handleMoviesSearchSubmit}
                      numberOfCardsToRender={numberOfCardsToRender}
                      numberOfCardsToAdd={numberOfCardsToAdd}
                      onSaveMovie={handleSaveMovies}
                      onDeleteMovie={handleDeleteMoviesFromSaved}
                      savedMoviesIds={savedMoviesIds}
                      onDislikeMovie={handleDislikeMovie}
                      isDataLoading={isDataLoading}
                    />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path='/saved-movies'
                element={
                  <ProtectedRoute loggedIn={isLoggedIn}>
                    <SavedMovies
                      savedMovies={savedMovies}
                      onDeleteMovie={handleDeleteMoviesFromSaved}
                      savedMoviesIds={savedMoviesIds}
                      isDataLoading={isDataLoading}
                    />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path='/profile'
                element={
                  <ProtectedRoute loggedIn={isLoggedIn}>
                    <Profile
                      loggedIn={isLoggedIn}
                      onExit={handleExit}
                      onUpdateUserInfo={handleUpdateUserInfo}
                      isRequestOk={isRequestOk}
                      isPopupOpen={isPopupOpen}
                      onClosePopup={handlePopupOpen}
                    />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path='/signup'
                element={<Register onRegisterSubmit={handleRegisterSubmit} />}
              ></Route>
              <Route
                path='/signin'
                element={<Login onLoginSubmit={handleLoginSubmit} />}
              ></Route>
              <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
            {routesWithFooter.includes(location.pathname) ? <Footer /> : null}
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
