import SignForm from '../SignForm/SignForm';
import './Login.css';

function Login(){
    return(
        <SignForm titleText='Рады видеть!' buttonText='Войти' spanText='Ещё не зарегистрированы?' linkText='Регистрация' linkTo='/signup'>
            <label htmlFor='login-email' className='form__label'>E-mail</label>
            <input type='email' id='login-email' className='form__input form__input_type_email' required></input>
            <label htmlFor='login-password' className='form__label'>Пароль</label>
            <input type='password' id='login-password' className='form__input form__input_type_password' required minLength='4' maxLength='30'></input>
        </SignForm>
    )
}

export default Login;