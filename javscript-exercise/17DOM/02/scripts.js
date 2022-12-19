const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');

const displayColor = document.querySelector('.center');


red.addEventListener('click', function (){ displayColor.textContent = 'Red';});
cyan.addEventListener('click', function (){ displayColor.innerHTML = 'Cyan';});
violet.addEventListener('click', function (){displayColor.innerHTML = 'Violet';});
orange.addEventListener('click', function () {displayColor.innerHTML = 'Orange';});
pink.addEventListener('click', function () {displayColor.innerHTML = 'Pink';});

