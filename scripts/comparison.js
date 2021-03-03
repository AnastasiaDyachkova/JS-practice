function comparison(){
	let str1 = document.getElementById('str1').value;
	let str2 = document.getElementById('str2').value;
	let x;
	if((str1.length==0)||(str2.length==0)){
		x='Вы не заполнили все поля'
	}
	else if(str1.length!=str2.length) x=false;
	else x=true;
	document.getElementById('x').innerHTML = 'Ответ: '+x;
}


