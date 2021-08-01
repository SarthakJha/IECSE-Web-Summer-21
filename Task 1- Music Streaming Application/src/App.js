import "./App.css";
import React, { Component } from "react";
import Header from "./components/header.jsx";
import Song from "./components/song.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { headersong: "Hollywood's Bleeding", headerduration: "2:36" };
    this.handler = this.handler.bind(this);
    this.items = [
      {
        id: 1,
        title: "Hollywood's Bleeding",
        duration: "2:36",
      },
      {
        id: 2,
        title: "Saint-Tropez",
        duration: "2:30",
      },
      {
        id: 3,
        title: "Enemies (feat DaBaby)",
        duration: "3:16",
      },
      {
        id:4,
        title:"Allergic",
        duration:"2:36",
      },
      {
        id:5,
        title:"A Thousand Bad Times",
        duration:"3:41",
      },{
        id:6,
        title:"Circles",
        duration:"3:35",
      },{
        id:7,
        title:"Die For Me",
        duration:"4:05",
      },{
        id:8,
        title:"On The Road",
        duration:"3:38",
      },{
        id:9,
        title:"Take What You Want",
        duration:"3:49",
      },{
        id:10,
        title:"I'm Gonna Be",
        duration:"3:20",
      },
      {
        id:11,
        title:"Staring At The Sun",
        duration:"2:48",
      },{
        id:12,
        title:"Sunflower: Spiderman, Into The Spiderverse",
        duration:"2:37",
      },{
        id:13,
        title:"Internet",
        duration:"2:03",
      },{
        id:14,
        title:"Goodbyes",
        duration:"2:54",
      },{
        id:15,
        title:"Myself",
        duration:"2:38",
      },{
        id:16,
        title:"I Know",
        duration:"2:21",
      },{
        id:17,
        title:"Wow",
        duration:"2:29",
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
    return (
      <div className="main">
        <Header 
          songname={this.state.headersong}
          songduration={this.state.headerduration}
        />
        <div className="row mid">
          <div className="col-lg-1">
              #
          </div>
          <div className="col-lg-6">
              TITLE
          </div>
          <div className="col-lg-3">
          Duration
          </div>

          <div>

          </div>
        </div>

        {this.items.map((item) => (
          <Song
            id={item.id}
            key={item.id}
            title={item.title}
            duration={item.duration}
            onClick={() => this.handler(item)}
            cname={item.title===this.state.headersong ? "song2": "song1"}
          />
        ))}
      </div>
    );
  }
}

export default App;
