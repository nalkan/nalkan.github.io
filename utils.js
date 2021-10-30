const FORMIO_ENDPOINT = 'https://9a0a-176-234-90-157.ngrok.io';

const Utils = {
}

function loadForm(formId) {
    try {
        Formio.createForm(document.getElementById('formio'), FORMIO_ENDPOINT + '/form/' + formId).then(function (form) {
            form.on('componentError', function (err) {
                /** if (err.component.key === 'myselect' && err.message === 'Unauthorized') {
                    const select = form.getComponent('myselect');
                    select.updateItems();
                }**/
                console.log(err);
            });
        }).catch(e => {
            if ('Unauthorized' === e) {
                console.log(localStorage);
                const arr = []; // Array to hold the keys
                for (let i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i).substring(0, 5) == 'formio') {
                        arr.push(localStorage.key(i));
                    }
                }
                for (let i = 0; i < arr.length; i++) {
                    localStorage.removeItem(arr[i]);
                }
                console.log(localStorage);
                setTimeout(() => {
                    document.location.replace('/formio/login.html')
                }, 500);
            } else {
                console.log('Global error');
                console.log(e);
                console.log(JSON.stringify(e));
            }
        });
    } catch (ex) {
        console.log('try-catch');
        console.log(ex);
        console.log(JSON.stringify(ex));

    }
}