import React from "react";
import "./geradorPosts.css";

export default function GeradorPosts() {
  return (
    <div className="post-ger">
      <div className="ger">
        <div className="img"></div>
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Digite o seu pensamento" />
          <button className="btn-post">Postar</button>
        </form>
      </div>
    </div>
  );
}
