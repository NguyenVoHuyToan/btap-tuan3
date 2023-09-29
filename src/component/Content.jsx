import React from 'react'
import styled from 'styled-components'

export const NewContent = styled.div`
    width: 50%;
    padding-left: 50px;
`

function Content() {
  return (
    <NewContent>
        <h1>Thanh toán không thể đơn giản hơn</h1>
        <p>Hệ thống ngân hàng Internet hiện đại được tạo ra cho bạn</p>
    </NewContent>
  )
}

export default Content