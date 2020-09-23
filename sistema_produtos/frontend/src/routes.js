import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './components/main';
import Products from './components/products';
import Usuario from './components/usuario';

export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/usuario' component={Usuario}/>
                </Switch>
            </BrowserRouter>
        )
    }
}