import React, { Component } from 'react'
import logo from '../logo.jpg'
import play from '../play.png'


export default class Header extends Component {
    render() {
        return (
            <div className="header row">

                <div className="music2 img">
                <img src={logo} className="logo"></img>
                </div>
                <div className="music4">

            
                <div className="artist">
                   Playlist Made for You
                </div>

                <div className='name'>
                {this.props.songname}<br></br>

                </div>
                <div className="durn">
                {this.props.songduration}

                    <button className="but">
                        <img className="play" src={play}></img>
                    </button>

                </div>

                </div>
                <hr></hr>

            </div>
        )
    }
}
