'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data){
    const html = ` <article class="country">
    <img class="country__img" src="${data[1].flag}" />
    <div class="country__data">
      <h3 class="country__name">${data[1].name}</h3>
      <h4 class="country__region">${data[1].region}</h4>
      <p class="country__row"><span>👫</span>${+data[1].population} people</p>
      <p class="country__row"><span>🗣️</span>${data[1].languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data[1].currencies[0].name}</p>
    </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const request1 = new XMLHttpRequest();
request1.open('GET', 'https://restcountries.com/v2/name/india');
request1.send();

request1.addEventListener('load', function(){
    const data = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

});

