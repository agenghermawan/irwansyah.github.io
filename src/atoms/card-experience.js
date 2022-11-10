import React from "react";

export default function CardExperience(props) {
  const { title, date, children } = props;
  return (
    <div className="desc-experience">
      <div className="desc-experience__title">
        <h5 className="text-2xl">{title}</h5>
      </div>
      <div className="desc-experience__time">
        <h5>{date}</h5>
      </div>
      <div className="desc-experience__list">
        <ul className="list-square list-inside">{children}</ul>
      </div>
    </div>
  );
}
