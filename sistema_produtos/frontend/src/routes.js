import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/login';

import Main from './components/main';
import Products from './components/products';
import ProductRecord from './components/productsRecord';

export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/main' component={Main}/>
                    <Route path='/productrecord' component={ProductRecord}/>
                    <Route path='/products/:id' component={Products}/>
                </Switch>
            </BrowserRouter>
        )
    }
}