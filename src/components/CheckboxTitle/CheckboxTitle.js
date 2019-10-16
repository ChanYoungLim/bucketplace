import React from 'react';
import './CheckboxTitle.css'
const btCheckboxChecked = '/img/bt-checkbox-checked/bt-checkbox-checked.png';
const btCheckboxChecked2 = '/img/bt-checkbox-checked/bt-checkbox-checked@2x.png';
const btCheckboxChecked3 = '/img/bt-checkbox-checked/bt-checkbox-checked@3x.png';

const CheckboxTitle = () => {
    return (
        <div className="checkbox_container">
            <img src={btCheckboxChecked} srcSet={`${btCheckboxChecked2} 2x, ${btCheckboxChecked3} 3x`} className="bt_checkbox_checked"/>
            <div className="text">스크랩한 것만 보기</div>
        </div>
    );
};

export default CheckboxTitle;