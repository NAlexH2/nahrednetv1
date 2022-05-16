import alexharrisphoto from './graphic_assets/me_headshot.png';
import './App.css';


//White space matters inside of the actual code afayk. Tricks to discover later?
//TODO
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="my-picture" src={alexharrisphoto}/>
        <p>Reach me at <a className="Any-link" href="mailto:alex@nah-red.net">alex@nah-red.net</a></p>
      </header>
    </div>
  );
}

export default App;
