
const nubmerOfFilms = +prompt('How many films did you see', '');

const personalMovieDB = {
        count : nubmerOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : false
};

const   a = prompt('Last seen film', ''),
        b = prompt('Rate this film', ''),
        c = prompt('last seen movie', ''),
        d = prompt('Rate this film', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);