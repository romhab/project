function modal() {
 
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
    const modalTimerId = setInterval(openModal, 5000);          //modal timer тимчасово ((((OFF)))
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
    window.addEventListener('scroll', shovModalByScroll);  //поява модал коли доскролив до кінця вікна (((OFF)))
    
}

module.exports = modal;