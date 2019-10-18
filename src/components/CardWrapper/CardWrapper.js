import React from 'react';
import './CardWrapper.css';

// card를 담을 Wrapper
const CardWrapper = ({children}) => {
    return (
        <div className="card_wrapper_container">
            {children}
        </div>
    );
};

export default CardWrapper;