// с помощью Fetch API и swapi.co API получить следующие данные

// Климат на любой планете по её имени
// {planetName} – String
function getClimate(planetName) {
  const baseUrl = 'https://swapi.co/api/planets/?search=';
  return fetch(`${baseUrl}${planetName}`)
    .then(res => res.json())
    .then(response => response.results[0].climate)
    .catch(error => { throw new Error(error); });
}

// Получить информацию (Object) о любом персонаже по имени
// {name} – String
function getProfile(name) {
  const baseUrl = 'https://swapi.co/api/people/?search=';
  return fetch(`${baseUrl}${name}`)
    .then(res => res.json())
    .then(response => response.results[0])
    .catch(error => { throw new Error(error); });
}

// Получить список пилотов (имена в виде Array of Strings) космического корабля
// по его названию
// {starshipName} - String
async function getPilots(shipName) {
  const baseUrl = 'https://swapi.co/api/starships/?search=';
  const nameLinks = [];
  try {
    const starShip = await fetch(`${baseUrl}${shipName}`)
      .then(res => res.json())
      .then(response => response.results[0]);
    await starShip.pilots.forEach(link => nameLinks.push(link));
  } catch (ex) {
    throw new Error(ex);
  }
  const promises = nameLinks.map(link => (
    fetch(link)
      .then(res => res.json())
      .then(response => response.name)
  ));
  return Promise.all(promises);
}

export default {
  getClimate,
  getProfile,
  getPilots,
};
