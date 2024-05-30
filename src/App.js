import './App.css';
import Province from './components/Province';
import { WeatherProvider } from './context/weatherApi';

// Define the main App component
function App() {
  return (
    <div>
      {/* Wrap the Province component with WeatherProvider to provide context data */}
      <WeatherProvider>
        <Province />
      </WeatherProvider>
    </div>
  );
}

export default App;
