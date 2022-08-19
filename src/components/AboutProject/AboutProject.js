import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <div className='about-project__container'>
        <h2 className='about-project__title'>О проекте</h2>
        <div className='about-project__info'>
          <div className='about-project__content'>
            <h2 className='about-project__subtitle'>
              Дипломный проект включал 5 этапов
            </h2>
            <p className='about-project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='about-project__content'>
            <h2 className='about-project__subtitle'>
              На выполнение диплома ушло 5 недель
            </h2>
            <p className='about-project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about-project__progress-bar'>
          <div className='about-project__backend-bar'>
            <span className='about-project__backend-bar-text'>1 неделя</span>
          </div>
          <div className='about-project__frontend-bar'>
            <span className='about-project__frontend-bar-text'>4 недели</span>
          </div>
          <span className='about-project__underbar-text'>Back-end</span>
          <span className='about-project__underbar-text'>Front-end</span>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default AboutProject;
