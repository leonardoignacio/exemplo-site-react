import React from 'react';

const ItemCarousel = ({ src, alt , className }) => {
    return (
        <div className={className}>
            <img src={src} className="d-block w-100 img-fluid" alt={alt} />
        </div>
    );
};

export default ItemCarousel;
