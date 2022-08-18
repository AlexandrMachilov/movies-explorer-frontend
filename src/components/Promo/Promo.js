import './Promo.css';
import promo__image from '../../images/intro__image.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__content'>
          <div className='promo__info'>
            <h1 className='promo__title'>
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className='promo__subtitle'>
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
            <button className='promo__button'>Узнать больше</button>
          </div>
          <img
            src={promo__image}
            alt='Главная картинка'
            className='promo__image'
          />
        </div>
      </div>
    </section>
  );
}

export default Promo;
