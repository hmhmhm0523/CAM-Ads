import logo from './images/Logo.svg';
import './App.css';
import video1 from './images/Protect.mp4';
import video2 from './images/Safeguard.mp4';
import video3 from './images/SaveMoney.mp4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Simplify elevated access requests with least-privilege controls
        </h2>
        <p>Eliminate shared admin passwords and protect customers from security threats</p>
        <div className="Container">
          <div className="Item">
            <video loop muted src={video1} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}></video>
            <h4>Protect Privileged Credentials</h4>
          </div>
          <div className="Item">
            <video loop muted src={video2} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}></video>
            <h4>Safeguard Your Environment</h4>
            </div>
          <div className="Item">
            <video loop muted src={video3} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}></video>
            <h4>Save Time and Money</h4></div>
        </div>

        <button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find Out More
        </button>
      </header>
    </div>
  );
}

export default App;
