import React from 'react';

const URL_WEATHER_API =
  'https://api.openweathermap.org/data/2.5/weather?lat=';

const Api_Key = 'ce227df6b43e305164717cc436374152';

const adicional = '&days=5&alerts=yes';
export default async function weatherAPI(lat, lon) {
  let apiRequest = await fetch(`${URL_WEATHER_API}${lat}&lon=${lon}&appid=${Api_Key}&lang=es`);
  let response = await apiRequest.json();
  return response;
}
