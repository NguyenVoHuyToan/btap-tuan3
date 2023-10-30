import React from "react";

function HeaderTitle(props) {
  return (
    <div className="aheader">
      <a href="https://www.facebook.com/">
        <li>{props.first}</li>
      </a>
      <a href="https://www.facebook.com/">
        <li>{props.second}</li>
      </a>
      <a href="https://www.facebook.com/">
        <li>{props.third}</li>
      </a>
      <a href="https://www.facebook.com/">
        <li>{props.four}</li>
      </a>
      <a href="https://www.facebook.com/">
        <li>{props.fif}</li>
      </a>
    </div>
  );
}

export default HeaderTitle;
