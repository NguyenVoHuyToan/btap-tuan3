import React from "react";

function TitleHandle(props) {
  return (
    <div>
      <img className="img-title" src={props.image} />
      <h2>{props.title}</h2>
      <p className="ptitle">{props.text}</p>
      <a className="atitle" href={props.href}>
        Xem thêm
      </a>
    </div>
  );
}

export default TitleHandle;
