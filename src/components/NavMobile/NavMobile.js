import { Link, NavLink } from 'react-router-dom';
import './NavMobile.css';

function NavMobile({ isChecked, onCloseMobileMenu }) {
  const closePopup = () => {
    onCloseMobileMenu();
  };
  const linkActiveClass = ({ isActive }) => {
    return `header__link header__link_mobile ${isActive && 'header__link_mobile-active'}`;
  };

  return (
    <article className={`nav-mobile ${isChecked && 'nav-mobile_visible'}`}>
      <div className='nav-mobile__popup'>
        <div>
          <NavLink to='/' onClick={closePopup} className={linkActiveClass}>
            Главная
          </NavLink>
          <NavLink to='/movies' onClick={closePopup} className={linkActiveClass}>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' onClick={closePopup} className={linkActiveClass}>
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link
          onClick={closePopup}
          to='/profile'
          className='header__account-button header__account-button_mobile'
        >
          Аккаунт<div></div>
        </Link>
      </div>
    </article>
  );
}

export default NavMobile;
