import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { useEffect, useState } from 'react';

function App() {
  const routesWithHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const routesWithFooter = ['/', '/movies', '/saved-movies'];
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const resizeHandler = () => {
    setCurrentWidth(window.innerWidth);
  };

  const handleBurgerMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
  }, [currentWidth]);

  return (
    <div className='App'>
      {routesWithHeader.includes(location.pathname) ? (
        <Header
          location={location}
          currentWidth={currentWidth}
          isMobileMenuOpen={isMobileMenuOpen}
          onBurgerMenuClick={handleBurgerMenuClick}
          onCloseMobileMenu={closeMobileMenu}
        />
      ) : null}
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/movies' element={<Movies location={location} />}></Route>
        <Route
          path='/saved-movies'
          element={<SavedMovies location={location} />}
        ></Route>
        <Route
          path='/profile'
          element={<Profile name='Землянин' email='earthman@mail.ru' />}
        ></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      {routesWithFooter.includes(location.pathname) ? <Footer /> : null}
    </div>
  );
}

export default App;
