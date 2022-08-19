const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezoneEl = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hours12HourFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const am_pm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = hours12HourFormat + ':' + minutes + ' ' + '<span id="am-pm">' + am_pm + '</span>';

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000);