import React from 'react'
import styled from 'styled-components'

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
    margin:40px;
`;
export const UnderInfo = styled.div`
    display: flex;
    height: 150px;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`
function Footer() {
  return (
    <Block>
        <Cover>
            <LeftInfo>
                <img src='https://whitefoobank.netlify.app/assets/img/whitefoologocap.png' width={150}/>
                <p className='pfooter'>Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong danh sách các ngân hàng được người dùng bình chọn và được tin dùng bởi hàng triệu người dùng ở hầu hết các quốc gia trên thế giới.</p>
            </LeftInfo>
            <RightInfo>
                <div className='box-introduce'>
                    <h2 className='h2footer' >"Giới Thiệu"</h2>
                        <li className='lifooter'><a className='afooter' href='#'>Về chúng tôi</a></li>
                        <br/>
                        <li><a className='afooter' href='#'>Dịch vụ</a></li>
                        <br/>
                        <li><a className='afooter' href='#'>Tính năng</a></li>
                        <br/>
                        <li><a className='afooter' href='#'>Bảng giá</a></li>
                </div>
                <div className='box-support'>
                    <h2 className='h2footer' >Hỗ Trợ</h2>
                    <li><a className='afooter' href='#'>Câu hỏi thường gặp</a></li>
                    <br/>
                    <li><a className='afooter' href='#'>Chính sách bảo mật</a></li>
                    <br/>
                    <li><a className='afooter' href='#'>Điều khoản sử dụng</a></li>
                    <br/>
                    <li><a className='afooter' href='#'>Liên hệ</a></li>
                </div>
                <div className='box-contact'>
                    <h2 className='h2footer'>Liên hệ</h2>
                    <li>Địa chỉ:227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh</li>
                    <br/>
                    <li>Email:admin@whitefoo.com</li>
                    <br/>
                    <li>Phone:(+84) 1234567890</li>
                </div>
            </RightInfo>
        </Cover>
        <UnderInfo>
            <p className='pfooter'>2020 WhiteFoo Corporation - Copyright lololol</p>
        </UnderInfo>

    </Block>
  )
}

export default Footer