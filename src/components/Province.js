import React from 'react'
import WeatherApi from '../context/weatherApi';
import { useContext} from 'react';
import '../App.css';
import DayOfWeek from '../components/day';
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Province() {

  
    const {weatherData,city,setCity,minMaxTemperatures}=useContext
    (WeatherApi)

localStorage.setItem('city',city)
    const handleChangeSelect=(e)=>{
        
        setCity(e.target.value)
        
    }

    const handleChange = (event) => {
       setCity(event.target.value)
      };
  return (
    <div className='container'>
{weatherData && (
         <div>
         
         <div style={{display:"flex", justifyContent:"space-between",
         alignItems:'center'}}>
            <FormControl style={{margin:"0"}}  sx={{ minWidth: 120 }}>
        <InputLabel id="şehir">şehir</InputLabel>
        <Select
           labelId="demo-simple-select-standard-label"
           id="demo-simple-select-standard"
          value={city}
          onChange={handleChange}
          autoWidth
          label="şehir"
        >
          <MenuItem value="adana">Adana</MenuItem>
          <MenuItem value="afyon">Afyon</MenuItem>
          <MenuItem value="ağrı">Ağrı</MenuItem>
          <MenuItem value="amasya">Amasya</MenuItem>
          <MenuItem value="antalya">Antalya</MenuItem>
          <MenuItem value="artvin">Artvin</MenuItem>
          <MenuItem value="aydın">Aydın</MenuItem>
          <MenuItem value="balıkesir">Balıkesir</MenuItem>
          <MenuItem value="bilecik">Bilecik</MenuItem>
          <MenuItem value="bingöl">Bingöl</MenuItem>
        </Select>
      </FormControl>

      <h2 style={{marginLeft:"30px"}}><span style={{marginRight:"10px"}}>{city.toUpperCase()}</span>|  <span style={{marginLeft:"10px"}}>{minMaxTemperatures[0].temp}°C</span></h2>
      
         </div>
          <div className='items'>
          {
            minMaxTemperatures.map((a,i)=>(
            <div key={i} className={`item a${i}`}> 
                    <h2 style={{marginBottom:0}}>
                        {DayOfWeek(a.date)}  
                    </h2>
                    {
                        
                       (a.weather==='Rain' && <div className='imgCenter'><p>Yağmurlu</p><img src="https://cdn-icons-png.flaticon.com/128/1163/1163657.png"/></div>)     
                    }
                    {
                        (a.weather==='Clear' && <div className='imgCenter'><p>Açık</p><img src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png"/></div>)    
                    }
                    {
                        (a.weather==='Clouds' && <div className='imgCenter'><p>Bulutlu</p><img src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png"/></div>)    
                    }
                    {
                        (a.weather==='Snow' && <div className='imgCenter'><p>Karlı</p><img src="https://cdn-icons-png.flaticon.com/128/2315/2315309.png"/></div>)    
                    }
                    {
                        (a.weather==='Mist' && <div className='imgCenter'><p>Sisli</p><img src="https://cdn-icons-png.flaticon.com/128/2930/2930095.png"/></div>)    
                    }
                    {
                        (a.weather==='Thunderstorm' && <div className='imgCenter'><p>Fırtınalı</p><img src="https://cdn-icons-png.flaticon.com/128/1779/1779927.png"/></div>)    
                    }
                    {
                        (a.weather==='Drizzle' && <div className='imgCenter'><p>Çiseleyen</p><img src="https://cdn-icons-png.flaticon.com/128/3075/3075858.png"/></div>)    
                    }
                    {
                        (a.weather==='Fog' && <div className='imgCenter'><p>Sis</p><img src="https://cdn-icons-png.flaticon.com/128/7774/7774309.png"/></div>)    
                    }
                    {
                        (a.weather==='Haze' && <div className='imgCenter'><p>Puslu</p><img src="https://cdn-icons-png.flaticon.com/128/1779/1779807.png"/></div>)    
                    }
                    {
                        (a.weather==='Smoke' && <div className='imgCenter'><p>Dumanlı</p><img src="https://cdn-icons-png.flaticon.com/128/4414/4414055.png"/></div>)    
                    }
                    {
                        (a.weather==='Dust' && <div className='imgCenter'><p>Tozlu</p><img src="https://cdn-icons-png.flaticon.com/128/1726/1726045.png"/></div>)    
                    }
                    {
                        (a.weather==='Sand' && <div className='imgCenter'><p>Kumlu</p><img src="https://cdn-icons-png.flaticon.com/128/4490/4490891.png"/></div>)    
                    }
                    {
                        (a.weather==='Squall' && <div className='imgCenter'><p>Fırtına</p><img src="https://cdn-icons-png.flaticon.com/128/6320/6320057.png"/></div>)    
                    }
                    {
                        (a.weather==='Tornado' && <div className='imgCenter'><p>Tornado</p><img src="https://cdn-icons-png.flaticon.com/128/1779/1779931.png"/></div>)    
                    }
                    <h3 style={{ textAlign:'center' }}>
                       <span>{Math.round(a.maxTemp)}°</span> <span style={{ opacity:'0.4'}}>{Math.round(a.minTemp)}°</span>
                    </h3>
                    
            </div>))
          }
          </div>
       </div>
      )}
    </div>
  )
}

export default Province