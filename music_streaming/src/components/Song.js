import { FavoriteBorderOutlined, PlayArrow, Plus } from '@material-ui/icons'
import React from 'react'
import './Song.css';

function Song(props) {
    return (
        <div className = "song_card">
            <div className = "song_icon">
                <img src = "https://i.pinimg.com/originals/33/64/ba/3364ba35fc12b13cab1962eae8b7bdb6.png" width = "64"></img>
            </div>
            <div className="like">
            <FavoriteBorderOutlined/>
            </div>
            <div className ="song_info">
                <p>{props.song_name}</p>
                <p className = "duration">{props.duration}</p>
            </div>
            <div className="play">
                <PlayArrow/>
            </div>
        </div>
    )
}

export default Song
