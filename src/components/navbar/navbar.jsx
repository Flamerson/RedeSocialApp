import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./navbar.css";
import api from "../../Connection/Api";

export default function Navbar() {
  const [user, setUser] = useState([]);

  let history = useHistory();

  let numero = localStorage.getItem("nome");

  useEffect(() => {
    api
      .get("/usuarios/listar/" + numero)
      .then((response) => setUser(response.data.resposta))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [numero]);

  function getLogout() {
    localStorage.removeItem("nome");
    history.push("/login");
  }

  const drop = document.querySelector(".dropdown");
  const item = document.querySelector(".dropdown-content");

  function dropItem() {
    item.classList.toggle("active");
  }

  return (
    <div className="nav">
      <Link to="/">Main</Link>
      <div className="dropdown" onClick={dropItem}></div>
      <div className="dropdown-content">
        <p>bem-vindo {user.login}</p>
        <Link to="/">perfil</Link>
        <button className="btn-lgt" onClick={getLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
