import React, { Component } from 'react'
import logo from '../Album logo.jpg'
// import fav from '../fav logo-01.png'
import play from '../Play-icon.jpeg'

// This is a class component
export default class Header extends Component {
    render() {
        return (
            <div className="line">
            <div className="header-row">

                <div className="col-lg-3 img">
                <img src={logo} className="logo"></img>
                </div>
                <div className="col-lg-9" id="temp">

                    <div className="album">
                        Album
                    </div>
                    <div className="album-line2">
                        by  {/*<h1>PAST LIVES</h1> */} PAST LIVES
                    </div>
                    <div className="artist">
                        Against The Current (2018)
                    </div>

                    <div className='name'>
                    {this.props.songname}<br></br>

                    </div>
                    <div className="duration">
                     {this.props.songduration}

                        <button className="ok">
                            {/* <img className="fav" src={fav}></img> */}
                           🤍
                        </button>

                        <button className="meh">
                            <img className="play" src={play}></img>
                        </button>

                    </div>

                </div>
                </div>

                <hr></hr>
              

            </div>
           
        )
        
    }
}
