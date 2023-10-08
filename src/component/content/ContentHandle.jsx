import React from "react";
import styled from "styled-components";

export const NewContent = styled.div`
  width: 50%;
  padding: 50px;
`;

function ContentHandle(props) {
  return (
    <NewContent>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </NewContent>
  );
}

export default ContentHandle;
