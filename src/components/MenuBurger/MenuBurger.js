import { useState } from 'react';
import NavMobile from '../NavMobile/NavMobile';
import './MenuBurger.css';

function MenuBurger({
  location,
  currentWidth,
  isMobileMenuOpen,
  onBurgerMenuClick,
  onCloseMobileMenu,
}) {
  const [isChecked, setIsChecked] = useState(isMobileMenuOpen);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {location.pathname === '/' ? null : (
        <>
          <label className='burger-menu'>
            <input
              type='checkbox'
              onClick={onBurgerMenuClick}
              onChange={handleChange}
              className='burger-menu__checkbox'
            ></input>
            <span className='burger-menu__burger'></span>
          </label>
          <NavMobile
            isChecked={isChecked}
            currentWidth={currentWidth}
            isMobileMenuOpen={isMobileMenuOpen}
            onBurgerMenuClick={onBurgerMenuClick}
            onCloseMobileMenu={onCloseMobileMenu}
          />
        </>
      )}
    </>
  );
}

export default MenuBurger;
