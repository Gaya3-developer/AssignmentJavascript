var counter = document.querySelector('.counter');
var followers = document.querySelector('.followers');
let count = 1;

setInterval(() => {
    if(count <= 1000){
    counter.textContent = count++;}
}, .5);


setTimeout(() => {
    followers.textContent = 'Followers on Instagram.';
}, 6000);