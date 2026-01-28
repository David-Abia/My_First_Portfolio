'use strict'

const ul = document.querySelector('.people');
const people = ['David is a cool dude', 'Victor is cool as well', 
    'Array is a javascript concept' , 'Vitory is a fine girl', 
    'You can either be a victor or a victim'];

    let html = ``;
    people.forEach(each => {
        html += `<li style="color:red; font-size: 20px; font-type:arial;"> ${each} <li>`
    });

    ul.innerHTML = html

    const david = (callback => {
        let value = 50
        callback(value);
    });

    david(function(value){
        console.log(value)
    }) 