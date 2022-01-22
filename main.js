let cityName = document.getElementById("cityName"),
  temp = document.getElementById("temp"),
  search = document.getElementById("search")
  iconHTML = document.getElementById("icon");

async function api(city_name) {
  let api =
    `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=e07b29a01102b6821d6752110110108a`;
  let fetchData = await fetch(api).then((res) => res.json());

  cityName.innerHTML = `${fetchData.name}, ${fetchData.sys.country}`
  temp.innerHTML = `${fetchData.main.temp} °C`
  
  let iconfromData = `http://openweathermap.org/img/wn/${fetchData.weather[0].icon}@2x.png`

  iconHTML.innerHTML = `
  <img src=${iconfromData} alt="" />
  `
  console.log(fetchData);
}

let xyz = ()=>{
  console.log(search.value)
  api(search.value);
}