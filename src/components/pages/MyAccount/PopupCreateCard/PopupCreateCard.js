import React, {useState} from 'react';
import './PopupCreateCard.css'

const PopupCreateCard = ({
                             isActivePopupCreateCard,
                             handleActivePopupCreateCard,
                             handleAddCard
                         }) => {

    const handleStopUpdating = (event) => {
        event.stopPropagation()
    }

    const [link, setLink] = useState('')
    const [textLocation, setTextLocation] = useState('')
    const [textDescription, setTextDescription] = useState('')

    const handleChangeLinkValue = (event) => {
        setLink(event.target.value)
    }
    const handleChangeLocationValue = (event) => {
        setTextLocation(event.target.value)
    }
    const handleChangeDescriptionValue = (event) => {
        setTextDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleAddCard({
            link,
            textLocation,
            textDescription,
        })
    }

    return (
        <div className={
            `popup popup_type_create-card ${isActivePopupCreateCard ? 'popup_visible' : ''}`
        }
             onClick={handleActivePopupCreateCard}
        >
            <div className="popup__content popup__content_type_create-card"
                 onClick={handleStopUpdating}
            >

                <h1 className="popup__title">Добавить новое фото</h1>
                <form className="popup__form_type_create-card"
                      onSubmit={handleSubmit}
                >
                    <input
                        value={link}
                        type="url"
                        name="url-image"
                        className="popup__input"
                        placeholder="Введите ссылку на карточку"
                        onChange={handleChangeLinkValue}
                    />
                    <input
                        value={textLocation}
                        type="text"
                        name="image-location"
                        className="popup__input"
                        placeholder="Введите место"
                        onChange={handleChangeLocationValue}
                    />
                    <input
                        value={textDescription}
                        type="text"
                        name="image-description"
                        className="popup__input"
                        placeholder="Описание фото"
                        onChange={handleChangeDescriptionValue}
                    />

                    <button className="popup__button">Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default PopupCreateCard;