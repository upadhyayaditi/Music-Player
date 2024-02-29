import React from 'react'

function Details(props) {
  return (
    <div className='details'>
        <div className='details_img'>
            <img src={props.song.img_src}
             alt="" />
        </div>
        <h3 className='details_title'>
            {props.song.title}
        </h3>
        <p className='details_artist'>
        {props.song.artist}
        </p>
    </div>
  )
}

export default Details