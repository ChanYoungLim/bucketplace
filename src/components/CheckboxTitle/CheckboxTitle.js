import React from 'react';
import './CheckboxTitle.css'

const CheckboxTitle = () => {
    return (
        <div className="checkbox_container">
            <img src='/img/bt-checkbox-checked.png' className="bt_checkbox_checked"/>
            <div className="text">스크랩한 것만 보기</div>
        </div>
    );
};

export default CheckboxTitle;