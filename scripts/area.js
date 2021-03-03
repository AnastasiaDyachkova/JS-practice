
function area(){
	let h = document.getElementById('height').value;
	let l = document.getElementById('length').value;
	let s = 0.5*h*l;
	if(isNaN(s)==true){
		document.getElementById('res').innerHTML = 'Неверные данные, введите числа';
	}
	else if(s<0){
		document.getElementById('res').innerHTML = 'Площадь не может быть отрицательной';
	}
	else if((h=='')||(l=='')){
		document.getElementById('res').innerHTML = 'Вы не заполнили все поля';
	}
	else document.getElementById('res').innerHTML = 'Ответ: '+s;
}

