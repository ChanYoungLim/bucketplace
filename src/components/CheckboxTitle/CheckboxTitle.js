import React from 'react';
import './CheckboxTitle.css'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

// 버튼 이미지
const btCheckboxChecked = '/img/bt-checkbox-checked/bt-checkbox-checked.png';
const btCheckboxChecked2 = '/img/bt-checkbox-checked/bt-checkbox-checked@2x.png';
const btCheckboxChecked3 = '/img/bt-checkbox-checked/bt-checkbox-checked@3x.png';

// 화면 상단 "스크랩한 것만 보기" Component
const CheckboxTitle = () => {
    // onlyFavorite : check box 상태를 redux에서 state로 관리
    const onlyFavorite = useSelector(state => state.card.onlyFavorite);
    const dispatch = useDispatch();

    // onClickEvt() : check box 클릭 이벤트
    const onClickEvt = () => {
        // onlyFavorite on/off
        if(onlyFavorite){
            actions.onlyFavoriteOff(dispatch);
        } else{
            actions.onlyFavoriteOn(dispatch);
        }
      };

    return (
        <div className="checkbox_container">
            <img src={btCheckboxChecked} srcSet={`${btCheckboxChecked2} 2x, ${btCheckboxChecked3} 3x`} className="bt_checkbox_checked" 
            onClick={onClickEvt}/>
            <div className="text">스크랩한 것만 보기</div>
        </div>
    );
};

export default CheckboxTitle;