import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import "./Card.css";

const onImg = "/img/on-img/on-img.png";
const onImg2 = "/img/on-img/on-img@2x.png";
const onImg3 = "/img/on-img/on-img@3x.png";
const blue = "/img/blue/blue.png";
const blue2 = "/img/blue/blue@2x.png";
const blue3 = "/img/blue/blue@3x.png";

// 카드 View
const Card = ({ id, image_url, nickname, profile_image_url }) => {
  // onlyFavorite : 스크랩한 것만 보기 상태
  const onlyFavorite = useSelector(state => state.card.onlyFavorite);
  // Checked : Card에 즐겨찾기 버튼 상태
  const [Checked, setChecked] = useState(false);

  // 컴포넌트 마운트시 localStorage에서 id로 즐겨찾기된 Card 확인
  useEffect(() => {
    let ids = localStorage.getItem("favorite");
    let arr = [];
    console.log(ids);
    if (ids) {
      arr = JSON.parse(ids);
      if (arr.includes(id)) {
        setChecked(true);
      }
    }
  }, []);

  // 즐겨찾기 on/off 이벤트
  const onClickEvt = () => {
    let checkedState = Checked;

    setChecked(!checkedState);

    let ids = localStorage.getItem("favorite");
    let arr = [];
    if (!Checked) {
      if (ids) {
        arr = JSON.parse(ids);
        arr.push(id);
        arr = Array.from(new Set(arr));
        localStorage.setItem("favorite", JSON.stringify(arr));
      } else {
        arr = [];
        arr.push(id);
        localStorage.setItem("favorite", JSON.stringify(arr));
      }
    } else {
      arr = JSON.parse(ids);
      arr = arr.filter(id_ => id_ !== id);
      arr = Array.from(new Set(arr));
      localStorage.setItem("favorite", JSON.stringify(arr));
    }
  };

  // card 화면구성
  const cardView = () => {
    return (
      <div className="card_container">
      <div className="top_container">
        <img src={profile_image_url} className="ic_avatar_cat" />
        <div className="Tommy-Cummings">{nickname} </div>
      </div>
      <div className="ic_favorite">
        <img src={image_url} className="Rectangle" />
        {Checked ? (
          <img
            src={blue}
            srcSet={`${blue2} 2x, ${blue3} 3x`}
            className="on-img"
            onClick={onClickEvt}
          />
        ) : (
          <img
            src={onImg}
            srcSet={`${onImg2} 2x, ${onImg3} 3x`}
            className="on-img"
            onClick={onClickEvt}
          />
        )}
      </div>
    </div>
    );
  }

  // 스크랩한 것만 보기 활성화 되어있다면 Checked 된것만 화면에 표시
  const checkedCard = () => {
    return (Checked?cardView():null);

  }

  // 스크랩한 것만 보기 활성화 되어 있다면 checkedCard()로 Checked 된 Card만 출력, 비활성화 되어있으면 cardView()로 전체 Card list 출력
  return onlyFavorite?checkedCard():cardView();
};

export default Card;
