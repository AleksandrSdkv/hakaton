import { Link } from "react-router-dom";
import './Test.css'
function Test() {


    const a = document.querySelector('.md-block-unstyled');
    console.log(a)
    return (
        <main className="Test">
            <Link className=".Test__back-btn" to="/map">&#129044; Назад</Link>
            <h1 className="Test__title">Тест</h1>

            <p className="Test__text">На знание материалов блока «Погружение»</p>
            <div className="Test__time">
                <div className="Test__time-clock"></div>
                <p className="Test__time-text">Примерное время на выполнение 45 мин</p>
            </div>
            {(function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://madte.st/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'madtest-sdk')}

            <div className="madtest" data-id="7XEjorFn"></div>


        </main>
    )
}

export default Test;