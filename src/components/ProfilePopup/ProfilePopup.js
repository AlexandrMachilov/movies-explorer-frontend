import './ProfilePopup.css';
import popupImage from '../../images/succes__image.svg';

function ProfilePopup({ isRequestOk, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          type='button'
          className='popup__close-button'
          aria-label='Закрыть попап'
          onClick={onClose}
        />
        <img className='popup__icon' src={popupImage} alt='Изображение попап' />
        <h1 className='popup__description'>Вы успешно изменили профиль</h1>
      </div>
    </div>
  );
}

export default ProfilePopup;
