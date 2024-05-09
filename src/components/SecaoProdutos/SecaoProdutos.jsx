import React from 'react';
import CardProduto from '../CardProduto/CardProduto';
import './SecaoProdutos.css';
const SecaoProdutos = ({ produtos }) => {
    return (
        <div className="container">
            <h2 className="my-4">Nossos Produtos</h2>
            <div className="row">
                {produtos.map((produto, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4 ">
                        <CardProduto produto={produto} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecaoProdutos;
