import SignForm from '../SignForm/SignForm';
import './Login.css';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';

function Login({ onLoginSubmit }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const onSubmit = (event) => {
    event.preventDefault();
    onLoginSubmit(values);
  };

  return (
    <SignForm
      onSubmit={onSubmit}
      isValid={isValid}
      titleText='Рады видеть!'
      buttonText='Войти'
      spanText='Ещё не зарегистрированы?'
      linkText='Регистрация'
      linkTo='/signup'
    >
      <label htmlFor='login-email' className='form__label'>
        E-mail
      </label>
      <input
        type='email'
        id='login-email'
        name='email'
        className='form__input form__input_type_email'
        required
        value={values.email}
        onChange={handleChange}
      ></input>
      <span className='form__error'>{errors.email}</span>
      <label htmlFor='login-password' className='form__label'>
        Пароль
      </label>
      <input
        type='password'
        id='login-password'
        name='password'
        className='form__input form__input_type_password'
        required
        minLength='4'
        maxLength='30'
        value={values.password}
        onChange={handleChange}
      ></input>
      <span className='form__error'>{errors.password}</span>
    </SignForm>
  );
}

export default Login;
