import React from "react";

/* eslint-disable jsx-a11y/alt-text */
const EmotionItem = ({emotion_id, emotion_img, emotion_descript, onClick, isSelected}) => {
  return (
    <div onClick={() => {onClick(emotion_id)}} className={["EmotionItem", isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`].join(" ")}>
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  )
}

export default React.memo(EmotionItem);