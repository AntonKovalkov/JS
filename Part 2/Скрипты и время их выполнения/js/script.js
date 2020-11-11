"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    let timerId,
        i = 0;

    // btn.addEventListener('click', () => {
    //     //timerId = setTimeout(logger, 500); //Срабатывает один раз
    //     timerId = setInterval(logger, 500); //Повторяется каждый определенный промежуток времени
    //     //setInterval не будет ждать выполнения ф-ии а сразу запустит ее еще раз, если в-ие logger долгое, то проблемы
    //     //Для этого надо использовать рекурсивный setTimeout
    // });
    

    

    // function logger () {
    //     if (i == 3) {
    //         clearInterval(timerId); //Остановка таймера
    //     }
    //     console.log('text');
    //     i++;
    // }

    //Рекурсивный setTimeout
    // let id = setTimeout(function log() {
    //     console.log('Hello');
    //     id = setTimeout(log, 500);
    // }, 500);


    function myAnimation() {
        const element = document.querySelector('.box');
        let position = 0;
        const id = setInterval(frame, 10);
        
        
        function frame() {
            if (position == 300) {
                clearInterval(id);
            } else {
                position += 1;
                element.style.top = position + 'px';
                element.style.left = position + 'px';
            }
        }
    }

    btn.addEventListener('click', myAnimation);
    
}); 