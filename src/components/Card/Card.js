import React from 'react';
import './Card.css';

const Card = ({id, image_url, nickname, profile_image_url}) => {

    return (
        <div>
            <div className="topContainer">
                <img src={profile_image_url} className="ic_avatar_cat"/>
                <div className="Tommy-Cummings">{nickname} </div>
                
            </div>
            <img src={image_url} className="Rectangle"/>
        </div>
    );
}

export default Card;