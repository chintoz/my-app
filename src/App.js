import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="http://photo1419.es/wp-content/uploads/2020/09/photo-1419-blanco-1.png" className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload. Hola me llamo Jacinto.
        </p>        
        <p>
          <p id="Patri">
            Edit <code>src/App.js</code> and save to reload. Hola me llamo Patri. 
          </p>
          <p id="Jacin">
            Edit <code>src/App.js</code> and save to reload. Hola me llamo Jacin.
          </p>
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vete al google
        </a>
      </header>
      
    </div>    
  );
}

export default App;
