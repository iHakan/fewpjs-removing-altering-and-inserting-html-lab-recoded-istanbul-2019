// Write your code here!
document.querySelector('main#main').remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.appendChild('newHeader');
newHeader.innerHTML = '<h1>YOUR-NAME is the champion</h1>';