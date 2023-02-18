import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Searchform from '../Searchform/Searchform';
import './guidebase.css'
import { useState } from 'react';

function GuideBase() {
    const [isEditSearchOpen, setIsEditSearchOpen] = useState('');

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
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='Guidebase__item'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
                <div className='Guidebase__quest'></div>
            </main>
            <Footer />
        </>
    )
}
export default GuideBase;