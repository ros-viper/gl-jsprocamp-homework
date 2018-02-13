import lesson6 from '../src/lesson6';
import fetch from 'isomorphic-fetch';

const {
  getClimate,
  getProfile,
  getPilots
} = lesson6.task;

describe('Async basics', () => {

  describe('getClimate', () => {
    it('should return climate for the planet from API', () => {      
      return expect(getClimate('Tatooine')).resolves.toBe('arid');
    });
  });

  describe('getProfile', () => {
    const obj = {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      "species": [
        "https://swapi.co/api/species/1/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
      ],
      "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.co/api/people/1/"
    };
    it('should return object with info on character', () => {      
      return expect(getProfile('Luke')).resolves.toEqual(obj);
    });
  });

  describe('getPilots', () => {
    const arr = ["Chewbacca", "Han Solo", "Lando Calrissian", "Nien Nunb"];
    it('should return array with pilots names of the star ship', () => {      
      return expect(getPilots('Millennium')).resolves.toEqual(arr);
    });
  });
});  
