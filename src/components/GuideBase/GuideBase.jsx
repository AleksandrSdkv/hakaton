import Header from '../Header/Header';
import Footer from '../Footer/Footer.jsx';
import Searchform from '../Searchform/Searchform';
import './guidebase.css';
import { useState, useEffect } from 'react';
import GuidebaseContainer from './GuidebaseContainer';
import { getArticle } from '../../utils/apiDB'
import EditArticlePopup from '../Popup/EditArticlePopup';
function GuideBase() {
    const [isEditSearchOpen, setIsEditSearchOpen] = useState('');
    const [isPopupOpen, setPopupOpen] = useState('');
    const [article, setArticle] = useState([])

    useEffect(() => {
        getArticle()
            .then(result => setArticle(result))

    }, [])

    function handleEditSearchClick() {
        if (isEditSearchOpen === 'search_opened') {
            setIsEditSearchOpen('');
        } else {
            setIsEditSearchOpen('search_opened');
        }
    }
    function popupOpen() {
        setPopupOpen('popup_opened')
    }
    function popupClose() {
        setPopupOpen('')
    }
    return (
        <>
            <Header
                onSearch={handleEditSearchClick} />
            <Searchform
                isOpen={isEditSearchOpen}
            />
            <main className='Guidebase'>
                <ul className='Guidebase__container'>
                    {article.map((item) =>
                        < GuidebaseContainer key={item.id} item={item} />
                    )}
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>Рассылка</h2>
                            <div className='Guidebase__item-icon' onClick={popupOpen}></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>
                    </li>
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>О компании</h2>
                            <div className='Guidebase__item-icon'></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>
                    </li>
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>Наши проекты</h2>
                            <div className='Guidebase__item-icon'></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>

                    </li>
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>Наши проекты</h2>
                            <div className='Guidebase__item-icon'></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>

                    </li>
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>Наши проекты</h2>
                            <div className='Guidebase__item-icon'></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>

                    </li>
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>Наши проекты</h2>
                            <div className='Guidebase__item-icon'></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>

                    </li>
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>Наши проекты</h2>
                            <div className='Guidebase__item-icon'></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>

                    </li>
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>Наши проекты</h2>
                            <div className='Guidebase__item-icon'></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>

                    </li>
                    <li className='Guidebase__item'>
                        <div className='Guidebase__header'>
                            <div className='Guidebase__logo'></div>
                            <h2 className='Guidebase__item-title'>Наши проекты</h2>
                            <div className='Guidebase__item-icon'></div>
                        </div>
                        {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                        <span className='Guidebase__item-about'>Новости — это сообщения о каких-то событиях. В блогах можно размещать новости своей ниши с комментариями экспертов компании, чтобы проинформировать заказчиков и показать, что вы в теме</span>

                    </li>
                </ul>
                <div className='Guidebase__quest'></div>
            </main>
            <EditArticlePopup
                popupOpen={isPopupOpen}
                popupClose={popupClose}
            />
            <Footer />
        </>
    )
}
export default GuideBase;