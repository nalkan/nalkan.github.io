var FORMIO_ENDPOINT = 'https://9a0a-176-234-90-157.ngrok.io';
function loadForm(formId) {
    Formio.createForm(document.getElementById('formio'), FORMIO_ENDPOINT + '/form/' + formId).then(function (form) {
        form.on('componentError', function (err) {
            /** if (err.component.key === 'myselect' && err.message === 'Unauthorized') {
                const select = form.getComponent('myselect');
                select.updateItems();
            }**/
            console.log(err);
        });
    }).catch(e => {
        console.log('Global error');
        console.log(e);
    });
}