import { useState } from 'react';
import NavMobile from '../NavMobile/NavMobile';
import './MenuBurger.css';

function MenuBurger() {
  const [isChecked, setIsChecked] = useState(false);

  const closeMobileMenu = () => {
    setIsChecked(false);
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className='burger-menu'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
          className='burger-menu__checkbox'
        ></input>
        <span className='burger-menu__burger'></span>
      </label>
      <NavMobile isChecked={isChecked} onCloseMobileMenu={closeMobileMenu} />
    </>
  );
}

export default MenuBurger;
