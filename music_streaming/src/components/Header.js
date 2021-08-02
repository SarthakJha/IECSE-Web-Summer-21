import React from 'react'
import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <div className="header__left">
               <img src = "https://i.pinimg.com/originals/33/64/ba/3364ba35fc12b13cab1962eae8b7bdb6.png" width = "300"></img>
            </div>
            <div className="header_albumInfo">
                <div className="album_Name">
                    <p>ALBUM</p>
                    <h1>{props.playlistName}</h1>
                    <h4>{props.by}</h4>
                    <h9>{props.time}</h9>
                    <p> </p>
                    <div><button className="button">Play</button></div>
                </div>
            </div>
        </div>
    );
}

export default Header
