import logo from "../../images/logo.jpg";

const Header = ({ setActive }) => {
  return (
    <>
      <a
        className="App-link"
        href="https://vk.com/alex_vnrms"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="App-logo" src={logo} alt="logo" />
      </a>
      <nav>
        <ol className="App-nav">
          <li onClick={() => setActive("menu-active")}>Меню</li>
          <li>
            <a style={{ textDecoration: "none", color: "white" }} href="#Maps">
              Локация
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:+1234567890"
            >
              Связаться
            </a>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Header;
