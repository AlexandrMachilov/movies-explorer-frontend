import './AboutMe.css';
import aboutme__photo from '../../images/about-me__photo.jpg';
function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__content'>
          <div className='about-me__info'>
            <h2 className='about-me__name'>Александр</h2>
            <p className='about-me__class'>Фронтенд-разработчик, 23 года</p>
            <p className='about-me__description'>
              Я живу в Санкт-Петербурге с 2016 года. Переехал для того, чтобы получить
              высшее образование. Закончил СПбПУ им. Петра Великого по специальности
              "Автоматизация технологических процессов и производств". Начал заниматься
              программированием с 2021 года и хочу связать свое будущее с ним. Люблю кофе,
              худи и котов, считай, готовый программист!
            </p>
            <ul className='about-me__links'>
              <li>
                <a className='about-me__link' href='https://facebook.com' target='blank'>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className='about-me__link'
                  href='https://github.com/AlexandrMachilov'
                  target='blank'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <img className='about-me__photo' src={aboutme__photo} alt='Фото студента' />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
