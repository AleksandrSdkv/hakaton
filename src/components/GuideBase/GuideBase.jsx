import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Searchform from '../Searchform/Searchform';
import './guidebase.css'
import { useState, useEffect } from 'react';
import GuidebaseContainer from './GuidebaseContainer';
import { getArticle } from '../../utils/apiDB'

function GuideBase() {
    const [isEditSearchOpen, setIsEditSearchOpen] = useState('');
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

                </ul>
                <div className='Guidebase__quest'></div>
            </main>
            <Footer />
        </>
    )
}
export default GuideBase;