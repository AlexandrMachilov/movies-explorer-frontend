import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import MenuBurger from '../MenuBurger/MenuBurger';

function Header({ loggedIn }) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' && 'header__main'}`}>
      <div className='header__container'>
        <div className='header__content'>
          <Link to='/'>
            <img className='logo' src={logo} alt='логотип'></img>
          </Link>
          <Navigation loggedIn={loggedIn} />
          {loggedIn && <MenuBurger />}
        </div>
      </div>
    </header>
  );
}

export default Header;
