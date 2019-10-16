import React from 'react';
import './CardWrapper.css';

const CardWrapper = ({children}) => {
    return (
        <div className="card_container">
            {children}
        </div>
    );
};

export default CardWrapper;