import { useState } from "react";

import "./App.css";

import Header from "./components/header/Header";
import Modal from "./components/carousel/Carousel";
import Navigator from "./components/navigator/Navigator";
import Description from "./components/description/Description";
import Record from "./components/record/Record";
import Maps from "./components/maps/Maps";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import FormExample from "./components/form/Form";
import SuccessWindow from "./components/successWindow/successWindow";

function App() {
  const [active, setActive] = useState("");
  const [activeForm, setActiveForm] = useState("");
  const [activeSucc, setActiveSucc] = useState("");
  const [sumCost, setSumCost] = useState(0);
  const [dish, setDishes] = useState([]);

  if (active || activeForm) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const hideActive = (e) => {
    if (e.target.classList[0] !== "menu-container" && active) {
      setActive("");
    }
    if (e.target.classList[0] !== "form-container" && activeForm) {
      setActiveForm("");
    }
    if (e.target.classList[0] !== "succ-container" && activeSucc) {
      setActiveSucc("");
    }
  };

  return (
    <div style={{ backgroundColor: "black" }} className="App">
      <Menu
        dish={dish}
        setDishes={setDishes}
        sumCost={sumCost}
        setSumCost={setSumCost}
        setActive={setActive}
        active={active}
        setActiveForm={setActiveForm}
      />
      <FormExample
        setActiveForm={setActiveForm}
        setActive={setActive}
        sumCost={sumCost}
        dish={dish}
        activeForm={activeForm}
        setActiveSucc={setActiveSucc}
      />
      <SuccessWindow activeSucc={activeSucc} setActiveSucc={setActiveSucc} />
      <div
        style={active || activeForm || activeSucc ? { opacity: "50%" } : null}
        className="Opac"
      >
        <header className="App-header">
          <Header setActive={setActive} />
        </header>
        <main onClick={(e) => hideActive(e)}>
          <Modal />
          <Navigator setActive={setActive} />
          <Description />
          <Record />
          <Maps />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
