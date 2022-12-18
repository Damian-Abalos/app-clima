import './assests/css/App.css';
import Card from './components/Card';
import Form from './components/Form';
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WeatherPanel/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
