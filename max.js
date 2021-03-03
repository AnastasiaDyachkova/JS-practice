function max(){

	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	let c = document.getElementById('c').value;
	let d = document.getElementById('d').value;
	let e = document.getElementById('e').value;

	if((a=='')||(b=='')||(c=='')||(d=='')||(e=='')){
		document.getElementById('error').innerHTML ='Вы заполнили не все поля';	
	}
	else{
		document.getElementById('res1').innerHTML ='Максимальное число: '+ Math.max(a,b,c,d,e);
		document.getElementById('res2').innerHTML ='Минимальное число: '+ Math.min(a,b,c,d,e);
		document.getElementById('error').innerHTML ='';	
	}

	

}

