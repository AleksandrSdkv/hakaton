import './footer.css';

function Footer() {

    return (
        <>
            <footer className='Footer'>

                <div className='Footer__container'>

                    <nav className='Footer__nav'>
                        <div className='Footer__logo'></div>
                        <ul className='Footer__nav-bar'>
                            <li className='Footer__nav-item'>Главная</li>
                            <li className='Footer__nav-item'>Справочник</li>
                            <li className='Footer__nav-item'>Мой кабинет</li>
                            <li className='Footer__nav-item'>Команда</li>
                        </ul>
                    </nav>
                    <p className='Footer__copyright'>© 2008-2023 Федеральное агентство по делам молодежи (Росмолодёжь)</p>
                </div>
                <ul className='Footer__info'>
                    <li className='Footer__adress'>
                        <p className='Footer__adress-title Footer__paragraph'>Адрес</p>
                        <p className='Footer__paragraph Footer__adress-paragraph'>109028, Москва, Большой Трехсвятительский переулок, д. 2/1, стр. 2.</p>
                    </li>
                    <li className='Footer__timesheet'>
                        <div className='Footer__week'>
                            <p className='Footer__paragraph Footer__week-title'>Понедельник — Четверг</p>
                            <p className='Footer__paragraph Footer__week-time'>9:00-18:00</p>
                        </div>
                        <div className='Footer__week'>
                            <p className='Footer__paragraph Footer__week-title'>Пятница</p>
                            <p className='Footer__paragraph Footer__week-time'>9:00-16:45</p>
                        </div>
                    </li>

                    <li className='Footer__email'>
                        <p className='Footer__paragraph Footer__email-title'>Электронная почта</p>
                        <p className='Footer__paragraph Footer__email-paragraph'>Op@fadm.gov.ru</p>
                    </li>

                    <li className='Footer__number'>
                        <p className='Footer__paragraph Footer__number-title'>+7 495 668-80-08</p>
                    </li>
                </ul>
            </footer>
        </>
    )
}
export default Footer;