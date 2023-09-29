import React from 'react'
import styled from 'styled-components'


export const ButtonApp = styled.div`
    border-radius: 5px;
    width: 50%;
    padding-left: 50px;
    color: white;
`
function Button() {
  return (
    <ButtonApp>
        <button className='button'>Bắt đầu</button>
    </ButtonApp>
  )
}

export default Button