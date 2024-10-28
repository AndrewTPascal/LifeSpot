let userData = new Map();
function writeUserData() {
    //alert('dfdg');
    let sesDate = new Date();
    userData.set('name', prompt("Введите ваше имя"));
    userData.set('comment', prompt("Введите текст"));
    userData.set('date', sesDate.toLocaleString());
}

const addComment = () => {
    //for (let i of userData) { console.log(i) };
    let elem = document.getElementsByClassName('input-container')[0];
    console.log(elem.innerHTML);
    elem.innerHTML += '<p><b>' + userData.get('name') + ' ' + userData.get('date') + '</b></p>';
    elem.innerHTML += '<p>' + userData.get('comment') + '</p>';
}