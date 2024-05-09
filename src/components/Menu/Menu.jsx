import React from 'react';
import ItemMenu from '../ItemMenu/ItemMenu';
import './Menu.css';

const Menu = ({ itensMenu }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="">
                <img
                        src="/img/logo.png" className="logo d-inline-block align-top" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto menu">
                        {itensMenu.map((item, index) => (
                            <ItemMenu key={index} label={item.label} onClick={item.onClick} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
