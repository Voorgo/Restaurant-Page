
function contactPage() {
    document.querySelector('body').style.backgroundColor = 'rgb(153, 93, 73)';
    document.querySelector('body').style.removeProperty('background-image');
    let navBar = document.querySelector('.navBar');
    let footer = document.querySelector('footer');
    const contactP = document.createElement('div');
    contactP.classList.add('contact-page');
    const firstInp = document.createElement('input');
    firstInp.setAttribute('type', 'text');
    const secondInp = document.createElement('input');
    secondInp.setAttribute('type', 'email');
    const thirdInp = document.createElement('textarea');
    const btn = document.createElement('button');
    const h2 = document.createElement('h2');

    btn.innerText = 'Submit';
    firstInp.setAttribute('placeholder', 'Your name');
    secondInp.setAttribute('placeholder', 'Your email');
    thirdInp.setAttribute('placeholder', 'Message');
    h2.innerText = 'CONTACT US';

    let menu = document.querySelector('.menu-page');
    let homeP = document.querySelector('.center-title');
    
    if(container.contains(homeP)) {
        container.removeChild(homeP);
    }

    if(container.contains(menu)) {
        container.removeChild(menu);
    }   

    contactP.append(h2, firstInp, secondInp, thirdInp, btn);
    container.append(navBar, contactP, footer);

    btn.addEventListener('click', () => {
        firstInp.value = '';
        secondInp.value = '';
        thirdInp.value = '';
        alert('Thank you for the feeback');
    });

    let links = document.querySelectorAll('a');
    if(window.innerWidth < 500) links.forEach(link => link.style.color = 'black')

}

export {contactPage};