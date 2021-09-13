import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Connection/Api";
import Navbar from "../../components/navbar/navbar";
import Posts from "../../components/posts/Posts";
import GeradorPosts from "../../components/geradorPosts/geradorPosts";

export default function Main() {
  const [user, setUser] = useState([]);

  document.title = "Bem-Vindo " + user.login;

  let history = useHistory();

  let numero = localStorage.getItem("nome");

  function returnLogin(){
    history.push("/login");
  }

  useEffect(() => {
    api
      .get("/usuarios/listar/" + numero)
      .then((response) => setUser(response.data.resposta))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [numero]);

  if (numero > 0) {
    return (
      <>
        <Navbar />
        <GeradorPosts/>
        <Posts />
      </>
    );
  } else {
    return(
      <>{returnLogin()}</>
    );
  }
}
