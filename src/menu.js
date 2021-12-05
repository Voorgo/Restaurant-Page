
const items = [{
    title: 'Udon Noodeles with pork',
    qt: '360G',
    price: '21$',
    image: './img/first.png'
},{
    title: 'Yasai Tyahan',
    qt: '250G',
    price: '18$',
    image: './img/second.png'
},
{
    title: 'Salad Kani Furuco',
    qt: '360G',
    price: '18$',
    image: './img/3.png'
},
{
    title: 'Nobe From Smoked Eel',
    qt: '360G',
    price: '12$',
    image: './img/4.png'
},
{
    title: 'Dessert Amitsu-Furutsu',
    qt: '250G',
    price: '4$',
    image: './img/5.png'
},
{
    title: 'Suimono',
    qt: '250G',
    price: '15$',
    image: './img/6.png'
},
{
    title: 'Beef With Mushrooms',
    qt: '360G',
    price: '7$',
    image: './img/7.png'
},
{
    title: 'Kaiso Salad',
    qt: '400G',
    price: '15$',
    image: './img/8.png'
},]



function menuPage() {
    document.querySelector('body').style.backgroundImage = 'url(./img/menu.jpg)';
    document.querySelector('body').style.backgroundColor = 'none'
    let navBar = document.querySelector('.navBar');
    let footer = document.querySelector('footer');
    let home = document.querySelector('.center-title');
    const menu = document.createElement('div');
    menu.classList.add('menu-page');
    const contact = document.querySelector('.contact-page')
    
    if(container.contains(home)) {
        container.removeChild(home);
    }

    if(container.contains(contact)) {
        container.removeChild(contact);
    }

    container.append(navBar, menu, footer);
    createMenu(menu);

    let links = document.querySelectorAll('a');
     links.forEach(link => link.style.color = 'white');

}

function createMenu(menu) {
    items.forEach(item => {
        const cont = document.createElement('div');
        const name = document.createElement('p');
        const price = document.createElement('h2');
        const quantity = document.createElement('p');
        const img = document.createElement('img');
        const imgAndQt = document.createElement('div');

        img.src = item.image;
        name.innerText = item.title;
        price.innerText = item.price;
        quantity.innerText = `... ${item.qt}`;
        imgAndQt.append(img, quantity)
        cont.classList.add('card');
        cont.append(name, imgAndQt, price);
        menu.append(cont);

    })
}

export {menuPage};