window.addEventListener('DOMContentLoaded', () => {

    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items'); //Роджителя для tabs


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide'); //css класс
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }


    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }


    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item , i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });





    //Timer
    const deadLine = '2021-11-15';

    function getTimeRmaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()), //Разница между конечной и тек. датой в мс
              days = Math.floor(t / (1000 * 60 * 60 * 24)), //Колличество дней
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(number) {
        if (number >= 0 && number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }


    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock(endTime);

        function updateClock() {
            const t = getTimeRmaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadLine);




       //Создание модального окна

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

 
    function visibilityModal(state) {
        //modal.classList.toggle('show');

        modal.classList.add(state);
        if (state == "hide") {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        } else {
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';//Уберает прокрутку экрана
        }

        clearInterval(modalTimerId);
    }


    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            // modal.classList.add('show');
            // modal.classList.remove('hide');
            visibilityModal('show');
        });
    });


    modalCloseBtn.addEventListener('click', () => {
        visibilityModal('hide');
    });

    //Закрытие окна по клику по экрану
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            visibilityModal('hide');
        }
    });


    //Закрытие по нажатию esc
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            visibilityModal('hide');
        }
    });


    //Вызов модального окна через время
    const modalTimerId = setTimeout(() => {
        visibilityModal('show');
    }, 5000);


    //Если долистали до конца страницы вызываем modal
    
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            visibilityModal('show');
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    
    window.addEventListener('scroll', showModalByScroll);



});