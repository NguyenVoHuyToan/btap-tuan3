import React from 'react'

function LeftFooter(props) {
  return (
    <div>
        <img className='img-footer' src={props.image} alt='#'/>
        <p className='pfooter'>{props.paragrap}</p>
    </div>
  )
}

export default LeftFooter