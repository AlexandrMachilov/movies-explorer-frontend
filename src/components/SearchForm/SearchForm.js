import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';

function SearchForm({
  isCheckboxChecked,
  onCheckboxChange,
  onSearchSubmit,
  handleCheckboxOnLoadFromLocalstorage,
}) {
  const location = useLocation();
  const [error, setError] = useState('');
  const [searchMessage, setSearchMessage] = useState(
    location.pathname === '/movies' ? localStorage.getItem('searchMessage') || '' : ''
  );

  const handleChange = (event) => {
    setError('');
    setSearchMessage(event.target.value);
  };

  const handleCheckboxChange = () => {
    onCheckboxChange();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchMessage === '') {
      setError('Нужно ввести ключевое слово');
    } else {
      onSearchSubmit(searchMessage);
      setError('');
    }
    location.pathname === '/movies' &&
      localStorage.setItem('searchMessage', searchMessage);
  };

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__input-container'>
          <input
            type='text'
            className='search__input'
            placeholder='Фильм'
            required
            minLength='2'
            value={searchMessage || ''}
            onChange={handleChange}
          ></input>
          <button type='submit' className='search__button'></button>
        </div>
        <span className='form__error form__error_type_search'>{error}</span>
        <div className='search__checkbox-container'>
          <label className='filter-checkbox'>
            <input
              type='checkbox'
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
              className='filter-checkbox__input'
            ></input>
            <span className='filter-checkbox__slider round'></span>
          </label>
          <p className='checkbox__title'>Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
