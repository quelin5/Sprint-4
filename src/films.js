const movies = require('./data.js');

// Exercise 1: Get the array of all directors. - FUNCIONA
function getAllDirectors(movies) {
  const directors = movies.map(function (pelicula) {
    return pelicula.director;
  });
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, directorPeli) {
  const peliculasDelDirector = movies.filter(pelicula => pelicula.director == directorPeli);
  return peliculasDelDirector; //retorna un ARRAY de PELIS de DETERMINADO DIRECTOR!
  //console.log("Array de pelis de ese director ", peliculas);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, directorPeli) {
  const peliculas = getMoviesFromDirector(movies, directorPeli);
  //console.log("Array de pelis de ese director ", peliculas);

  let total = 0;
  peliculas.forEach(peli => total += peli.score);
  total = total / peliculas.length;
  total.toFixed(2)
  return total;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const array = movies.map(function (pelicula) {
    return pelicula.title;
  })
  array.sort(); //metodo que ordena alfabeticamente
  return array.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const arrayOrdenadoXYear = movies;
  const nuevoArray = movies.slice(); //se hace copia de la matriz (array)
  nuevoArray.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1); //ordenar cronologicamente o, si coinciden, alfabeticamente. 
  return nuevoArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const newArray = movies.filter(peliculas => peliculas.genre == genre && peliculas.score != 0);

  let mediaPelis = 0;
  newArray.forEach(peli => mediaPelis += (peli.score) / newArray.length);
  return parseFloat(mediaPelis.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let duracionPeli = 0;
  let nuevoarray = movies.map(function (pelicula) {
    duracionPeli = pelicula.duration + '';
    let parts = duracionPeli.split('h'); //'2h'
    parts[1] == '' ? duracionPeli = parseInt(parts[0]) * 60 : duracionPeli = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    pelicula.duration = duracionPeli;
    return pelicula;
  })
  console.log(nuevoarray);
} 
hoursToMinutes(movies);

// Exercise 8: Get the best film of a year 
function bestFilmOfYear(movies, year) {
  const newArray = movies.filter(pelicula => pelicula.year == year); //devuelve pelis de ese año
  let newPeli = newArray[0];
  newArray.forEach((peliculas) => (peliculas.score > newPeli.score) ? newPeli = peliculas : null); //da la nota. 
  console.log(newPeli);
}
bestFilmOfYear(movies, 2000);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
