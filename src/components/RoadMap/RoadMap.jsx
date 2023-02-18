/* eslint-disable jsx-a11y/heading-has-content */
import './RoadMap.css';
import maps from '../../images/img'
import Header from '../Header/_map/Header_map';
import Searchform from '../Searchform/Searchform';
import { useState } from 'react';
import RoadMapMain from './RoadMap-main/RoadMap-main';
function RoadMap() {
    const [isEditSearchOpen, setIsEditSearchOpen] = useState('');
    function handleEditSearchClick() {
        if (isEditSearchOpen === 'search_opened') {
            setIsEditSearchOpen('');
        } else {
            setIsEditSearchOpen('search_opened');
        }
    }
    console.log(maps)
    return (
        <>

            <main className='RoadMap'>

                <div className='RoadMap_intro'>
                    <Header
                        onSearch={handleEditSearchClick} />
                    <Searchform
                        isOpen={isEditSearchOpen}
                    />
                    <h1 className='RoadMap_intro-titile'>Пройди увлекательный квест</h1>
                    <p className='RoadMap_intro-paragraph'>Каждый день новые интересные задания для тебя</p>
                    <div className='RoadMap_intro-group'></div>
                </div>
                <div className='RoadMap__map'>

                    <img className='RoadMap__map_pngOne' src={maps[0].image} alt="" />
                    <img className='RoadMap__map_pngTwo' src={maps[1].image} alt="" />
                    <img className='RoadMap__map_pngThree' src={maps[2].image} alt="" />
                    <div className='RoadMap__map_elipse' /><div />
                    <img className='RoadMap__map_pngFour' src={maps[3].image} alt="" />
                    <img className='RoadMap__map_pngFive' src={maps[4].image} alt="" />
                    <img className='RoadMap__map_pngSix' src={maps[5].image} alt="" />
                    <img className='RoadMap__map_lineLong' src={maps[6].image} alt="" />
                    <img className='RoadMap__map_line1' src={maps[7].image} alt="" />
                    <img className='RoadMap__map_line2' src={maps[8].image} alt="" />
                    <img className='RoadMap__map_line3' src={maps[9].image} alt="" />
                    <img className='RoadMap__map_check' src={maps[10].image} alt="" />
                    <img className='RoadMap__map_check2' src={maps[11].image} alt="" />
                    <img className='RoadMap__map_check3' src={maps[12].image} alt="" />
                    <img className='RoadMap__map_woman' src={maps[13].image} alt="" />
                    <div className='RoadMap__map_message' /><div />
                </div>
                <RoadMapMain />
            </main>
        </>
    )
}
export default RoadMap;