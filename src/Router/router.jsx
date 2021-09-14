import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from '../Pages/Login/login'
import Main from '../Pages/Main/main'
import NotFound from '../Pages/404page/notFound'
import Cadastro from '../Pages/Cadastro/Cadastro'
import Perfil from '../Pages/Perfil/Perfil'

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/cadastro" component={Cadastro} exact />
                <Route path="/perfil" component={Perfil} exact />
                <Route component={() => (<NotFound/>)} />
            </Switch>
        </BrowserRouter>
    )
}