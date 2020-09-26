import React, {Component} from 'react';
import  './index.css';
import api from '../../services/api';

export default class Login extends Component{
    state = {
        email : '',
        senha : '',
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const response = await api.post('/autentica', {
            email : this.state.email,
            senha: this.state.senha,
        });
        
        if(response.data){
            this.props.history.push('/main');
        }
    }
    
    handleOnChange = event =>{
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <div className='login-container'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                        placeholder='email@dominio.com'
                        name = 'email'
                        value={this.state.email}
                        onChange={this.handleOnChange}/>

                    <input type='password'
                        placeholder='senha'
                        name='senha'
                        value={this.state.senha}
                        onChange={this.handleOnChange}/>

                    
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}