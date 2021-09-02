function form() {
    //////////////// FORMS  ///////////////////

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


 
    fetch('db.json')
        .then((data) => data.json())
        .then((res) => console.log(res));

}
 
    
module.exports = form;