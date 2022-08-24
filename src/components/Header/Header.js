import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import MenuBurger from '../MenuBurger/MenuBurger';

function Header({
  location,
  currentWidth,
  isMobileMenuOpen,
  onBurgerMenuClick,
  onCloseMobileMenu,
}) {
  return (
    <header className={`header ${location.pathname === '/' && 'header__main'}`}>
      <div className='header__container'>
        <div className='header__content'>
          {currentWidth >= 1280 ? (
            <>
              <Link to='/'>
                <img src={logo} alt='Логотип' className='header__logo' />
              </Link>
              <Navigation location={location} currentWidth={currentWidth} />
            </>
          ) : (
            <>
              <Link to='/'>
                <img className='logo' src={logo} alt='логотип'></img>
              </Link>
              <Navigation location={location} currentWidth={currentWidth} />
              <MenuBurger
                location={location}
                currentWidth={currentWidth}
                isMobileMenuOpen={isMobileMenuOpen}
                onBurgerMenuClick={onBurgerMenuClick}
                onCloseMobileMenu={onCloseMobileMenu}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
