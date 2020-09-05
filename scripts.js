// Product Constructor
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

// user interface functions
class UI {
    addProductToList(product) {
        const list = document.getElementById('list__output');

        // Create p element
        const paragraph = document.createElement('p');

        // Insert p
        paragraph.innerHTML = `
            <p>Nombre: ${product.name}, Valor: ${product.price}, Cantidad: ${product.quantity}, Total: ${product.price * product.quantity}</p>
        `;

        list.appendChild(paragraph);
    }

    // showAlert(errorMessage, className) {}

    clearFields() {
        document.querySelector('#form__product-name').value = '';
        document.querySelector('#form__product-price').value = '';
        document.querySelector('#form__product-quantity').value = '';
    }
}

// Event Listeners
document.querySelector('.form').addEventListener('submit', function(event) {

    // Get form values
    const productName = document.querySelector('#form__product-name').value;
    const productPrice = document.querySelector('#form__product-price').value;
    const productQuantity = document.querySelector('#form__product-quantity').value;

    // Instantiate product
    const product = new Product(productName, productPrice, productQuantity);

    // Instantiate UI
    const ui = new UI();

    // Validate
    const formError = document.querySelector('#form__error');
    let errorMessage = [];

    if(productName === null || productName === '' || productName.length === 0) {
        errorMessage.push('Ingrese un nombre');
        //ui.showAlert('Ingrese un nombre', 'error');

    } else {
        errorMessage.innerText = '';
        //ui.showAlert();
    }

    if(productPrice === null || productPrice === '' || productPrice.length === 0) {
        errorMessage.push('Ingrese un valor');
        //ui.showAlert('Ingrese un valor', 'error');

    } else if(isNaN(Number(productPrice) ) ) {
        errorMessage.push('El campo Valor Producto debe ser numerico');

    } else {
        errorMessage.innerText = '';
        //ui.showAlert();
    }

    if(productQuantity === null || productQuantity === '' || productQuantity.length === 0) {
        errorMessage.push('Ingrese una cantidad');
        //ui.showAlert('Ingrese una cantidad', 'error');

    } else if(isNaN(Number(productQuantity) ) ) {
        errorMessage.push('El campo Cantidad debe ser numerico');

    } else {
        errorMessage.innerText = '';
        //ui.showAlert();

        // Add product to the list
        ui.addProductToList(product);

        // Clear fields
        ui.clearFields();
    }

    formError.innerText = errorMessage.join('\n');

    event.preventDefault();
});


// Product List
document.querySelector('#list__btn').addEventListener('click', (event) => {

   // Get form values
   const productName = document.querySelector('#form__product-name').value;
   const productPrice = document.querySelector('#form__product-price').value;
   const productQuantity = document.querySelector('#form__product-quantity').value;

   const list = document.getElementById('list__output');

   // Instantiate product
   const product = new Product(productName, productPrice, productQuantity);

   // Instantiate UI
   const ui = new UI();

   ui.addProductToList(product);

   event.preventDefault();

});