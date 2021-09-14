import React, {useState, useEffect} from "react";
import "./Posts.css";
import api from "../../Connection/Api";

export default function Posts() {
  const [posts , setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/usuarios/pegar")
      .then((response) => setPosts(response.data.resposta))
      .catch((erro) => {console.log("deu erro amigo" + erro)})
  }, [posts])

  return (
    <div className="back">
      <div className="post-div">
        <ul>
          {posts.map((post,key) => {
            return(
              <li>
                <div className="post">
                  <div className="post-name">
                    <div className="img"></div>
                    <p>{post.nome}</p>
                  </div>
                  <div className="post-text">
                    <p>
                      {post.mensagem}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
