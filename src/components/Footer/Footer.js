import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h4 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h4>
        <div className='footer__content'>
          <p className='footer__copyright'>&copy; 2022</p>
          <ul className='footer__links'>
            <li className='foooter__links-element'>
              <a
                className='footer__link'
                href='https://practicum.yandex.ru/'
                target='blank'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='foooter__links-element'>
              <a
                className='footer__link'
                href='https://github.com/AlexandrMachilov'
                target='blank'
              >
                GitHub
              </a>
            </li>
            <li className='foooter__links-element'>
              <a
                className='footer__link'
                href='https://facebook.com'
                target='blank'
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
