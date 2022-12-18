import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts" id="contact">
      <h2 className="contacts__header">you can reach me on</h2>
      <ul className="contacts__items">
        <li className="contacts__item">
          <a
            href="https://www.linkedin.com/in/olga-smirnova-6a1b9b246/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="contacts__item">
          <a
            href="https://github.com/Gonzoooo"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="contacts__item">
          <a href="mailto:gatarto@yandex.ru">Mail</a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
