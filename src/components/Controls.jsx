import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
  return (
    <div className='control'>
        <button 
        onClick={() => props.skipSong(false)}
        className='control_skipBtn'>
            <FontAwesomeIcon icon = {faBackward} />
        </button>
        <button 
        onClick={()=>props.setIsPlaying(!props.isPlaying)}
        className='control_PlayButton'>
            <FontAwesomeIcon icon = {props.isPlaying? faPause : faPlay} />
        </button>
        <button 
        onClick={()=>props.skipSong()}
        className='control_skipBtn'>
            <FontAwesomeIcon icon = {faForward} />
        </button>
    </div>
  )
}

export default Controls