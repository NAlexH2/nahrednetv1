import alexharrisphoto from './graphic_assets/me_headshot.png';
import './App.css';


//White space matters inside of the actual code afayk. Tricks to discover later?
//TODO
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome!</h3>
        <img className="my-picture" src={alexharrisphoto}/>
        <p className="General-text">
        I'm a Senior at Portland State University chasing a Computer Science degree.
        If you're here, you've either found me by searching the web, or I've provided the link directly!
        </p>
        <div className='General-text'>
        This website is more of a little fun side project where I'm exploring web page development using
        AWS Amplify and github integration for rapid deployment and changes. All built using React.
        </div>
        <p>Reach me at <a className="Any-link" href="mailto:alex@nah-red.net">alex@nah-red.net</a></p>
      </header>
    </div>
  );
}

export default App;
