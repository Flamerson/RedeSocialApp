import React, {useState , useEffect} from "react";
import "./geradorPosts.css";
import api from "../../Connection/Api";

export default function GeradorPosts() {
  const [logado , setLogado] = useState([]);
  const [mensagem, setMensagem] = useState("");

  let numero = localStorage.getItem("nome");
  
  useEffect(() => {
    api
      .get("/usuarios/listar/" + numero)
      .then((response) => setLogado(response.data.resposta))
      .catch((err) => console.log("deu erro" + err))
  }, [numero] )

  function enviarPostagem()
  {
    if(!!mensagem)
    {
      api.post("/usuarios/postar", {
        nome: logado.login,
        mensagem: mensagem,
      })
      .then(() => console.log("ok"))
      .catch((err) => console.log("deu ruim" + err))
      window.location.reload();
    }else{
      console.log("mensagem vazia")
    }
  }

  return (
    <div className="post-ger">
      <div className="ger">
        <div className="img"></div>
        <form onSubmit={(event) => {event.preventDefault(); enviarPostagem();}}>
          <input type="text" placeholder="Digite o seu pensamento" value={mensagem} onChange={(event) => setMensagem(event.target.value)} />
          <button className="btn-post" type="submit">Postar</button>
        </form>
      </div>
    </div>
  );
}
