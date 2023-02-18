import './Header_map.css';
import { Link } from 'react-router-dom'

function Header({ onSearch }) {
    const onClickSearch = () => {
        onSearch()
    }

    return (
        <>
            <header className='Header'>
                <div className='Header__logo_map'></div>
                <nav>
                    <ul className='Header__nav-bar'>
                        <li className='Header__nav-item_map '>Главная</li>
                        <Link to="/" className='Header__nav-item_map '>Справочник</Link>
                        <li className='Header__nav-item_map '>Мой кабинет</li>
                        <li className='Header__nav-item_map '>Команда</li>
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