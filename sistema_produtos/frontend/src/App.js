import React,{Component} from 'react';
import Routes from './routes';
import Header from './components/header'

export default class App extends Component{
  render(){
    return(
      <div id='App' >
        <Header/>
      <Routes/>
      </div>
    
  )
}
}