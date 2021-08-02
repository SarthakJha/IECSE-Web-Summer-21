import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PLaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";


function Footer() {
    return (
      <div className="footer">
            <div className="footer__left">
                <img src='' alt='' />
                <div className='footerSongInfo'>
                    <h4>Yeah!</h4>
                    <p>Usher</p>

                </div>
                
        </div>
            <div className="footer__center">
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green'/>
        </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PLaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item>
                        <Slider/>
                    </Grid>
                </Grid>
                
        </div>
      </div>
    );
}

export default Footer
