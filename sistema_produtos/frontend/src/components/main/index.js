import React,{Component} from 'react';
import './index.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';

export default class Main extends Component{
    state = {
        docs :[],
        info :[],
        page: 1
    }

    componentDidMount(){
       this.loadProducts();
    }

    loadProducts = async (page = 1) =>{
        //Acesso ao back-end
        const result = await api.get(`/produtos?&page=${page}`);
        const { docs,...info } = result.data;
        this.setState({docs,info,page});
    }

    nextPage = () =>{
        const {page, info} = this.state;

        if( page == info.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    prevPage = () =>{
        const {page} = this.state;

        if( page == 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }



    render(){
        const {info, page} = this.state;
        return(
        <div className='product-list'>
           {this.state.docs.map(product => (
               <article key={product._id}> 
                    <strong>{product.descricao}</strong>
                    <p>{product.fabricante}</p>
                    <Link to ={`/products`}>Detalhes</Link>
               </article>
           ))}
           <div className='actions'> 
            <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
            <button disabled={page === info.page} onClick={this.nextPage}>Próximo</button>
           </div>
        </div>
        )
    }
}