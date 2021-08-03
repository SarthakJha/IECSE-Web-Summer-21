import React, { Component } from "react";
import './App.css';
import Header from "../src/Components/header.jsx"
import Body from "../src/Components/body.jsx"
import Songs from "../src/Components/Songs"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      headersong: "Strangers Again", 
      headerduration: "3:42",
      searchField:''
    };
    this.handler = this.handler.bind(this);
    this.items = [
      {
        id: 1,
        title: "Strangers Again",
        duration: "3:42",
      },
      {
        id: 2,
        title: "The Fuss",
        duration: "2:50",
      },
      {
        id: 3,
        title: "I Like The Way",
        duration: "3:23",
      },
      {
        id:4,
        title:"Personal",
        duration:"3:24",
      },
      {
        id:5,
        title:"Voices",
        duration:"3:24",
      },{
        id:6,
        title:"Scream",
        duration:"3:00",
      },{
        id:7,
        title:"Almost Forgot",
        duration:"3:28",
      },{
        id:8,
        title:"P.A.T.T.",
        duration:"2:33",
      },{
        id:9,
        title:"Friendly Reminder",
        duration:"3:09",
      },{
        id:10,
        title:"Come Alive",
        duration:"3:24",
      },
      {
        id:11,
        title:"Sweet Surrender",
        duration:"3:32",
      },
    ];
  }

  handler(item) {
    this.setState({
      headersong: item.title,
      headerduration: item.duration,
    });
  }

  render() {
    const filteredSongs= this.items.filter(item => (
      item.title.toLowerCase().includes(this.state.searchField.toLowerCase())
    ))
    return (
      <div className="prime">
        <Header 
          songname={this.state.headersong}
          songduration={this.state.headerduration}
        />
        
    <Body/>
     {
       this.state.searchField.length> 0 ? filteredSongs.length ? filteredSongs.map((item) => (
          <Songs
            id={item.id}
            key={item.id}
            title={item.title}
            duration={item.duration}
            onClick={() => this.handler(item)}
            cname={item.title===this.state.headersong ? "song2": "song1"}
          />
        )) : null : this.items.map((item) => (
          <Songs
            id={item.id}
            key={item.id}
            title={item.title}
            duration={item.duration}
            onClick={() => this.handler(item)}
            cname={item.title===this.state.headersong ? "song2": "song1"}
          />
        )) 
        
       
        }
      </div>
    );
  }
}


export default App;
