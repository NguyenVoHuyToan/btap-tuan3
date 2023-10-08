import React from "react";
import styled from "styled-components";
import RightFooter from "./RightFooter";
import ContactFooter from "./ContactFooter";
import UnderFooter from "./UnderFooter";
import LeftFooter from "./LeftFooter";

export const Block = styled.div`
  height: 300px;
`;

export const Cover = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: black;
  margin-top: 50px;
  padding-top: 30px;
  border-bottom: 1px solid grey;
`;

export const LeftInfo = styled.div`
  width: 25%;
  height: 100%;
  margin: 40px;
  padding: 30px;
`;

export const RightInfo = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  /* margin-left: 10px; */
  margin: 40px;
`;
export const UnderInfo = styled.div`
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
function Footer() {
  return (
    <Block>
      <Cover>
        <LeftInfo>
          <LeftFooter
            image="https://whitefoobank.netlify.app/assets/img/whitefoologocap.png"
            paragrap="Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong danh
           sách các ngân hàng được người dùng bình chọn và được tin dùng bởi
           hàng triệu người dùng ở hầu hết các quốc gia trên thế giới."
          />
        </LeftInfo>
        <RightInfo>
          <div className="box-introduce">
            <RightFooter
              title="Giới thiệu"
              textone="Về chúng tôi"
              texttwo="Dịch vụ"
              textthree="Tính năng"
              textfour="Bảng giá"
            />
          </div>
          <div className="box-support">
            <RightFooter
              title="Hỗ Trợ"
              textone="Câu hỏi thường gặp"
              texttwo="Chính sách bảo mật"
              textthree="Điều khoản sử dụng"
              textfour="Liên hệ"
            />
          </div>
          <div className="box-contact">
            <ContactFooter
              title="Liên Hệ"
              add="Địa chỉ:227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh"
              email="Email:admin@whitefoo.com"
              tel="Phone:(+84) 1234567890"
            />
          </div>
        </RightInfo>
      </Cover>
      <UnderInfo>
        <UnderFooter title="2020 WhiteFoo Corporation - Copyright lololol" />
      </UnderInfo>
    </Block>
  );
}

export default Footer;
