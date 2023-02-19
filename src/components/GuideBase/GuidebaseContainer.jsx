/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import './guidebase.css';

function GuidebaseContainer({ item }) {
    return (
        <>
            <li className='Guidebase__item'>
                <div className='Guidebase__header'>
                    <div className='Guidebase__logo'></div>
                    <h2 className='Guidebase__item-title'>{item.category.name}</h2>
                    <div className='Guidebase__item-icon'></div>
                </div>
                {/* <p className='Guidebase__item-text'>{item.text}</p> */}

                <span className='Guidebase__item-about'>{item.title}</span>
            </li>
        </>
    )
}

export default GuidebaseContainer; 