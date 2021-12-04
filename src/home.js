
function homePage() {
    const nav = document.createElement('nav');
    const logo = document.createElement('h2');
    const navFirstLi = document.createElement('li');
    const navSecondLi = document.createElement('li');
    const navThirdLi = document.createElement('li');
    const navFirstLink = document.createElement('a');
    const navSecondLink = document.createElement('a');
    const navThirdLink = document.createElement('a');
    const navUl = document.createElement('ul');
    const title = document.createElement('h1');
    const subtitle = document.createElement('h2');
    const titleContainer = document.createElement('div');
    const buttonContainer = document.createElement('div');

    document.querySelector('body').style.backgroundImage = 'url(../dist/img/bkgImg.jpg)';
    navFirstLink.setAttribute('href', './index.html');
    navSecondLink.setAttribute('href', '#');
    navThirdLink.setAttribute('href', '#');
    navFirstLink.innerText = 'Home';
    navSecondLink.innerText = 'Menu';
    navThirdLink.innerText = 'Contact';
    buttonContainer.classList.add('button-container');

    navFirstLink.classList.add('link');
    navFirstLink.classList.add('home');
    navSecondLink.classList.add('link');
    navSecondLink.classList.add('menu');
    navThirdLink.classList.add('link');
    navThirdLink.classList.add('contact');

    navFirstLi.append(navFirstLink);
    navSecondLi.append(navSecondLink);
    navThirdLi.append(navThirdLink);
    logo.innerText = 'Japanos'
    nav.classList.add('navBar');
    navUl.classList.add('bar-ul');
    navUl.append(navFirstLi, navSecondLi, navThirdLi);
    nav.append(logo, navUl, buttonContainer);
    
    //center title
    title.innerText = 'Japanos Food';
    subtitle.innerText = 'Online Ordering Available Now';
    titleContainer.classList.add('center-title');
    titleContainer.append(title, subtitle);

    //Adding hamburger menu event
    buttonContainer.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    //footer 
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.innerText = 'Copyright © 2021 Catalin';
    footer.append(p);
    let menuP = document.querySelector('.menu-page');
    if(container.contains(menuP)) {
        container.removeChild(menuP);
    }
    
    container.append(nav, titleContainer, footer);
};

export {homePage}