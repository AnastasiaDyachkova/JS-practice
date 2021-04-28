document.getElementById('api').addEventListener('click', buttonShowDogFunc);


function buttonShowDogFunc(){
    let url = "https://dog.ceo/api/breeds/image/random";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url); //открываем передачу, указывая метод get и откуда
    xhr.responseType = 'json';
    xhr.send(); //отправка запроса на сервер
    xhr.onload = function() { // что будет происходить при событии загрузка
        addImgDog(xhr.response.message);
    };
}

function addImgDog(src){
    let divImgDog = document.getElementById('div-img-dog');
    //Удаляю предыдущую фотку собаки
    while (divImgDog.firstChild) {
        divImgDog.removeChild( divImgDog.firstChild);
    }

    let imgDog = document.createElement('img');
    imgDog.src =  src;
    imgDog.setAttribute("class", "divImgDog");
    divImgDog.appendChild(imgDog); 
}