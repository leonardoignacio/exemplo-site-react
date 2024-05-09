import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from './components/Menu/Menu';
import Carousel from './components/Carousel/Carousel';
import SecaoProdutos from './components/SecaoProdutos/SecaoProdutos';
import Footer from './components/Footer/Footer';

const App = () => {
    const itensMenu = [
        { label: 'Home', onClick: () => console.log('Clicou no Item Home') },
        { label: 'Midias', onClick: () => console.log('Clicou no Item midias') },
        { label: 'Sobre...', onClick: () => console.log('Clicou no Item 2') },
        { label: 'Contato', onClick: () => console.log('Clicou no Item 3') },
        { label: 'Item 4', onClick: () => console.log('Clicou no Item 4') },
        { label: 'Item 5', onClick: () => console.log('Clicou no Item 5') }
    ];

    const imagensCarousel = [
        { src: "/img/banner1.jpg", alt: "Slide 1" },
        { src: "/img/banner2.jpg", alt: "Slide 2" },
        { src: "/img/banner3.jpg", alt: "Slide 3" }
        
    ];

    const produtos = [
        {
            imagem: "/img/produto1.jpg",
            titulo: "Produto 1",
            descricao: "Descrição do Produto 1",
            link: "https://exemplo.com/produto1"
        },
        {
            imagem: "/img/produto2.jpg",
            titulo: "Produto 2",
            descricao: "Descrição do Produto 2",
            link: "https://exemplo.com/produto2"
        },
        {
            imagem: "/img/produto3.jpg",
            titulo: "Produto 3",
            descricao: "Descrição do Produto 3",
            link: "https://exemplo.com/produto3"
        },
        {
            imagem: "/img/produto1.jpg",
            titulo: "Produto 4",
            descricao: "Descrição do Produto 4",
            link: "https://exemplo.com/produto4"
        },
        {
            imagem: "/img/produto1.jpg",
            titulo: "Produto 5",
            descricao: "Descrição do Produto 5",
            link: "https://exemplo.com/produto5"
        },
        {
            imagem: "/img/produto1.jpg",
            titulo: "Produto 6",
            descricao: "Descrição do Produto 6",
            link: "https://exemplo.com/produto6"
        }
    ];

    return (
        <div className='container-fluid'>
            <Menu className='col-12' itensMenu={itensMenu} />
            <div >
                <div className="row">
                    <div className="col-12">
                        <Carousel imagens={imagensCarousel} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <SecaoProdutos produtos={produtos} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
