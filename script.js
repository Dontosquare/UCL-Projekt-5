

// Joachim Start //
{
let h = document.createElement('h1'); 
let headerText = document.createTextNode('Det her er en header');
h.appendChild(headerText);
document.querySelector('h1').appendChild(h);
}

const main = document.querySelector('main');

let shopBox = "";

for ( let i = 0; i < 10; i++) {
shopBox += '<div>køb</div>';
}

main.innerHTML = shopBox;