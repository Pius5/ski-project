import logo from './ski.svg';
import vid from './skivid.mp4'
import './App.css';
import Inputter from './Inputter';
import Table from './Table';


function App() {
  return (
      <div className="App">
          <div id="cat">
              <h1><a href="https://www.ski.com/">THE SKI PERFECT CONSORTIUM</a></h1>
              <p id="bus">
                  Get hold of some of the most exclusive European resorts with great sauna and skiing amenities.
              </p>
              <Inputter />
              <video src={vid} height="300px" width="600px" controls autoplay draggable="true"></video>
              
              <div id="rat"><Table /></div>
          </div>
          
          <p id="boy">Prepare yourself for some of the most premier luxuries.
              No time to waste. Brace yourself for some untouched
              gems that Nature has to offer. Today is the day. Relax
              and come enjoy in the mountains of Scandinavia.</p>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="cow">
          
        </p>
        
          </header>
          <aside id="dog">Why are you missing out on some of the most exclusive facilities.</aside>
          <footer><button id="btn">GO SKIING!!!</button></footer>
          
          
    </div>
  );
}

export default App;
