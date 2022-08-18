import './SignForm.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function SignForm({
  titleText,
  buttonText,
  spanText,
  linkText,
  linkTo,
  children,
}) {
  const location = useLocation();
  return (
    <section className='sign'>
      <Link to='/'>
        <img className='sign__logo' src={logo} alt='Логотип'></img>
      </Link>
      <form className='sign__form'>
        <h2 className='form__title'>{titleText}</h2>
        <div className='form__input-container'>{children}</div>
        <button
          className={`form__button ${
            location.pathname === '/signin' && 'form__button_type_login'
          }`}
        >
          {buttonText}
        </button>
      </form>
      <div className='form__signin'>
        {spanText}{' '}
        <Link className='form__link' to={linkTo}>
          {linkText}
        </Link>
      </div>
    </section>
  );
}

export default SignForm;
