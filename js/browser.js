console.log('Hello World');

function addNumberTolS() {
    const num = Math.ceil(Math.random() * 100);
    console.log( num);
    localStorage.setItem('number', num);
}

function setObjectTolS() {
    const customer = {
        name: 'Afjal',
        product : 'Laptop',
        price: 50000
    };

    const customerJSON = JSON.stringify(customer);
    localStorage.setItem('customer', customerJSON);
}

function getCustomerFromls() {
    const customerJSON = localStorage.getItem('customer');
    const customer = JSON.parse(customerJSON);
    console.log(customer);
}

function getNumberFromls() {
    const num = localStorage.getItem('number');
    console.log(num);
}

function readObjectFromLS() {
    const customerJSON = localStorage.getItem('customer');
    const customer = JSON.parse(customerJSON);
    console.log(customer.name);
}

function clearLocalStorage() {
    localStorage.clear();
    console.log('Local Storage cleared!');
}

