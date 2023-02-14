import React from "react";
import "./Main.css";
import Work from "../Work/Work";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";

function Main() {
  return (
    <main className="main">
      <h1 className="main__header">Let me introduce my portfolio</h1>
      <Work />
      <About />
      <Contacts />
    </main>
  );
}

export default Main;
