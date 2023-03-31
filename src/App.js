import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">frogtool</h1>
      </header>
      <form>
        <input type="text" placeholder="Flight Number" />
        <input type="date" min={new Date().toISOString().split("T")[0]} />
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
