import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__input-container'>
          <input
            type='text'
            className='search__input'
            placeholder='Фильм'
            required
            minLength='2'
          ></input>
          <button type='submit' className='search__button'></button>
        </div>
        <div className='search__checkbox-container'>
        <label className='filter-checkbox'>
            <input type='checkbox' className='filter-checkbox__input'></input>
            <span className='filter-checkbox__slider'></span> {/* round */}
        </label>
        <p className='checkbox__title'>Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
