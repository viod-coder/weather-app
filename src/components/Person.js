import React from "react";
import "./person.css";

const Person = (props) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${props.img}.jpg`;
  console.log(url);

  return (
    <div className="person">
      <img src={url} alt="" />
      <h4>{props.name}</h4>
      <h4>{props.job}</h4>
      {props.children}
    </div>
  );
};

export default Person;
