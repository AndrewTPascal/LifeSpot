let userData = new Map();

setTimeout(function () {alert("Подпишись на мой инстаграм myinsta.com !")}, 60000);

function checkAge() {
    
    userData.set('age', prompt("Введите ваш возраст"))
 
    if (userData.get('age') >= 18) {
        alert("Приветствуем на LifeSpot " + new Date().toLocaleString());
    }
    else {
        alert("Трансляции предназначены для лиц моложе 18 лет. Вы будете перенаправлены.");
        window.location.href = "http://www.google.com"
    }

}

function handleSession() {
    let sesDate = new Date();
    userData.set('sesDate', sesDate.getHours() + ':' + sesDate.getMinutes() + ' ' + sesDate.getSeconds());
    userData.set('browser', window.navigator.userAgent);
}


let sessionLog = function () {
    for (let i of userData) { console.log(i) };
}


/*Фильтрация содержимого страницы. Код ниже отрабатывает каждый раз при вводе символа в input*/
// Получаем содержимое по тегу. Сохраняем текст пользовательского ввода      
function filtrVideo()
{
    //let txt = document.getElementsByTagName('input')[0].value;
    // Получаем объект по классу видео-контейнер
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        // Получаем содержимое по тегу h3 внутри видеоконтейнера
        let blName = (elements[i].getElementsByTagName('h3')[0].innerHTML);

        // Проверем вмещает ли тект в блоке введённый тект из поля ввода. Делаем блок видимым если есть совпадения, либо наоборот
        // если совпадений нет
        if (blName.toLowerCase().includes(userInput().toLowerCase())) { elements[i].style.display = 'inline-block' }
        else { elements[i].style.display = 'none' };

    }

}
