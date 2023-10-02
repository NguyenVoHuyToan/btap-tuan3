import React from 'react';
import styled from 'styled-components';


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
    height: 100%;
    margin-top: -250px;
    border-radius: 10px;
    border: 1px solid whitesmoke;
    
`
 export const TitleBox =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;
    padding-top: 30px;
    transition: padding 1s;
    border-right: 1px solid black;
 `;



function Title() {
  return (
    <Block>
        <BlockTitle>
            <div className='titlebox'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAABAlBMVEX/iYX/////7TP6yQC8UFD6xwD/i4f/h4P/hID/gHz/gn65TU36xQD/7zX/jIj/f3v/+vn6zAD/6Of/29r/pKH/9/f/kY3/8vL/y8n/xsT/7ezyfnv/sK3/1tX/7zv/mJT/trT/nJnicW//qab+9+H/vrz/0tD/hYrEV1a5SFL//ff956b6zBrndXK4R1PZaWf+8sz83oH97sD/+uv71VP84In+9Nb93zj72Wj+5TH845b81yX7vSm/VUz956T96K77zzT72GP70kb+6UT/xLH9ol78skT/ipH7vyX8tjj8r0j9qlL+kXf+mW3+plvWY2nVgzrcjjfLcELkoijgmS7EYkkvUfNnAAAN5UlEQVR4nOWdCXfbuBHHKcviZZnUfdrWFcnHyrFjJ2srysbJZtMm7bZNk833/yolQR0ACQIDEpRB9f/e7kssOcJPA2AGgyGgFXagq/vbu6en9++f7m7vr3bxgYS0rD/gxdPjh2K5tFa5+OHj21+z/lBC2SLevqqWS8WwSqXi493urJkh4v2beSnKt8YsPr7I7qMJZYb44pFiPwKy/Ho3HTYjxPvHeANilK93YclsEN9yLLhR+VUmn08oC8QXcyCgb8jibQYtIJQB4i9wQGTIN/KbQEg+4qMYoWfI37N1ILIRrz7EECLHH/PS/F5yKwhJRryf0xCK8+XywddyOS9SQbOcWeUi3tNM9LA4O97qbPFAiQhKGTJKRbwK27BUXPp4B4Q8zIfonJtdX5WK+CFiwLMQ3oZyEYHMbM6RifiRbHVpGQOIIM8eQoy/S2wJIYmIb4k2l+aLeMAAkjRkKatARx7ir2WwCdeQpCHLd9LaQkgeIjHVlB64gD7jguys2QxHaYhvSsKEPiPxvTzKagwhWYj3BCFnGMbZsZxJSC4L8WMCG0YZP0hqDSFJiPhcU1rCCUNzTiYzjiTE15gp5mcChB7jMmMzykF8gVmi9EmI0BPexzMYjXIQX20RRQbiyoz4cHwtpT2E5CAm76aIEXOpZflLDimId2mMSJqx9FZGgwhJQfyYyoikGecyGkRIBuJVMZURQ2aU3lNlIN5iDUxixAN8Ui39IqFFhGQgYqsoIa+PmRHzjdIDVRmIW7+frJ+G/IaEFhGSgYj1MmG3v9LZFrEsO4sjAfF+G5/OkxmRmFOlBzgSEG9TD0ViMJae0jeJkATEpw1i0qFIDMaS7D0OCYhvJSPKTlNJQNymNOCr/YiwKfVj+iYRkouYdEL1tEWUnVCVgPhq/xGldNT/A0TM98teFauC+Enp6eb9/juNOxnRzTbVKH3dLwHxV8kBnOxcqgTEq20YnnRFTIThssvGZCymsOYlnW/wxZSEFhGSgYhlp5Ku+rH4TXpCXAYiVi6VcMGID0Xpm8UyELF0f8KeivVT6bONnDzqtqMm66nHSwxR+laxFMRXKbOMZ9h3JH9TQwribTmVGfEtRulpDVnbNljCPsGCCjciu6ShUmm22+2ar167WYE1Tg7ieywNKmxGPE9MnU979c50OBm0HM0wTNtayzT01mQ6a+8G8QrfQhWMxYk0cXTv7XRkW7ZpmoahReUju63aLhCJkpTSJzFGvJuGJ5uuYdPQQpw7QcTNKLYBh2+8hY3YMUweny+rvgtEsgBuCWfEXWKotqjesiGAmmZ2d4KIu3+/AC4JYbGEbWc0Jy63i64Rh7tBvCsnYAwRYovhjg3qoztFJKtRS3N+IePB8QFZrrlNvfUGwD66046Kb4cjSK7vCNcxFv+oBz6ud2JB+yiSxfYaEktub8kWl+YHLMjjgyX5/urnc9t1JsPhQAzQE7tdMgun35NG8UZkLOTxwSL05urfzv3WGp6TFwS02f1UHmJzNvn712qI0YeMUno/ilS/V9+dC5JtpHNaJgex3Rm5XhhyHmb0nPlycXCMPcfg/3GxjDyokYLQ5cRvUhBnI2vVu87fRRg9U86Xi8XqQZTFYrksRh+3qX5JCqi5HV7zUiPWTiwsjKTYMcAsl8tz7z/6Y1MpbGhNuS1MiTgbWKSLPv8HlZGp6tfkvZRPmAqxOTWj64Dzz6KM1X8mt+EM0MzkiM0hPcY6/7MsAlkt/ispoanxZppUiM2hFRtEinTW6lctKaE7gWU2EiJ2TVaUfP7nFxhktZzYhIZ5CmxrIsRTnbcMOP8M6K3V0r+Tj8JGE9raBIi9gcX6cN2T1h//59uXKouyWi3/d9zXdMd7t7AMi+sN0yBOWUtV3XH61zcXR54uX37/UYqh9H784/vlpfeui5txXxjTbPUEGiyKWGvF9lHfetc3h167D1e6vPz+o1ytEpz+X8s/vh29vAze438bF545BTDNhlCTBRGncQsdXXf6yHqHhC4vX/789te7MiLzWcvv/vr28/Lyknyb92seJpDSECMUQ2zHLsZ1w+c7pMrD9JB++/nz52+rP1Pld9q+A2EEZsGTINZjl3LOTRyfkI6Obvh2FDWiCOLUjftU/UYGIIK84dvRFJhNxRAnjIyRLEKPsc+3o3WSCWIzfibV9Ot4xCOqWGYETDmmBo1sBBDb1F2TNeKY0maEcuG5vevrft/QvF/3/9fv96/HNzcXh3GkIESh4AaIWGPmjCJWXLl0z6c7eqDNW5Ecx9F81KiTgSJqhgtZR8ERa7zE7RGO57s4FJgxG+uT+oHexSHBCRmLgayGxC3UOjMm1bCeinybSDzmW7Q/9kOitRFBnhHJNEDLRQhijUfo+cVxMPTGInEYhqkHkRHIL2KCdVY+IreXomZ60em14SRYNKx+X3e06/G1BrchksvesAEitoE7RDpn7IH+AeF/wZ6kR6w4ovn33crmh3MeYpNV8zBQm9CbdLh29BA77qgbt8Q8gW9kPpdsXjjnITb80g6HOgF3+ZPp88vmpIs9RIRh0wIigLtQQS47YtUKdd8pGCPKa5XnbjtUNrOCSitM/eFG3S5vqD8QAxktNuLInzNp2+WdfHRTX8zhqBWQu7Wjr7TzQ8iuaNAQCW0ojlT3iLhYXVVDsw2lOGcmUvny/GLUNGgdNNtEMj6VfBHGeL0AEU2odqQWMAdhDSkzNsjRJv6QiziWnDh9XG5cEKqhWcUM5whyNdcEik0hay30cuin3FSGioorwAnW2eECpBwaMd6MwavOHhgx1v8HL4YQc2lEz4z01bEWpEuIn+VwOg1kUVccwXRDIubOJ65Fr6DWBug13Gk0VTWizk3SRZwfQmxEXH9HTSPqen984xc/MCCpW4/aECHic5GSSTfdGa828g7HDEjagkPrhsPwnor9VDcuNns7RxdaLCPNb6wWU1gM21Wynx7iu1eHsYw0vxEsiXEDq9hP9QtiH/LoItaMlAlHK6AIzt3MN83YooXnU3SPdhzHSOmpWuAFtxk4FVf7TnTDPA6RMqdqhVPEtAnhTtTrp3o/UhUQu5lMGYxeXIMQN+v+1i4bDxOlXCK+p5o0RNRT1ymstoL9lFK5FL+dbEd2jrV11G0Hnbied0RNb1d8Ndvt5gaxgGI4zUQ/UdErCnVUv8zBl2lZ9qC2RqwhP2EMFJ1thKYbQgbKdaBl1ASZDoU4LQURRZwGKcNZI1YCLnu4ml5VU6SnsvopIX+GCRbD9SCksSeK7tXAA7jIb24qNqaB9RSca5B0aBgekVXfFKWwqk0VkK7BFlMRGSfbuhvVGfXr9ZL4WqgCycFKi07UHIYb6Q4/sUGR1cZybx3wcQjPJH56iiK7jqcX2yPFDZlEZpfMoM4UXGeklDkMlfkpmZtKJWMSQlTU9afRKFysqWDmJqVaYUTFJ9UEcsKIOd13YyqEmNtdKYZCiIru2aRSCDG326exiozF5t5ZcRCp8FdxSyONjIhfDCpw90iR6EbNRGoaRWLUgqIJquQKrzR8NfZrMNqnUUQVd99SyKpFESv7Nd/YTcpjYZO96qkO7cm3nBb50WVMqA/3CT4nqbTMLhVRxQ24pLJqVMTcVfczZMY8hTrcGzP61Q1UxP1JUvlVGvRnifdm7e8XU9ERlS1JFRR6FizmifA9WVKhCpUYxNw8gMoWqgmLe65/L4Jxt85C3IcEhxvULsYi5j4VZ6zPv40/gGKa565qmFZj/SQc44wNJauM4mW6rru6TMQ1G9h5EwzEfO012s0CuhXGF/lAKuuklFwcP7ES43Qf5mEwuTm7ANW2JUJU/bCbjZhnbbKP9OnlY1YN6kyTIa7r/9SW0WIel8Y7mCkHU47hsE/24x6vNVS9rxo65+xC/iFpJ2oz8mwIOupO6RpHPiHowEKFGY0W/4RN0LGTytZxmgPA0ZOww0OHajKaI0jjgUfAdlT0j4CT/AQQC3Xhm5EyF/TIYvBxzD3u1QQ7lsW5e0kcsVAZKTWxSj7Id6WpOpOOAbsQRRixUGOdO71LmQB3mAyx0FQDUeyMe8GbGNQodDTB4zABIujg4sxFPSRTFqIaVtTsDG9FUeQ5DhNwSVhCxFMl+qlGe7RdFqIyeznRR9slIapTdMTOuaVAVKjIkXPFa1JElTY54k+ZTIWoVB2HBb6nSABRrTIOzn3LyRAVq+JgnjKdDFG1UlzOFfZJEFWrbwQvN+CIu2u8aTNufNoq9ljbpIig2M0wbYFL6Ol8lj5tg45l59xhL44IKW6wG7P66bBlCV/zjfENA58+AXxTJmzpD08yAghX83ivO7JsYUxjy+epAjEjzG9AEQFPpxLjv9Zt6HBrenhGo0OMLYiLCh+xnAqxB8iGW+Hh35udON7YZIL615XYRqMbCTkhTxnaoKvfgIiAZzfok3ilNhs2WqblowaHQq3JTI/NMluT7in9NgxA9TZsvQFDhATgzEvl27XT7nQ4aYwGg5av0eRk2p3VWVd9tCEdB7LeAO5MAb5R0cstuUrcc0KCIQJ8osACDihILaUF8Buwm/v4HybfiKAVePR+hahAiIAnU5kjMaEA0zjENUpCFEveQsUv+oFkG0GIFe7XGfGJcsQN4yCZONh0w/so8HamqBqc/uPKmm54oYbgLboiYhdSuJCvFhjd1N14SMMVSb+Lqu7EVRkYJogQHIa3J7YXhG1lrmXbjWzG4Ub1k5ZhhmVZ2mAK+2CB3E2tjnSKNEPqdDqnAvu1iVWJqAn/2P8BldZTJpkit1MAAAAASUVORK5CYII=' width={50} color='red'></img>
                <h2>Tiết Kiệm</h2>
                <p className='ptitle'>Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.</p>
                <a href='#' className='atitle'>Xem thêm</a>
            </div>
            <div className='titlebox'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAC0tLR0dHT8/Pzy8vIwMDDS0tIYGBgVFRXm5uYODg7T09Pc3NxgYGD29vanp6dbW1uhoaFdXV2srKwgICBVVVUjIyO6urppaWljY2M9PT0oKChra2uOjo7FxcWbm5sWpOTUAAAEQUlEQVR4nO3Z63bTMBCFUacXoJSGFgqkoUDf/ylZcpybI2lG0misUc/3t6shex3bSsowIIQQQgghhBBCCKEmujpv6bdTodV5N0u/H/kgtB+E9oPQfhDaD0L7QWg/CO0Hof0gtB+E9oPQfhDaz4rw5jYzM8KHVWYQNhOEEEK4fBBCCOHyQQghhMv3cPch0u87+8J4kYX7EH7s4SqNFQN2IYwCexDGgR0ICaB9IQU0LySB1oU00LiQAbQt9AJfZx/gLAu9wLvb+26EXuCni/+nsCv0Au9vh5tehKEFuxEG7sGhG2EY2IkweIkOnQhDD5mxHoSxBbsQRhfsQRhfsAMhsaB9IbWgeWHkHNxnW8gA2hbSl+hgW/jFB7yfAS0LvcD5gpaF5DExZVbIugddVoXcBc0K2QtaFXLOwX0mhSlAk8KES3QwKeQd9IfsCZkH/SFzQv4xMWVNmHYPuowJkxe0Jky9B8c+n9e0MOkcDNaw0LtgMrBhYdYl6qlZYeJBH65VodSCzQrFFmxVKLdgo8KMgz5ci0LJBZsUyhz0h9oTCh30h5oTyl6iQ3tCwWNiSlL49Fjy22PiC4oKX1ar55K3MggfE1Nywq37/TJi+jd6RmLCl90LlBBrLCgn3O5fIZ9YZUEx4fb4ErlE4YP+kIxwffoaecRaQBnh+vxFcg6NSpfoICNcz99Z+oryB/0hAeH3y/eWumK9BSWEW9+7S1uxzjExVSz0LJhKrLlgufDiHtzHv1CrLlgsfAoB+SvWXbBUGFyQv2K1c3BfkTBwD6asWB1YJCSAnBVrX6JDkTB6ifJWrPyQGcsXRh4y3BUVFiwQMhakiBoL5gtZC8aJKgtmC70Pmcc/KUSdBXOF3gUfA59R/USlBTOF/gXdT7x3p4+oBswSehf8tvtZGH+WHjBHGLpEOT+d8gJ/fJWlTaULYwu6GCvW/6h2UrLwJwkgiZoLpgs5FyFB9N+DtYCpQnpBV/SJqrtgqpD1GBmiKyovmCjkLejyrui+aXj/bFhxwTQhd0GXd8XnBYApQuqYOM9L/KsPTBCmLOgi/wKgA+QL0xZ08Yg1HzJjXCH/IXOM8yX5V20gV5i+oIsmVl+QK8xZ0EUR6y/IFOYt6IoTFRbkCb0LsoBxYu2n6C6GMH9BV5ioA2QISxZ0hYhKQFqY+5A55j8XNR4yY5SwdEGXj6i1ICksX9B1eaGqLUgJJRZ0zf+OqrcgIZQCzomvisCo8J8Y8JyouSCx4UYMeEpUvAddUeElMRt4JCoDqWfpRgy4J2oDyfNwIwbcHRrqQPozzQnxrfQfWys/ZMZI4ZFYuKDrWh/I+W6xEVpwoRjCHVFgwWXiCB3RLJD5d5qrN9U3JRpPaDkI7Qeh/SC0H4T2g9B+70649Nup0Ex43V1zYX9BaD8I7Qeh/SC0H4T2g9B+70B41XtLfz1FCCGEEEIIIYQQQrv+A++BSsckMrAZAAAAAElFTkSuQmCC' width={50}></img>
                <h2>Chất Lượng</h2>
                <p className='ptitle'>Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi.</p>
                <a href='#' className='atitle'>Xem thêm</a>
            </div>
            <div className='titlebox'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc-zTH08lR3XxD1Nx6r1xAORDYFeC6NGVqw&usqp=CAU' width={75}></img>
                <h2>Nhanh Chóng</h2>
                <p className='ptitle'>Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận.</p>
                <a href='#' className='atitle'>Xem thêm</a>
            </div>
            <div className='titlebox'>
                <img src='https://noithatnhanviet.vn/img_data/images/icon-bao-mat804755922878.jpg' width={85}></img>
                <h2>Bảo Mật</h2>
                <p className='ptitle'>Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp.</p>
                <a href='#' className='atitle'>Xem thêm</a>
            </div>
        </BlockTitle>
    </Block>
  )
}

export default Title