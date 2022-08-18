import './Portfolio.css'

function Portfolio(){
    return(
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h3 className='portfolio__title'>Портфолио</h3>
                <ul className='portfolio__list'>
                    <li className='portfolio__list-element'><a className='portfolio__link' href='https://github.com/AlexandrMachilov/how-to-learn.git' target='blank'>Статичный сайт</a></li>
                    <li className='portfolio__list-element'><a className='portfolio__link' href='https://alexandrmachilov.github.io/russian-travel/' target='blank'>Адаптивный сайт</a></li>
                    <li className='portfolio__list-element'><a className='portfolio__link' href='https://mesto.ypraktikum.nomoredomains.work/' target='blank'>Одностраничное приложение</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;