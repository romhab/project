function calc() {

    //--------CALC--------//

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

        


    function calcTotal() {//перевіряє чи заповнені поля
        if (!statt || !rist || !vaga || !age || !activn) {
            result.textContent = '_____';
            return;
        }

        if (statt === 'ledi') {//Math.round-заокруглити
            result.textContent = Math.round((447.6 + (9.2 * vaga) + (3.1 * rist) - (4.3 * age)) * activn);
        }
        else {
            result.textContent = Math.round((88.36 + (13.4 * vaga) + (4.8 * rist) - (5.7 * age)) * activn);

        }
    }

    calcTotal();


    //local storage
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('statt')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-activn') === localStorage.getItem('activn')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


    //Static
    function getStaticInformation(parentSelector, activeClass) {
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
                    el.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);
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

}


module.exports = calc;