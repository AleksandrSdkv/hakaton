import './RoadMap-main.css';
import Footer from '../../footer/Footer';
function RoadMapMain() {

    return (
        <>
            <main className='RoadMap-main'>
                <h1 className='RoadMapm-main__titile'>Знакомство</h1>
                <div className='RoadMapm-main__progrss-group'>
                    <nav className='RoadMapm-main__progrss-weeks'>
                        <div className='RoadMapm-main__progrss-week'>1 неделя</div>
                        <div className='RoadMapm-main__progrss-week'>10 заданий</div>
                        <div className='RoadMapm-main__progrss-week'>1 тест</div>

                    </nav>
                    <div className='RoadMap__progress'></div>
                    <p></p>
                </div>

                <ul className='RoadMap__tasks'>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Прочитай про миссию и ценности Росмолодежи</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Внеси себя в список участников команды</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Разверни проекты по инструкции</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Настрой GIT</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Попроси наставника добавить тебя в приглашение в календаре во все встречи команды</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Пройди тренинг “Твой старт в Росмолодежи”</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Ознакомься со списком вопросов по проекту и начни его изучение</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Проведи встречу 1+1 с HR`</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                    <li className='RoadMap__task'>
                        <p className='RoadMap__task_text'>Попроси наставника организовать эскскурсию по офису</p>
                        <div className='RoadMap__task-complite'></div>
                    </li>
                </ul>
                <p className='RoadMap__test'>Пройти тест еще раз</p>


            </main>
            <Footer />

        </>
    )
}
export default RoadMapMain;