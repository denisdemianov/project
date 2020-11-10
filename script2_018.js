/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let nubmerOfFilms;

function start() {
    nubmerOfFilms = +prompt('How many films did you see', '');

    while (nubmerOfFilms == '' || nubmerOfFilms == null || isNaN(nubmerOfFilms)) {
        nubmerOfFilms = +prompt('How many films did you see', '');

    }
}

start();

const personalMovieDB = {
        count : nubmerOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   a = prompt('Last seen film', ''),
                b = prompt('Rate this film', '');
    
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }       
    
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You have seen not many movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are classic movieliker");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are a little bit crazy one, aren`t you?");
    } else {
        console.log("Error");
    }   
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`);
    }
}

writeYourGenres();