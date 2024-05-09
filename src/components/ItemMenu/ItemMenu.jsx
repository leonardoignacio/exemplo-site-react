import React from 'react';

const ItemMenu = ({ label, onClick }) => {
    return (
        <li className="nav-item">
            <button className="menu-item nav-link btn btn-link" onClick={onClick}>{label}</button>
        </li>
    );
};

export default ItemMenu;
