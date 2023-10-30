import React from 'react'

function RightFooter(props) {
  return (
    <div>
        <h2 className='h2footer'>{props.title}</h2>
        <br/>
        <li><a href='https://www.facebook.com/'>{props.textone}</a></li>
        <br/>
        <li><a href='https://www.facebook.com/'>{props.texttwo}</a></li>
        <br/>
        <li><a href='https://www.facebook.com/'>{props.textthree}</a></li>
        <br/>
        <li><a href='https://www.facebook.com/'>{props.textfour}</a></li>
    </div>
  )
}

export default RightFooter