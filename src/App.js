import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <form>
    <div className="search">
     

        <input type ="text" placeholder='Search a song of your choice' />
         <button type="submit" className="btn"> 
         <img src="https://e7.pngegg.com/pngimages/342/516/png-clipart-computer-icons-search-icon-zooming-user-interface-computer-icons.png"/>
         </button>

    </div>
    <button class ='feedback'><b>Give Feedback</b></button>
  </form>
    </div>
  );
}

export default App;
