import React,{Component} from 'react';
import './index.css';
import api from '../../services/api';

export default class Products extends Component{
    state = {
        product : {}
    }

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/produtos_id/${id}`);
        this.setState({product : response.data});
    }


    render(){
        const {product} = this.state;
        return(
        <div className='product-info'>
            <h1> {product.descricao}</h1>
            <p> Fabricante: {product.fabricante}</p>
            <p> Quantidade: {product.quantidade}</p>
            <p> Preço: {product.preco}</p>
            <p>
                URL : <a href={product.imagem}> Imagem do Produto </a>
            </p>

        </div>
        )
    }
}