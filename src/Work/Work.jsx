import React from "react";
import "./Work.css";
import yandexImg from "../assets/img/yandex.png";
import beautyStudio from "../assets/img/beautyStudio.png";
import designStudio from "../assets/img/designStudio.png";
import pizzaPic from "../assets/img/pizzaPic.png";
import toDo from "../assets/img/toDo.png";
import mestoImg from "../assets/img/mesto.png";
import russianTravel from "../assets/img/russianTravel.png";
import howToLearnImg from "../assets/img/howToLearn.png";

function Work() {
  return (
    <div className="work" id="work">
      <h2 className="work__header">works</h2>
      <ul className="work__items">
        <li className="work__item">
          <a href="http://goo.yandex.tilda.ws/">
            <div className="layer">Landing on Tilda with slider</div>
          </a>
          <img src={yandexImg} alt="Изобрадение ленединга Яндекс Go" />
        </li>
        <li className="work__item">
          <a href="http://beautystudiio.tilda.ws/">
            <div className="layer">Landing on Tilda</div>
          </a>
          <img src={beautyStudio} alt="Изобрадение ленединга салона красоты" />
        </li>
        <li className="work__item">
          <a href="https://gonzoooo.github.io/design-studio/">
            <div className="layer">Landing on React</div>
          </a>
          <img src={designStudio} alt="Изобрадение лендинга студии дизайна" />
        </li>
        <li className="work__item">
          <a href="https://gonzoooo.github.io/react-pizza-scss/">
            <div className="layer">
              App on React with Redux for ordering pizza with the ability to
              choose the size and number of pizzas.
            </div>
          </a>
          <img src={pizzaPic} alt="Изобрадение приложения пиццерии" />
        </li>
        <li className="work__item">
          <a href="https://gonzoooo.github.io/todo-react/">
            <div className="layer">
              To-do list app on React with the ability to add, tag, sort, and
              delete to-dos.
            </div>
          </a>
          <img src={toDo} alt="Изобрадение лендинга `ToDo`" />
        </li>
        <li className="work__item">
          <a href="https://gonzoooo.github.io/mesto/">
            <div className="layer">
              Adapted landing page with the ability to add and delete photos,
              like, change avatar and nickname
            </div>
          </a>
          <img src={mestoImg} alt="Изобрадение лендинга `Mesto`" />
        </li>
        <li className="work__item">
          <a href="https://gonzoooo.github.io/russian-travel/">
            <div className="layer">Adapted landing page</div>
          </a>
          <img
            src={russianTravel}
            alt="Изобрадение лендинга `Путешествие по России`"
          />
        </li>
        <li className="work__item">
          <a href="https://gonzoooo.github.io/how-to-learn/">
            <div className="layer">Adapted landing page</div>
          </a>
          <img
            src={howToLearnImg}
            alt="Изобрадение лендинга `Научиться учиться`"
          />
        </li>
      </ul>
    </div>
  );
}

export default Work;
