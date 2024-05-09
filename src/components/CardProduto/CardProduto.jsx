import React from 'react';

const CardProduto = ({ produto }) => {
    return (
        <div className="card">
            <img src={produto.imagem} className="card-img-top" alt={produto.titulo} />
            <div className="card-body">
                <h5 className="card-title">{produto.titulo}</h5>
                <p className="card-text">{produto.descricao}</p>
                <a href={produto.link} className="btn btn-primary">Ver Produto</a>
            </div>
        </div>
    );
};

export default CardProduto;
