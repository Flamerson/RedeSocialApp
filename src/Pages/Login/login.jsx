import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../Connection/Api";
import { useHistory } from "react-router";
import "./login.css";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [data, setData] = useState([]);

  let numero = localStorage.getItem("nome");

  document.title = "Login";

  let history = useHistory();

  function awaitData() {
    if (!!login && !!senha) {
      api
        .post("/usuarios/logar", {
          login: login,
          senha: senha,
        })
        .then((response) => setData(response.data))
        .catch(() => console.log("deu ruim amigo"));
    } else {
      console.log("erro");
    }
  }

  function asyncStorage(idNumber) {
    localStorage.setItem("nome", idNumber);
  }

  function returnLogin() {
    history.push("/");
  }

  useEffect(() => {
    if (data.resposta) {
      let idNumber = data.resposta.id;
      asyncStorage(idNumber);
      history.push("/");
    }
  });
  if (numero > 0) {
    return <>{returnLogin()}</>;
  } else {
    return (
      <div className="login-main">
        <div className="texts">
          <h1>bem vindo a pagina de login</h1>
          <h3>começe ja sua experiencia</h3>
        </div>
        <div className="form-login">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              awaitData();
            }}
          >
            <input
              className="inp"
              type="text"
              placeholder="Login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
            <input
              className="inp"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
            <button className="btn" type="submit">
              Login
            </button>
          </form>
          <p>
            Não tem conta? <Link to="/cadastro">Cadastro</Link>
          </p>
        </div>
      </div>
    );
  }
}
