import "./App.css";
import React, { Component } from "react";
import Header from "./components/header.jsx";
import Music from "./components/music.jsx";
import inf from "./components/inf.jsx";
import SearchBar from "./components/search.jsx";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      albumname: "Bollywood Blooms", 
      searchField:''
    };
    this.handler = this.handler.bind(this);
    this.items = [
      {
        id: 1,
        title: "Agar Tum Saath Ho",
        duration: "5:41",
        artists: "Arijit Singh,Alka Yagnik",
      },
      {
        id: 2,
        title: "Safarnama",
        duration: "4:11",
        artists: "Lucky Ali",
      },
      {
        id: 3,
        title: "Kabira",
        duration: "3:43",
        artists: "Tochi Raina,Rekha Bhardwaj",
      },
      {
        id: 4,
        title: "Udd Gaye",
        duration: "3:00",
        artists: "Ritviz",
      },
      {
        id: 5,
        title: "Journey Song",
        duration: "4:12",
        artists: "Anupam Roy,Shreya Ghoshal",
      },
      {
        id: 6,
        title: "Channa Mereya",
        duration: "4:49",
        artists: "Arijit Singh",
      },
      {
        id: 7,
        title: "Sham",
        duration: "4:44",
        artists: "Amit Trivedi,Nikhil D'Souza",
      },
      {
        id: 8,
        title: "Jaane Kyun",
        duration: "4:38",
        artists: "Vishal-Shekhar",
      },
      {
        id: 9,
        title: "Subhanallah",
        duration: "4:09",
        artists: "Sreeram,Shilpa Rao",
      },
      {
        id: 10,
        title: "Mast Magan",
        duration: "4:40",
        artists: "Arijit Singh,Chinmayi Sripada",
      },
      {
        id: 11,
        title: "Zehnaseeb",
        duration: "3:37",
        artists: "Shekhar Ravjiani,Chinmayi Sripada",
      },
      {
        id: 12,
        title: "Chaandaniya",
        duration: "4:07",
        artists: "K.Mohan,Yashita Sharma",
      },
    ];
  }

  handler(item) {
    this.setState({
      albumname: item.title,
    });
  }

  render() {
    const filteredSongs= this.items.filter(item => (
      item.title.toLowerCase().includes(this.state.searchField.toLowerCase())
    ))
    return (
      <div className="bod">
        <Header 
          songname={this.state.albumname}
        />
<SearchBar
  handleChange={(e) => this.setState(
    {searchField:e.target.value}
  )}
/>
   
    <inf/>
     {
       this.state.searchField.length> 0 ? filteredSongs.length ? filteredSongs.map((item) => (
          <Music
            id={item.id}
            key={item.id}
            title={item.title}
            duration={item.duration}
            artists={item.artists}
            onClick={() => this.handler(item)}
            cname={item.title===this.state.albumname ? "muss": "sicc"}
          />
        )) : null : this.items.map((item) => (
          <Music
            id={item.id}
            key={item.id}
            title={item.title}
            duration={item.duration}
            artists={item.artists}
            onClick={() => this.handler(item)}
            cname={item.title===this.state.albumname ? "muss": "sicc"}
          />
        )) 
        
       
        }
      </div>
    );
  }
}

export default App;
