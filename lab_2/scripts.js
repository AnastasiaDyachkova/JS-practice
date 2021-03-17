let res1 = document.getElementById("res1"),
	res2 = document.getElementById("res2"),
	res3 = document.getElementById("res3"),
	res4 = document.getElementById("res4");

const task1 = document.querySelector('#task1'),
task2 = document.querySelector('#task2'),
task3 = document.querySelector('#task3'),
task4 = document.querySelector('#task4');

let arrStr = document.querySelector("#array_of_strings");
let str = document.querySelector("#string");
let symbol = document.querySelector("#symbol");
let str1 = document.querySelector("#str1");
let str2 = document.querySelector("#str2");


function longestLine(){
	let arr = arrStr.value.split(' '); //Создание массива со строками
	let longest = arr.reduce(function(a, b) { 
  		return a.length > b.length ? a : b; //Нахождение самой длинной строки
	});
	res1.innerHTML ="Ответ: " +longest;
}

function frequentSymbol(text){
	
	//Объект, который содержит в себе символы и то, сколько они раз повторяются
    let symbols = {};
    
 	//формирование этого объекта
    for (let char of text) {
        if (symbols.hasOwnProperty(char)) {
            symbols[char]++;
        } else {
            symbols[char] = 1;
        }
    }

    let maxValue = 0;
    let maxChar = '';
 
    for (let char in symbols) {
        if (symbols[char] > maxValue) {
            maxValue = symbols[char];
            maxChar = char;
        }
    }
 
   res2.innerHTML ="Ответ: " + maxChar;
   return maxChar;
}

function replacement(strA, sym){
	if (sym=='') { //Проверка на наличие символа
		res3.innerHTML = "Введите символ"
	}
	else{
		let resStr; 
		resStr = strA.split(frequentSymbol(strA)).join(sym); //в переданной строке самый частый символ заменятся переданным символом
		res3.innerHTML ="Итог: " + resStr;
	}
	
}

function anagram(str1, str2){
	if (str1.trim()==str2.trim()) { res4.innerHTML = "Ответ: false" }
	else {
		if(str1.split('').sort().join('')==str2.split('').sort().join('')){ //строки делают массивами, сотрируют, соединяют и сравнивают между собой
			res4.innerHTML = "Ответ: true";
		}
		else{
			 res4.innerHTML = "Ответ: false"
		}
	}

}


task1.addEventListener('click', () => longestLine());
task2.addEventListener('click', () => frequentSymbol(str.value));
task3.addEventListener('click', () => replacement(str.value, symbol.value));
task4.addEventListener('click', () => anagram(str1.value,str2.value));