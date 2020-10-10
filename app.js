fetch("http://api.openweathermap.org/data/2.5/weather?q=KHARKIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(response => response.json())
.then(data => {
    console.log(data)
    let name = document.querySelector(".name")
    let img = document.querySelector(".icon")
    let temp = document.querySelector(".temp")
    let pressure = document.querySelector(".pressure")
    let description = document.querySelector(".description")
    let humidity = document.querySelector(".humidity")
    let speed = document.querySelector(".speed")
    let deg = document.querySelector(".deg")
    

    name.innerHTML = data.name;
    img.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    temp.innerHTML = data.main.temp.toFixed(0)  + " С°";
    pressure.innerHTML = "Pressure: " + data.main.pressure + " hPa";
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = "Humidity: " + data.main.humidity + " %";
    speed.innerHTML = "Wind: " + data.wind.speed + " km/h";
    deg.innerHTML = "Deg: " + data.wind.deg + " °";
})