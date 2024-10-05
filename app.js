const apiKey = 'e47e9d4464c612cf8f43d9d8a7d29ea6';

document.querySelector('#weather-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    
    const location = document.querySelector('#location').value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        if (data.cod ===200 ){
            const myname = document.querySelector('#name');
            const tempElement = document.querySelector('#temp');
            const descElement = document.querySelector('#description');
            const humidityElement = document.querySelector('#humidity');
            const pressureElement = document.querySelector('#pressure');

            const name =  data.name;          
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;

            myname.textContent = ` ${name} `;            
            tempElement.textContent = `Temperature: ${temperature} °C`;
            descElement.textContent = `Description: ${description}`;
            humidityElement.textContent = `Humidity: ${humidity}%`;
            pressureElement.textContent = `Pressure: ${pressure}pa`;
           
        } else{
            alert('Location not found. Please try again');
        }
    })
    .catch(error => console.error('Error fetching weather data:', error));
});
