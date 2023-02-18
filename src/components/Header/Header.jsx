import './header.css';
import { Link } from 'react-router-dom'

function Header({ onSearch }) {
    const onClickSearch = () => {
        onSearch()
    }
    
    return (
        <>
            <header className='Header'>
                <div className="Header__logo"></div>
                <nav>
                    <ul className='Header__nav-bar'>
                        <li className='Header__nav-item'>Главная</li>
                        <li className='Header__nav-item'>Справочник</li>
                        <Link to="/map" className='Header__nav-item'>Мой кабинет</Link>
                        <li className='Header__nav-item'>Команда</li>
                    </ul>
                </nav>
                <nav>
                    <ul className='Header__search'>
                        <li className='Header__nav-bar-search' onClick={onClickSearch}></li>
                        <li className='Header__nav-bar-options'></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;