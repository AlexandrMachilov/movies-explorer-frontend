import './MoviesCardList.css';

function MoviesCardList({ children, location }) {
  return (
    <>
      <section className='movies-card-list'>{children}</section>
      {/* {location.pathname === '/movies' &&
      <div className='more-button__container'>
        <button className='more-button'>Ещё</button>
      </div>} */}
    </>
  );
}

export default MoviesCardList;
