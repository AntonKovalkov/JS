/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => { //Событие срабатывает тогда, когда DOM структура будет загружена

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    //1
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    
   
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
  

    const makeChanges = () => {
        genre.textContent = "ДРАМА";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    
    
    //4  
    const sortArr = (arr) => {
        arr.sort();
    };
    
    
    // for (let i = 0; i < movieDB.movies.length; i++) {
    //     const li = document.createElement('li');
    //     li.classList.add('promo__interactive-item');
    //     li.textContent = `${i + 1}. ${movieDB.movies[i]}`;
    //     interaciveList.append(li);
    // }

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => { //Удаление элементов по корзине
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); //Удаление из массива с индексом i 1 элемент
                createMovieList(films, parent);
            });
        });
    }

    
    
    
    /*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий. */
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //Страница не будет перезагружаться

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) { // Проверка на пустую строку
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любиый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset(); //Очитска формы
    });
    

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});