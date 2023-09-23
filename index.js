const bodyElement = document.querySelector('body')
bodyElement.style.backgroundColor = '#e9e9e9';

const newsElement = document.querySelector('.news')
newsElement.style.backgroundColor = 'white';
newsElement.style.maxWidth = '60rem';

const h1Element = document.querySelector('h1')
h1Element.classList.add('news__title')
h1Element.textContent = 'Aktualny novinky'

const zprava1Element = document.getElementById('zprava1')
zprava1Element.classList.add('post--main')

const post__pictureElement = document.querySelector('#zprava3 .post__picture')
post__pictureElement.src = ('images/zprava3-novy.jpg')





// // Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí 
// na bílou a maximální šířku na 60rem.
// // Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. 
// Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
// // Pomocí atributu id vyberte element obsahující první zprávu. 
// Přidejte do jeho atributu class třídu post--main. 
// První zpráva by tak měla mírně změnit svůj styl.
// // Vyberte obrázek v poslední zprávě (tu vyberte podle id) 
// a změnte jeho atribut src na obrázek images/zprava3-novy.jpg.