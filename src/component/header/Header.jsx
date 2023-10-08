import React from "react";
import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";
import HeaderImg from "./HeaderImg";

export const HeaderImage = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 20px;
`;
export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

function Header() {
  return (
    <Block>
      <HeaderImage>
        <HeaderImg image="https://whitefoobank.netlify.app/assets/img/whitefoologocap.png"/>
      </HeaderImage>
      <HeaderTitle
        first="Trang chủ"
        second="Thông tin"
        third="Hỏi đáp"
        four="Liên hệ"
        fif="Thành viên"
      />
    </Block>
  );
}

export default Header;
