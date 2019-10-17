import React, { useState, useEffect } from "react";
import "./Card.css";

const onImg = "/img/on-img/on-img.png";
const onImg2 = "/img/on-img/on-img@2x.png";
const onImg3 = "/img/on-img/on-img@3x.png";
const blue = "/img/blue/blue.png";
const blue2 = "/img/blue/blue@2x.png";
const blue3 = "/img/blue/blue@3x.png";

const Card = ({ id, image_url, nickname, profile_image_url }) => {
  const [Checked, setChecked] = useState(false);

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
};

export default Card;
