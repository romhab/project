function tabs() {
    
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
}

module.exports = tabs;