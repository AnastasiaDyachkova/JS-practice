function greeting(){
	let name = document.getElementById('name').value;
	if(name==''){
		let res = 'Вы не ввели имя';
		document.getElementById('result').innerHTML = res;
		document.getElementById('client').innerHTML = 'Пользователь';
	}
	else {
		localStorage.setItem('user', name);
		let res = '<b>Привет,  ' + localStorage.getItem('user') + '!</b>';
		document.getElementById('result').innerHTML = res;
		document.getElementById('client').innerHTML = localStorage.getItem('user');
		let form = document.getElementById('form');
		form.remove();

	}
	
}


document.getElementById('client').innerHTML = localStorage.getItem('user');
document.getElementById('ready').addEventListener('click', greeting);






