import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound(){
    return(
        <>
            <h1>404 page not found</h1>
            <p>Voltar ao inicio<Link to="/">Voltar</Link></p>            
        </>
    )
}