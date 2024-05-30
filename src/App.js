

import './App.css';
import Province from './components/Province';
import { WeatherProvider } from './context/weatherApi';

function App() {
  return (
  <div>
    <WeatherProvider>
      <Province />
  </WeatherProvider>
    
  </div>
     
    
  );
}

export default App;
