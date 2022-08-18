import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ location }) {
  return (
    <>
      {location.pathname === '/' ? (
        <div className='header__auth'>
          <Link to='/signup' className='header__button-register'>
            Регистрация
          </Link>
          <Link to='signin'>
            <button className='header__button-signin'>Войти</button>
          </Link>
        </div>
      ) : (
        <>
          <div className='header-navigation__container'>
            <div className='header__navigation'>
              <NavLink to='/movies' className='header__link'>
                Фильмы
              </NavLink>
              <NavLink to='/saved-movies' className='header__link'>
                Сохранённые фильмы
              </NavLink>
            </div>
            <Link to='/profile' className='header__account-button'>
              Аккаунт
              <div></div>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Navigation;
