
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  var items = [
    {
      id: 1,
      song_name: "Run",
      duration: "4:20",
    },
    {
      id: 2,
      song_name: "Wanted",
      duration: "2:40",
    },
    {
      id: 3,
      song_name: "Didn't I",
      duration: "4:06",
    },
    {
      id:4,
      song_name:"Better Days",
      duration:"4:69",
    },
    {
      id:5,
      song_name:"Rescue Me",
      duration:"2:34",
    },{
      id:6,
      song_name:"Somebody To Love",
      duration:"3:45",
    },{
      id:7,
      song_name:"Human",
      duration:"4:56",
    },{
      id:8,
      song_name:"InterScope",
      duration:"8:42",
    },{
      id:9,
      song_name:"Someone",
      duration:"3:49",
    },{
      id:10,
      song_name:"Bottle",
      duration:"3:50",
    },
  ];

  return (
    <div className="App">
      <Header playlistName="Human" by="One Republic" time="37 mins"/>
      ReactApp
      <Footer/>
    </div>
  );
}

export default App;
