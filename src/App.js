import './assets/css/App.css';
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import Form from './components/Form';
import Posicion from './components/Posicion';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;
