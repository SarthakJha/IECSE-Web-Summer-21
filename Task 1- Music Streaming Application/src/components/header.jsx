import React, { Component } from 'react'
import logo from '../logo.jpg'
import play from '../play-icon.png'


// This is a class component
export default class Header extends Component {
    render() {
        return (
            <div className="header row">

                <div className="col-lg-3 img">
                <img src={logo} className="logo"></img>
                </div>
                <div className="col-lg-9">

                <div className="album">
                    Album: HOLLYWOOD'S BLEEDINGS
                </div>
                <div className="artist">
                    Post Malone (2019)
                </div>

                <div className='name'>
                {this.props.songname}<br></br>

                </div>
                <div className="right duration">
                {this.props.songduration}

                    <button className="temp">
                        <img className="play" src={play}></img>
                    </button>

                </div>

                </div>
                <hr></hr>

            </div>
        )
    }
}
