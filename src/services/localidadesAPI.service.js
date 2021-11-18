import React from 'react';

const URL_GET_LOCALIDADES =
  'https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&aplanar=true&campos=estandar&max=4142&formato=json';

export default async function localidadesAPI() {
  let apiRequest = await fetch(URL_GET_LOCALIDADES);
  let json = await apiRequest.json();
  let response = json.localidades;
  return response;
}
