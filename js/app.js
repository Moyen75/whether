const API_KEY = `7f40a73365de0e5959ed25bd76da3c5d`
const loadCity = () => {
    const cityName = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => cityResult(data))
}
const getResult = (id, text) => {
    document.getElementById(id).innerText = text;
}

const cityResult = temperature => {
    getResult('city', temperature.name)
    getResult('temper', temperature.main.temp)
    getResult('condition', temperature.weather[0].main)

    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const icon = document.getElementById('icon');
    icon.setAttribute('src', url)
}