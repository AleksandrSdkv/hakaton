import './RoadMap-main.css';
import Footer from '../../das/Footer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function RoadMapMain({ isOpen }) {
    const [stateWeekOne, setStateWeekOne] = useState(0);
    const [stateWeekTwo, setStateWeekTwo] = useState(0);
    const [stateComplite, setStateComplite] = useState(0);
    const [stateCompliteTwo, setStateCompliteTwo] = useState(0);
    useEffect(() => {
        setStateComplite(stateWeekOne)
        if (stateWeekOne === 100) {
            console.log(stateWeekOne)
            isOpen()
        }
    }, [stateWeekOne])
    useEffect(() => {
        setStateCompliteTwo(stateWeekTwo)
    }, [stateWeekTwo])
    const onProgress = (e) => {
        if (e.currentTarget !== e.eventTarget) {
            e.target.className = 'RoadMap__task-complite_yes'
            e.target.disabled = true;
        }
        setStateWeekOne((stat) => (stat + 10))
    }
    const onProgressTwo = (e) => {
        if (e.currentTarget !== e.eventTarget) {
            e.target.className = 'RoadMap__task-complite_yes'
            e.target.disabled = true;
        }
        setStateWeekTwo((stat) => (stat + 10))
    }


    return (
        <>
            <main className='RoadMap-main'>

                <h1 className='RoadMapm-main__titile'>Знакомство</h1>


                <div className='RoadMapm-main__progrss-group'>
                    <nav className='RoadMapm-main__progrss-weeks'>
                        <div className='RoadMapm-main__progrss-week' >1 неделя</div>
                        <div className='RoadMapm-main__progrss-week'>10 заданий</div>
                        <div className='RoadMapm-main__progrss-week'>1 тест</div>

                    </nav>
                    <div className='RoadMap__progress'>
                        <div className='RoadMap__progress_active' style={{ width: stateWeekOne + '%' }}></div>
                        <div className='RoadMap__progress-text'>{`Пройдено на ${stateComplite}%`}</div>
                    </div>
                    <p></p>
                </div>

                <ul className='RoadMap__tasks'>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Прочитай про миссию и ценности Росмолодежи</p>
                        <button className='RoadMap__task-complite_no' onClick={e => onProgress(e)}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Внеси себя в список участников команды</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Разверни проекты по инструкции</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Настрой GIT</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Попроси наставника добавить тебя в приглашение в календаре во все встречи команды</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Пройди тренинг “Твой старт в Росмолодежи”</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Ознакомься со списком вопросов по проекту и начни его изучение</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Проведи встречу 1+1 с HR</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Попроси наставника организовать эскскурсию по офису</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Попроси наставника организовать эскскурсию по офису</p>
                        <button className='RoadMap__task-complite_no' onClick={onProgress}></button>
                    </li>
                </ul>
                <Link to="/test" className='RoadMap__test' >Пройти тест</Link>
            </main>
            {stateWeekOne === 100 &&
                <main className='RoadMap-main'>

                    <h1 className='RoadMapm-main__titile'>Погружение</h1>
                    <div className='RoadMapm-main__progrss-group'>
                        <nav className='RoadMapm-main__progrss-weeks'>
                            <div className='RoadMapm-main__progrss-week' >2 неделя</div>
                            <div className='RoadMapm-main__progrss-week'>10 заданий</div>
                            <div className='RoadMapm-main__progrss-week'>1 тест</div>

                        </nav>
                        <div className='RoadMap__progress'>
                            <div className='RoadMap__progress_active' style={{ width: stateWeekTwo + '%' }}></div>
                            <div className='RoadMap__progress-text'>{`Пройдено на ${stateCompliteTwo}%`}</div>
                        </div>
                        <p></p>
                    </div>

                    <ul className='RoadMap__tasks'>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Прочитай про миссию и ценности Росмолодежи</p>
                            <button className='RoadMap__task-complite_no' onClick={e => onProgressTwo(e)}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Внеси себя в список участников команды</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Разверни проекты по инструкции</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Настрой GIT</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Попроси наставника добавить тебя в приглашение в календаре во все встречи команды</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Пройди тренинг “Твой старт в Росмолодежи”</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Ознакомься со списком вопросов по проекту и начни его изучение</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Проведи встречу 1+1 с HR</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Попроси наставника организовать эскскурсию по офису</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                        <li className='RoadMap__task'>
                            <p className='RoadMap__task_text'>Попроси наставника организовать эскскурсию по офису</p>
                            <button className='RoadMap__task-complite_no' onClick={onProgressTwo}></button>
                        </li>
                    </ul>
                    <Link to="/test" className='RoadMap__test' >Пройти тест</Link>
                </main>
            }


            <Footer />

        </>
    )
}
export default RoadMapMain;