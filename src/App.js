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
        <div className="General-text">
        I'm a Senior at Portland State University chasing a Computer Science degree.<br></br>
        If you're here, you've either found me by searching the web, or I've provided the link directly!
        </div>
        <h3>Welcome!</h3>
      </header>
    </div>
  );
}

export default App;
