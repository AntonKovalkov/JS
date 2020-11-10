"use strict";

// touchstart - при косании элемента
//touchmove - движение при касании, срабатывает при каждом изменении
//touchend - срабатывает после того как палец отпустили
//touchenter - срабатывает когда ыедем по экрану и заходим на элемент на котором есть это событие
//touchleave - обратное
//toucjcancel - срабатывает когда точка прикосновения отменилась


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });

    //touches - список всех пальцев которые сейчас на кэране
    //targetTouches - список всех пальцев которые задействованы на цели
    //changedTaches - список пальцев которые участвуют в текущем событии
});
