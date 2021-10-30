var FORMIO_ENDPOINT = 'https://9a0a-176-234-90-157.ngrok.io';
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
                // localStorage.removeItem('');
                console.log(localStorage);
                console.log(Object.keys(localStorage));
                const keys = Object.keys(localStorage).filter(i => i.startsWith('formio'));
                console.log(keys);
                for (var key in keys) {
                    localStorage.removeItem(key);
                }
                console.log(localStorage);
                console.log(Object.keys(localStorage));
                document.location.replace('/formio/login.html')
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