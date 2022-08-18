import { Link, NavLink } from 'react-router-dom';
import './NavMobile.css';

function NavMobile(
    props
) {
  const closeNavPopup = () => {
    props.isChecked = false;
  };
  const linkActiveClass = ({ isActive }) => {
    return `header__link header__link_mobile ${
      isActive && 'header__link_mobile-active'
    }`;
  };

  return (
    <article
      className={`nav-mobile ${
        props.isChecked && 'nav-mobile_visible'
      }`}
    >
      <div className='nav-mobile__popup'>
        <div>
          <NavLink
            to='/'
            onClick={props.onCloseMobileMenu && closeNavPopup}
            className={linkActiveClass}
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            onClick={props.onCloseMobileMenu && closeNavPopup}
            className={linkActiveClass}
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            onClick={props.onCloseMobileMenu && closeNavPopup}
            className={linkActiveClass}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link
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
