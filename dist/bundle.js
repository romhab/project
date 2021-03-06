/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

        


    function calcTotal() {//?????????????????? ???? ?????????????????? ????????
        if (!statt || !rist || !vaga || !age || !activn) {
            result.textContent = '_____';
            return;
        }

        if (statt === 'ledi') {//Math.round-??????????????????????
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

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    //////////////// FORMS  ///////////////////

    const forms = document.querySelectorAll('form');

    const message = {
        loading: '????????????????',
        success: '????????',
        failure: '??????????????'
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

            const statusMes = document.createElement('div'); //???????????????? ????????
            statusMes.classList.add('status'); // ???????????????? ????????
            statusMes.textContent = message.loading; //?????????????????? ?????????? 

            form.append(statusMes); //???????????????????? ???? ?????????? ????????????






            const formData = new FormData(form); // ?????????? ???????? ????????


            const object = {}; // ?????????????? ???????? ???????? ?? ?????????????? ??????????
            formData.forEach((value, key) => {
                object[key] = value;
            });

            //?????????????????????? ?? ????????????


            PostDAta('http://localhost:3000/requests', JSON.stringify(object))
                .then(data => {
                    console.log(data);
                    JSON.stringify(object);
                    statusMes.textContent = message.success;

                    setTimeout(() => { //????????????
                        statusMes.remove(); //?????????????? ????????????
                    }, 2000); //?????????? 2 ??????
                })
                .catch(() => {
                    statusMes.textContent = message.failure;
                })
                .finally(() => {
                    form.reset(); //???????????????? ??????????
                });


        });

    }


    function shovThanksModal() {
        const prevModalDialog = document.querySelector('.modal__dialog');
    }


 
    fetch('db.json')
        .then((data) => data.json())
        .then((res) => console.log(res));

}
 
    
module.exports = form;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
 
    //modal                                 [???????????? ???? ???????? ??????????????????]
    const modalTriger = document.querySelectorAll('[data-modal]'), //???????????? ??????????????
        modal = document.querySelector('.modal'), //???????????????? ??????????
        modalCloseBtn = document.querySelector('[data-close]'); // ?????????????? ??????????????



    //OPEN MODAL
    function openModal() { //?????????? ???????????????????? ??????????
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; // ?????????????? ?????????? ???? ????????????????
        clearInterval(modalTimerId); // ???????????????? ????????????
    }

    modalTriger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    //CLOSE MODAL
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; //?????????????????? ??????????
    }

    //                                      ???????????????? ??-??????  (?????????? ??????????)
    modalCloseBtn.addEventListener('click', closeModal);



    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(); //  ???????????? ??-?????? (?????????? ??????????)
        }
    });



    //  ?????????? ???? ??????????????????????
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') { //???????? ?????????? ???????? === ????????????
            closeModal();
        }
    });


    //  ???????????? ???????????????????? ??????????
    //const modalTimerId = setInterval(openModal, 5000);          //modal timer ?????????????????? ((((OFF)))
    //    ??????????          ????????????     (??-??????,     ?????????? 5 ??????.)

    //  
    function shovModalByScroll() {
        //????????????????????, ?????????????????? ???????????????????? ???????????????? ????????
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(); //??????????. ??????. ??????????
            window.removeEventListener('scroll', shovModalByScroll); //????????.??????????????.
        }
    }
    //                                    ?????????????????? ???? ??-??????
    //window.addEventListener('scroll', shovModalByScroll);  //?????????? ?????????? ???????? ?????????????????? ???? ?????????? ?????????? (((OFF)))
    
}

module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    
    //slider
    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.offer__slider-inner');

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent =  `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent =  slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2); 
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            console.log('if');
        } else {
            offset -= +width.slice(0, width.length - 2);
            console.log('else');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });

}

module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    
    //btns
    const tabs = document.querySelectorAll('.tabheader__item'), //????????????
        tabContent = document.querySelectorAll('.tabcontent'), //?????????? ????????????????
        tabsParent = document.querySelector('.tabheader__items'); //???????????????????????? ???? ????????????



    //??????????
    function hideTabsContent() {
        tabContent.forEach(element => { //?????????? ??????????????
            element.style.display = 'none'; //????????????
        });

        tabs.forEach(element => { //?? ????????????
            element.classList.remove('tabheader__item_active'); //?????????????? ???????? ????????????????????
        });
    }



    //??????????????                              
    function shovTabsContent(i = 0) {          // 'i' ???????????????? ???????? ??????????????????????
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

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    // --- timer --- //

    const deadline = '2021-09-28'; //?????????????????? ??????????

    //1 ???????? ?????????????? ?????? ?????????????????? ???? ???????????????????? ?????????? 
    //???????? ?????????????? ?? ???????? ??????????????   
    //???????????? ???????? ???????????????? ?????????????? ?????? ????????????

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
    
}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {
    const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
        form   = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js"),
        modal  = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
        tabs   = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        timer  = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
    
        calc  ();
        form  ();
        modal ();
        slider();
        tabs  ();
        timer ();        
   
 
    

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map