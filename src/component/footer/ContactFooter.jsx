import React from "react";

function ContactFooter(props) {
  return (
    <div>
      <h2 className="h2footer">{props.title}</h2>
      <br />
      <li>{props.add}</li>
      <br />
      <li>{props.email}</li>
      <br />
      <li>{props.tel}</li>
    </div>
  );
}

export default ContactFooter;
