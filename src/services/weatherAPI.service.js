import React from 'react';

const URL_WEATHER_API =
  'https://api.weatherapi.com/v1/current.json?key=24ec1432144544c881e11829211411&lang=es&q=';

const adicional = '&days=5&alerts=yes';
export default async function weatherAPI(lat, lon) {
  let apiRequest = await fetch(`${URL_WEATHER_API}${lat}, ${lon}`);
  let response = await apiRequest.json();
  return response;
}
