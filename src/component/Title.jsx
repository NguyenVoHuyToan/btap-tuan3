import React from 'react'
import styled from 'styled-components'

export const Block = styled.div`
   display: flex;
   justify-content: center; 
   margin: 50px;
`
export const BlockTitle = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    color: black;
    /* height: 350px; */
    border: 1px solid black;
    border-radius: 10px;
    margin-top: -100px;
    
`
 export const FirstBox =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;
    border-right: 1px solid black;
 `;
export const SecondBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;
    border-right: 1px solid black;
    
`
export const ThirdBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;
    border-right: 1px solid black;
    
`
export const FourBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;
    
`
function Title() {
  return (
    <Block>
        <BlockTitle>
            <FirstBox>
                <img src="https://cdn.pixabay.com/photo/2021/04/16/10/19/piggy-bank-6183186_1280.png" width={80}></img>
                <h2>Tiết Kiệm</h2>
                <p className='ptitle'>Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.</p>
                <a className='atitle' href='#'> Xem thêm</a>
            </FirstBox>
            <SecondBox>
                <img src='https://tschem.com.vn/wp-content/uploads/2021/10/icon-Check-300x300.png' width={80}></img>
                <h2>Chất Lượng</h2>
                <p className='ptitle'>Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi.</p>
                <a href='#' className='atitle'>Xem thêm</a>
            </SecondBox>
            <ThirdBox>
                <img src='https://png.pngtree.com/png-vector/20190420/ourlarge/pngtree-vector-wallet-icon-png-image_967392.jpg' width={80}></img>
                <h2>Nhanh Chóng</h2>
                <p className='ptitle'>Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận.</p>
                <a href='#' className='atitle'>Xem thêm</a>
            </ThirdBox>
            <FourBox>
                <img src='https://hebo.vn/library/module_new/chinh-sach-bao-mat_s3071.png' width={80}></img>
                <h2>Bảo Mật</h2>
                <p className='ptitle'>Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp.</p>
                <a href='#' className='atitle'>Xem thêm</a>
            </FourBox>
        </BlockTitle>
    </Block>
  )
}

export default Title