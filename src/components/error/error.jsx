import React from "react";
import {useHistory} from 'react-router-dom';
import "./error.css";

export default function Erro() {
    let history = useHistory();

    return(
        <div className="err">
            <h1>você não esta logado</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            history.push("/login");
          }}
        >
          <h3>fazer login</h3>
          <button className="err-btn">Login</button>
        </form>
        </div>
    );
}