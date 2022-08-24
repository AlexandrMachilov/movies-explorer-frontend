import './Profile.css';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';

function Profile({ loggedIn, onExit, onUpdateUserInfo }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [isInfoChanged, setIsInfoChanged] = useState(false);

  useEffect(() => {
    currentUser.name !== values.name || currentUser.email !== values.email
      ? setIsInfoChanged(true)
      : setIsInfoChanged(false);
  }, [currentUser.name, currentUser.email, values.email, values.name]);

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email }, {}, false);
  }, [resetForm, currentUser]);

  const [readOnly, setReadOnly] = useState(true);

  const handleUpdateButtonClick = (event) => {
    event.preventDefault();
    setReadOnly(false);
  };

  const handleUpdateUserInfoSubmit = (event) => {
    event.preventDefault();
    onUpdateUserInfo(values);
    resetForm({ name: currentUser.name, email: currentUser.email }, {}, false);
    setReadOnly(true);
  };

  const exit = () => {
    loggedIn && onExit();
  };

  return (
    <section className='pfofile'>
      <form className='profile__container' onSubmit={handleUpdateUserInfoSubmit}>
        <h2 className='profile__welcome'>Привет, {currentUser.name}!</h2>
        <div className='profile__info'>
          <div className='profile__info-container'>
            <label htmlFor='name'>Имя</label>
            <input
              id='name'
              name='name'
              type='text'
              className={`profile__input profile__input_type_name ${
                !readOnly && 'profile__input_active'
              }`}
              value={values.name || ''}
              onChange={handleChange}
              readOnly={readOnly}
              required
              minLength='2'
              maxLength='30'
            ></input>
            <span className='form__error'>{errors.name}</span>
          </div>
          <div className='profile__info-container'>
            <label htmlFor='email'>E-mail</label>
            <input
              id='email'
              name='email'
              className={`profile__input profile__input_type_email ${
                !readOnly && 'profile__input_active'
              }`}
              value={values.email || ''}
              onChange={handleChange}
              readOnly={readOnly}
              required
            ></input>
            <span className='form__error'>{errors.email}</span>
          </div>
        </div>
        <div className='profile__buttons'>
          {isValid && isInfoChanged ? (
            <button type='submit' className='profile__button profile__button_type_submit'>
              Сохранить
            </button>
          ) : (
            <>
              <button
                type='button'
                className='profile__button profile__button_type_update'
                onClick={handleUpdateButtonClick}
              >
                Редактировать
              </button>
              <button
                type='button'
                className='profile__button profile__button_type_exit'
                onClick={exit}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </form>
    </section>
  );
}

export default Profile;
