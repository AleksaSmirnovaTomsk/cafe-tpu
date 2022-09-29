import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <> 
            <a
                className="App-link"
                href="https://vk.com/alex_vnrms"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className='App-logo' src={logo} alt="logo" />
            </a>
            <nav>
                <ol className='App-nav'>
                    <li>История создания</li>
                    <li>Меню</li>
                    <li>Локация</li>
                    <li>Заказать</li>
                    <li>О нас</li>
                </ol>
            </nav>
        </>
    )
}

export default Header