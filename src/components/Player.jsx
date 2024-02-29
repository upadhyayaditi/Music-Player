import React from 'react'
import Details from './Details'
import Controls from './Controls'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function Player(props) {

    const audioE1 = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=>{
        if(isPlaying){
            audioE1.current.play()
        }else{
            audioE1.current.pause()
        }
    })

    const skipSong = (forwards = true) => {
        if(forwards){
            props.setCurrentSongIndex(() => {
                let temp  = props.currentSongIndex
                temp++

                if(temp > props.songs.length - 1){
                    temp = 0
                }
                return temp;
            });
        }else{
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex
                temp--
                if(temp < 0){
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    };

  return (
    <div className = "player">
        <h4>
            Playing Now
        </h4>
        <Details
        song = {props.songs[props.currentSongIndex]}
        />
        <Controls
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
        skipSong = {skipSong}
        />
        <audio 
        ref={audioE1}
        className='player_audio'
        src={props.songs[props.currentSongIndex].src}
        controls
        >

        </audio>

       
    </div>
  )
}

export default Player