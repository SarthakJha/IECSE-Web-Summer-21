
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Song from './components/Song';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Header playlistName="Human" by="One Republic" time="37 mins" />
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
