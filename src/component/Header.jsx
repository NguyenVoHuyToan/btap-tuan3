import React from 'react'
import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'

export const HeaderImage = styled.div`
display: flex;
margin-left: 50px; 
margin-top: 20px;
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
        <HeaderTitle/>
    </Block>
    
  )
}

export default Header