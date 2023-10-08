import React from 'react'

function RightFooter(props) {
  return (
    <div>
        <h2 className='h2footer'>{props.title}</h2>
        <br/>
        <li><a href='#'>{props.textone}</a></li>
        <br/>
        <li><a href='#'>{props.texttwo}</a></li>
        <br/>
        <li><a href='#'>{props.textthree}</a></li>
        <br/>
        <li><a href='#'>{props.textfour}</a></li>
    </div>
  )
}

export default RightFooter