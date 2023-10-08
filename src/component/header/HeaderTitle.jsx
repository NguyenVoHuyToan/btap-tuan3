import React from "react";

function HeaderTitle(props) {
  return (
    <div className="aheader">
      <a href="#">
        <li>{props.first}</li>
      </a>
      <a href="#">
        <li>{props.second}</li>
      </a>
      <a href="#">
        <li>{props.third}</li>
      </a>
      <a href="#">
        <li>{props.four}</li>
      </a>
      <a href="#">
        <li>{props.fif}</li>
      </a>
    </div>
  );
}

export default HeaderTitle;
