import React, {useState , useEffect} from 'react';
import Navbar from '../../components/navbar/navbar';
import './Perfil.css';
import api from '../../Connection/Api';

export default function Perfil(){
    const [logado, setLogado] = useState([]);

    const numero = localStorage.getItem("nome");

    useEffect(() => {
        api
            .get("/usuarios/listar/" + numero)
            .then((response) => setLogado(response.data.resposta))
            .catch((err) => console.log("deu erro" + err))
    }, [numero])

    return(
        <div>
            <Navbar/>
            <div className="background">
                <div className="card">
                    <div className="back-img"></div>
                    <div className="algn">
                        <div className="img"></div>
                        <h3>{logado.login}</h3>
                    </div>
                    <div className="posts">
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}