import {homePage} from "./home";
import {menuPage} from "./menu";
import {contactPage} from "./contact";

const container = document.querySelector('#container');


window.addEventListener('load', () => {
    homePage();

    let menuBtn = document.querySelector('.menu');
    let toggle = '';

menuBtn.addEventListener('click', () => {
    if(toggle != 'menu') {
        menuPage();
        toggle = 'menu';
    }
    
})

    document.querySelector('.contact').addEventListener('click', () => {
        if(toggle != 'contact') {
            contactPage();
            toggle = 'contact';
        }
       
    })
});

