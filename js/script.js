window.addEventListener('DOMContentLoaded', () => {

    //btns
    const tabs = document.querySelectorAll('.tabheader__item'), //кнопки
        tabContent = document.querySelectorAll('.tabcontent'), //текст контенет
        tabsParent = document.querySelector('.tabheader__items'); //батьківський ел кнопок



    //ховає
    function hideTabsContent() {
        tabContent.forEach(element => { //текст контент
            element.style.display = 'none'; //скрити
        });

        tabs.forEach(element => { //в кнопці
            element.classList.remove('tabheader__item_active'); //видаляє клас активності
        });
    }



    //показує                              
    function shovTabsContent(i = 0) {          // 'i' аргумент який передається
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }



    hideTabsContent();
    shovTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        console.log('ggg');


        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((el, i) => {
                if (target === el) {
                    hideTabsContent();
                    shovTabsContent(i);
                }

            });
        }
    });
    ////////////////////////////////////////////////////////////////////////////////////////////
    //timer

    const dedline = '2021-05-11'; //відправна точка

    //1 етап різниця між дедлайном та теперішнім часом 
    //фція приймає в себе дедлайн   
    //задача фції получити різницю між датами

    function getTimerRemaining(endtime) {

    }
    /////////////////////////////////////////////////////////////////////////////////////////

    //modal                                 [доступ до дата атрибутів]
    const modalTriger = document.querySelectorAll('[data-modal]'), //кнопки виклику
        modal = document.querySelector('.modal'), //модальне вікно
        modalCloseBtn = document.querySelector('[data-close]'); // хрестик закрити



    //OPEN MODAL
    function openModal() { //поява модального вікна
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; // забирає скрол на сторінці
        clearInterval(modalTimerId); // очистити таймер
    }

    modalTriger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    //CLOSE MODAL
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; //відновити скрол
    }

    //                                      передача ф-ції  (після кліку)
    modalCloseBtn.addEventListener('click', closeModal);



    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(); //  виклик ф-ції (після умови)
        }
    });



    //  подія на клавіатурні
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') { //якшо подія коду === ескейп
            closeModal();
        }
    });


    //  таймер модального вікна
    //const modalTimerId = setInterval(openModal, 5000);-----------------------------------------------------------modal timer
    //    назва          запуск     (ф-ції,     через 5 сек.)

    //  
    function shovModalByScroll() {
        //Перевірити, прокрутив користувач сторінку вниз
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(); //запит. мод. вікно
            window.removeEventListener('scroll', shovModalByScroll); //відм.прослух.
        }
    }
    //                                    посилання на ф-цію
    //window.addEventListener('scroll', shovModalByScroll);


    //////////////// FORMS  //////////////////////////////////////

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'загрузка',
        success: 'усіх',
        failure: 'помилка'
    };

    forms.forEach(element => {
        bindPostDAta(element);
    });

    const PostDAta = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindPostDAta(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMes = document.createElement('div'); //створити блок
            statusMes.classList.add('status'); // добавити клас
            statusMes.textContent = message.loading; //присвоїти текст 

            form.append(statusMes); //прикріпити до форми меседж






            const formData = new FormData(form); // обєкт ФОРМ ДАТА


            const object = {}; // перегон ФОРМ ДАТА в простий обєкт
            formData.forEach((value, key) => {
                object[key] = value;
            });

            //конвертація в джесон


            PostDAta('http://localhost:3000/requests', JSON.stringify(object))
                .then(data => {
                    console.log(data);
                    JSON.stringify(object);
                    statusMes.textContent = message.success;

                    setTimeout(() => { //таймер
                        statusMes.remove(); //забрати меседж
                    }, 2000); //через 2 сек
                })
                .catch(() => {
                    statusMes.textContent = message.failure;
                })
                .finally(() => {
                    form.reset(); //очистити форму
                });


        });

    }


    function shovThanksModal() {
        const prevModalDialog = document.querySelector('.modal__dialog');
    }



    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: 'ivan',  
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    fetch('db.json')
        .then((data) => data.json())
        .then((res) => console.log(res));






//--------CALC--------//
////////////////////////

    const result = document.querySelector('.calculating__result span');

    let statt, rist, vaga, age, activn;

    if (localStorage.getItem('statt')) {
        statt = localStorage.getItem('statt');
    } else {
        statt = 'ledi';
        localStorage.setItem('statt', 'ledi');
    }

    if (localStorage.getItem('activn')) {
        activn = localStorage.getItem('activn');
    } else {
        activn = 1.375;
        localStorage.setItem('activn', 1.375);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
    }


    function calcTotal() {//перевіряє чи заповнені поля
        if (!statt || !rist || !vaga || !age || !activn) {
            result.textContent = '_____';
            return;
        }

        if (statt === 'ledi') {
            result.textContent = Math.round((447.6 + (9.2 * vaga) + (3.1 * rist) - (4.3 * age)) * activn);
        }
        else {
            result.textContent = Math.round((88.36 + (13.4 * vaga) + (4.8 * rist) - (5.7 * age)) * activn);

        }
    }

    calcTotal();
//Static
    function getStaticInformation(parentSelector, acniveClass) {
        const element = document.querySelectorAll(`${parentSelector} div`);

        element.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-activn')) {
                    activn = +e.target.getAttribute('data-activn');
                    localStorage.setItem('activn', +e.target.getAttribute('data-activn'));
                } else {
                    statt = e.target.getAttribute('id');
                    localStorage.setItem('statt', e.target.getAttribute('id'));
                }
            
    
                element.forEach(el => {
                    el.classList.remove(acniveClass);
                });
    
                e.target.classList.add(acniveClass);
                calcTotal();
    
            });
        });

        
    }

    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

//Dinamic
    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

        if (input.value.match(/\D/g)) {
            input.style.border ='2px solid red';
            input.style.color = 'red';
        } else {
            input.style.border = 'none';
            input.style.color = '';
        }

            switch (input.getAttribute('id')) {
                case 'vaga':
                    vaga = +input.value;
                    break;
                case 'rist':
                    rist = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();

        });
    }

    getDinamicInformation('#vaga');
    getDinamicInformation('#rist');
    getDinamicInformation('#age');




//------ slider -------//
/////////////////////////

    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next');
    let slideIvdex = 1; 
    showSlides(slideIvdex);
    
    
    function showSlides(index) {
        //перевірка крайнього положення 
        if (index > slides.length) {//якшо індекс позиції більший ніж  загальна к-сть слайдів 
            slideIvdex = 1;         //вернутись до першого ілайду  
        }

        if (index < 1) { //якшо індекс менше за 1 (0)
            slideIvdex = slides.length; //повернутись до останнього слайду в кінець
            
        }

        slides.forEach(itemt => {
            itemt.style.display = 'none';
        });


    }


    


      














});