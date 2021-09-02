 
window.addEventListener('DOMContentLoaded', () => {

            //btns
    const   tabs = document.querySelectorAll('.tabheader__item'), //кнопки
            tabContent = document.querySelectorAll('.tabcontent'), //текст контенет
            tabsParent = document.querySelector('.tabheader__items'); //батьківський ел кнопок



    //ховає
    function hideTabsContent() { 
        tabContent.forEach(element => {     //текст контент
            element.style.display = 'none'; //скрити
        });

        tabs.forEach(element => {                               //в кнопці
            element.classList.remove('tabheader__item_active'); //видаляє клас активності
        });
    }


              
    //показує                              
    function shovTabsContent(i = 0) { // 'i'  аргумент який передається
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

    const dedline ='2021-05-11'; //відправна точка

    //1 етап різниця між дедлайном та теперішнім часом 
    //фція приймає в себе дедлайн   
    //задача фції получити різницю між датами

    function getTimerRemaining(endtime) { 
        
    }
/////////////////////////////////////////////////////////////////////////////////////////

    //modal                                 [доступ до дата атрибутів]
    const modalTriger = document.querySelectorAll('[data-modal]'), //кнопки виклику
          modal = document.querySelector('.modal'),//модальне вікно
          modalCloseBtn = document.querySelector('[data-close]');// хрестик закрити



    //OPEN MODAL
    function openModal() { //поява модального вікна
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';// забирає скрол на сторінці
            clearInterval(modalTimerId);  // очистити таймер
    }      

    modalTriger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    //CLOSE MODAL
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';//відновити скрол
    }
    
    //                                      передача ф-ції  (після кліку)
    modalCloseBtn.addEventListener('click', closeModal);      
    


    modal.addEventListener('click', (e) => {
        if (e.target===modal) {
            closeModal();//  виклик ф-ції (після умови)
        }
    });



//  подія на клавіатурні
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape') { //якшо подія коду === ескейп
            closeModal();
        }
    });


//  таймер модального вікна
    const modalTimerId = setInterval(openModal, 55000);
    //    назва          запуск     (ф-ції,     через 3 сек.)

//  
    function shovModalByScroll() {
      //Перевірити, прокрутив користувач сторінку вниз
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();//зап. мод. вікно
            window.removeEventListener('scroll', shovModalByScroll);//відм.прослух.
        }
    }
//                                    посилання на ф-цію
    window.addEventListener('scroll', shovModalByScroll);


//////////////// FORMS  //////////////////////////////////////

const forms = document.querySelectorAll('form');

const message = {
    loading: 'загрузка',
    success: 'усіх',
    failure: 'помилка'
};

forms.forEach(element => {
    PostDAta(element);
});


function PostDAta(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMes = document.createElement('div'); //створити блок
        statusMes.classList.add('status');               // добавити клас
        statusMes.textContent = message.loading;         //присвоїти текст 
        form.append(statusMes);                          //прикріпити до форми меседж



        const r = new XMLHttpRequest();
        r.open('POST', 'server.php');

        r.setRequestHeader('Content-type', 'application/json');
        const formData = new FormData(form);  // обєкт ФОРМ ДАТА


        const object = {};                    // перегон ФОРМ ДАТА в простий обєкт
        formData.forEach((value, key) => {
            object[key] = value;
        });

        //конвертація в джесон
        const json = JSON.stringify(object);

        r.send(json);//відправка даних

        r.addEventListener('load', () => {
            if (r.status === 200) {
                console.log(r.response);
                statusMes.textContent = message.success;
                form.reset();                //очистити форму
                setTimeout(() => {           //таймер
                    statusMes.remove();      //забрати меседж
                }, 2000);                    //через 2 сек
            }
            else {
                statusMes.textContent = message.failure;
            }
        });
    });

}

  
function shovThanksModal() {
    const prevModalDialog = document.querySelector('.modal__dialog');
}



fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    name: 'ivan',  
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  














});