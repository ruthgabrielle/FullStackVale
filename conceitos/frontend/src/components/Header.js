import React, {Component} from 'react';
import logo from '../assets/globe.png';
import './Header.css';

export default class Header extends Component {
    render(){
        return(
            <div className='container'>
                <div className='content'>
                    <div className='logo'>
                    <img alt='' src={logo}/>
                    </div>
                    <a href='#'>Link 1</a>
                    <a href='#'>Link 2</a>
                    <a href='#'>Link 3</a>
                </div>
            </div>
        )
    }
}