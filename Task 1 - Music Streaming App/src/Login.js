import React from 'react';
import './Login.css';
import { loginUrl } from './spotify'


function Login() {
    return (
      <div className="login">
        <img
          id="logo"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt=""
        />
        <p></p>
        <a href = { loginUrl }>Login with Spotify </a>
        {/* Spotify Logo */}
        {/* Login with Spotify button */}
      </div>
    );
}

export default Login
