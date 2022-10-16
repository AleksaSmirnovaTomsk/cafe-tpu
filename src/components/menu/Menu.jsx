import { useState } from "react";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

import "./Menu.css";

import Carbonara from "../../images/Carbonara.jpg";
import Borch from "../../images/Borch.jfif";
import Ragu from "../../images/Ragu.jpg";
import Cace from "../../images/Cace.jpg";

let dishArr = [];

export default function Menu({
  active,
  setActive,
  setActiveForm,
  setSumCost,
  dish,
  sumCost,
  setDishes,
}) {
  const counterValue = (e) => {
    dishArr.push(e.target.parentNode.childNodes[0].alt);
    setDishes(dishArr);
    let sum = sumCost + Number(e.target.previousSibling.textContent);
    setSumCost(sum);
  };

  const continuePay = () => {
    setActive("");
    setActiveForm("active-form");
  };

  const dishCount = dish.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  const dishString = JSON.stringify(dishCount)
    .replace(/^.|.$/g, "")
    .replace(/['"]+/g, "")
    .replace(/,/g, ", ")
    .replace(/:/g, ": ");

  return (
    <div className={`menu-container ${active}`}>
      <h1>Меню</h1>
      <CloseButton onClick={() => setActive("")} className="CloseButton" />
      <div className="menu-elem">
        <img src={Carbonara} alt="Carbonara" />
        <div className="menu-elem-descr">
          Нежнейшая лапша с болгарскими колбасами под сливочным соусом
        </div>
        <div>398</div>
        <Button onClick={(e) => counterValue(e)} variant="success">
          Выбрать
        </Button>{" "}
      </div>

      <div className="menu-elem">
        <img src={Borch} alt="Borch" />
        <div className="menu-elem-descr">
          Ароматный русский борщ с телятиной по-деревенски
        </div>
        <div>495</div>
        <Button onClick={(e) => counterValue(e)} variant="success">
          Выбрать
        </Button>{" "}
      </div>

      <div className="menu-elem">
        <img src={Ragu} alt="Ragu" />
        <div className="menu-elem-descr">
          Тушеная картошечка с овощами и травами, как у вашей мамы
        </div>
        <div>387</div>
        <Button onClick={(e) => counterValue(e)} variant="success">
          Выбрать
        </Button>{" "}
      </div>

      <div className="menu-elem">
        <img src={Cace} alt="Cace" />
        <div className="menu-elem-descr">
          Американский яблочный пирог в русской провинции
        </div>
        <div>295</div>
        <Button onClick={(e) => counterValue(e)} variant="success">
          Выбрать
        </Button>{" "}
      </div>

      <div className="menu-elem">
        <h4 className="menu-total">Итог</h4>
        <div className="menu-elem-descr">{dishString}</div>
        <div style={{ fontWeight: "bold" }}>{sumCost}</div>
        <Button onClick={() => continuePay()} variant="warning">
          Купить
        </Button>{" "}
      </div>
    </div>
  );
}
