
import PopupWithForm from './PopupWithForm';
import '../Popup/popup/popup.css'
import '../Popup/form/form__article.css'
import React from 'react';
export default function EditArticlePopup(props) {
    const { popupOpen, popupClose } = props

    return (
        <PopupWithForm
            name='Article'
            title='Редактировать статью'
            textBtn='Сохранить'
            popupOpen={popupOpen}
            popupClose={popupClose}

        >
            <input value={''} id="name-input" className="form__input form__input_type_name" type="text" name="name" placeholder="Название статьи" required minLength="2" maxLength="40" />
            <input value={''} id="name-input" className="form__input form__input_type_name" type="text" name="name" placeholder="Тема" required minLength="2" maxLength="40" />
            <textarea value={''} id="about-input" className="form__input form__input_type_about" type="text" name="about" placeholder="Описание" required minLength="2" maxLength="1000" />

        </PopupWithForm>
    )
}
