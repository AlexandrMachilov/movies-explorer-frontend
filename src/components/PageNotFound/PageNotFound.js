import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h2 className='page-not-found__name'>404</h2>
      <p className='page-not-found__error'>Страница не найдена</p>
      <Link to='/'>Назад</Link>
    </div>
  );
};

export default PageNotFound;
