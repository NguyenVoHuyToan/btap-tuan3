import React from 'react'
import styled from 'styled-components'

export const HeaderInfo = styled.div`
display: flex;
list-style: none;
gap: 30px;
margin-top: 20px;
padding-right: 50px;
text-decoration: none;   
`
export const HeaderImage = styled.div`
display: flex;
margin-left: 50px; 
margin-top: 15px;
`
export const Block = styled.div`
display: flex;   
justify-content: space-between;
text-decoration: none;
`

function Header() {
  return (
    
    <Block>
        <HeaderImage>
            <img src="https://whitefoobank.netlify.app/assets/img/whitefoologocap.png" width={150}></img>
        </HeaderImage>
        <HeaderInfo>
            <a href='#'><li>Trang chủ</li></a>
            <a href='#'><li>Thông tin</li></a>
            <a href='#'><li>Hỏi đáp</li></a>
            <a href='#'><li>Liên hệ</li></a>
            <a href='#'><li>Thành viên</li></a>
        </HeaderInfo>
    </Block>
    
  )
}

export default Header