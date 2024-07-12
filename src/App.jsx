import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';

function App() {

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div className='container'>
      <WeatherApp />
    </div>
  )
}

export default App 
