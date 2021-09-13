import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../Connection/Api";
import "../Login/login.css";

export default function Cadastro() {
  const [value, setValue] = useState("");
  const [senha, setSenha] = useState("");
  const [res, setRes] = useState([]);

  let numero = localStorage.getItem("nome");

  document.title = "cadastro";

  let history = useHistory();

  function returnLogin(){
    history.push("/");
  }

  useEffect(() => {
    if (res === "sucesso") {
      history.push("/login");
    } else {
      console.log("esperando um cadastro");
    }
  }, [res, history]);

  if(numero > 0)
  {
    return(<>{returnLogin()}</>)
  }else{
    return (
      <div className="login-main">
        <div className="texts">
          <h1>bem vindo a pagina de cadastro</h1>
          <h3>pronto? então crie uma conta</h3>
        </div>
        <div className="form-login">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              api
                .post("/usuarios/cadastrar", {
                  login: value,
                  senha: senha,
                })
                .then((response) => setRes(response.data.tipo))
                .catch(() => {
                  console.log("deu erro vacilão");
                });
  
              return;
            }}
          >
            <input
              className="inp"
              type="text"
              placeholder="Login"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <input
              className="inp"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
            <button className="btn" type="submit">
              Cadastrar
            </button>
          </form>
          <p>
            tem uma conta? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}
