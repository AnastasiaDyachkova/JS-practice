

function testResults(){
	let res = 0;
	

	//1
	if (document.getElementById('q1_1').checked) {
		document.getElementById('q1-1').style.color = '#fd3939f2';
		document.getElementById('q1-2').style.color = '#422828';
    	document.getElementById('q1-3').style.color = '#12e990';
	}
	if (document.getElementById('q1_2').checked) {
		document.getElementById('q1-1').style.color = '#422828';
		document.getElementById('q1-2').style.color = '#fd3939f2';
    	document.getElementById('q1-3').style.color = '#12e990';
	}
	if (document.getElementById('q1_3').checked) {
		res++;
    	document.getElementById('q1-3').style.color = '#12e990';
    	document.getElementById('q1-1').style.color = '#422828';
    	document.getElementById('q1-2').style.color = '#422828';
	}

	//2
	if (document.getElementById('q2_1').checked) {
		document.getElementById('q2-1').style.color = '#fd3939f2';
    	document.getElementById('q2-2').style.color = '#12e990';
    	document.getElementById('q2-3').style.color = '#422828';
	}
	if (document.getElementById('q2_2').checked) {
		res++;
    	document.getElementById('q2-2').style.color = '#12e990';
    	document.getElementById('q2-1').style.color = '#422828';
    	document.getElementById('q2-3').style.color = '#422828';
		
	}
	if (document.getElementById('q2_3').checked) {
		document.getElementById('q2-3').style.color = '#fd3939f2';
    	document.getElementById('q2-2').style.color = '#12e990';
    	document.getElementById('q2-1').style.color = '#422828';
	}

	//3
	if (document.getElementById('q3_1').checked) {
		res++;
		document.getElementById('q3-1').style.color = '#12e990';
		document.getElementById('q3-2').style.color = '#422828';
		document.getElementById('q3-3').style.color = '#422828';
	}
	if (document.getElementById('q3_2').checked) {
		document.getElementById('q3-1').style.color = '#12e990';
    	document.getElementById('q3-2').style.color = '#fd3939f2';
    	document.getElementById('q3-3').style.color = '#422828';
		
	}
	if (document.getElementById('q3_3').checked) {
		document.getElementById('q3-3').style.color = '#fd3939f2';
    	document.getElementById('q3-1').style.color = '#12e990';
    	document.getElementById('q3-2').style.color = '#422828';
	}

	//4
	if (document.getElementById('q4_1').checked) {
		document.getElementById('q4-1').style.color = '#fd3939f2';
    	document.getElementById('q4-3').style.color = '#12e990';
    	document.getElementById('q4-2').style.color = '#422828';
	}
	if (document.getElementById('q4_2').checked) {
		document.getElementById('q4-2').style.color = '#fd3939f2';
    	document.getElementById('q4-3').style.color = '#12e990';
    	document.getElementById('q4-1').style.color = '#422828';
	}
	if (document.getElementById('q4_3').checked) {
		res++;
    	document.getElementById('q4-3').style.color = '#12e990';
    	document.getElementById('q4-2').style.color = '#422828';
    	document.getElementById('q4-1').style.color = '#422828';
	}

	//5
	if (document.getElementById('q5_1').checked) {
		document.getElementById('q5-1').style.color = '#fd3939f2';
    	document.getElementById('q5-3').style.color = '#12e990';
    	document.getElementById('q5-2').style.color = '#422828';
	}
	if (document.getElementById('q5_2').checked) {
		document.getElementById('q5-2').style.color = '#fd3939f2';
    	document.getElementById('q5-3').style.color = '#12e990';
    	document.getElementById('q5-1').style.color = '#422828';
    	}
	if (document.getElementById('q5_3').checked) {
		res++;
    	document.getElementById('q5-3').style.color = '#12e990';
    	document.getElementById('q5-2').style.color = '#422828';
    	document.getElementById('q5-1').style.color = '#422828';
	}

	//6 
	if (document.getElementById('q6_1').checked) {
		document.getElementById('q6-1').style.color = '#fd3939f2';
    	document.getElementById('q6-2').style.color = '#12e990';
    	document.getElementById('q6-3').style.color = '#422828';
	}
	if (document.getElementById('q6_2').checked) {
		res++;
    	document.getElementById('q6-2').style.color = '#12e990';
    	document.getElementById('q6-3').style.color = '#422828';
    	document.getElementById('q6-1').style.color = '#422828';
		
	}
	if (document.getElementById('q6_3').checked) {
		document.getElementById('q6-3').style.color = '#fd3939f2';
    	document.getElementById('q6-2').style.color = '#12e990';
    	document.getElementById('q6-1').style.color = '#422828';
	}

	//7
	if (document.getElementById('q7_1').checked) {
		res++;
		document.getElementById('q7-1').style.color = '#12e990';
		document.getElementById('q7-2').style.color = '#422828';
		document.getElementById('q7-3').style.color = '#422828';
	}
	if (document.getElementById('q7_2').checked) {
		document.getElementById('q7-1').style.color = '#12e990';
    	document.getElementById('q7-2').style.color = '#fd3939f2';
    	document.getElementById('q7-3').style.color = '#422828';
		
	}
	if (document.getElementById('q7_3').checked) {
		document.getElementById('q7-3').style.color = '#fd3939f2';
    	document.getElementById('q7-1').style.color = '#12e990';
    	document.getElementById('q7-2').style.color = '#422828';
	}

	//8
	if (document.getElementById('q8_1').checked) {
		document.getElementById('q8-1').style.color = '#fd3939f2';
    	document.getElementById('q8-2').style.color = '#12e990';
    	document.getElementById('q8-3').style.color = '#422828';
	}
	if (document.getElementById('q8_2').checked) {
		res++;
    	document.getElementById('q8-2').style.color = '#12e990';
    	document.getElementById('q8-3').style.color = '#422828';
    	document.getElementById('q8-1').style.color = '#422828';
		
	}
	if (document.getElementById('q8_3').checked) {
		document.getElementById('q8-3').style.color = '#fd3939f2';
    	document.getElementById('q8-2').style.color = '#12e990';
    	document.getElementById('q8-1').style.color = '#422828';
	}

	//9
	if (document.getElementById('q9_1').checked) {
		document.getElementById('q9-1').style.color = '#fd3939f2';
    	document.getElementById('q9-3').style.color = '#12e990';
    	document.getElementById('q9-2').style.color = '#422828';
	}
	if (document.getElementById('q9_2').checked) {
		document.getElementById('q9-2').style.color = '#fd3939f2';
    	document.getElementById('q9-3').style.color = '#12e990';
    	document.getElementById('q9-1').style.color = '#422828';
	}
	if (document.getElementById('q9_3').checked) {
		res++;
    	document.getElementById('q9-3').style.color = '#12e990';
    	document.getElementById('q9-2').style.color = '#422828';
    	document.getElementById('q9-1').style.color = '#422828';
	}

	//10

	if (document.getElementById('q10_1').checked) {
		res++;
		document.getElementById('q10-1').style.color = '#12e990';
		document.getElementById('q10-2').style.color = '#422828';
		document.getElementById('q10-3').style.color = '#422828';
	}
	if (document.getElementById('q10_2').checked) {
		document.getElementById('q10-1').style.color = '#12e990';
    	document.getElementById('q10-2').style.color = '#fd3939f2';
    	document.getElementById('q10-3').style.color = '#422828';
		
	}
	if (document.getElementById('q10_3').checked) {
		document.getElementById('q10-3').style.color = '#fd3939f2';
    	document.getElementById('q10-1').style.color = '#12e990';
    	document.getElementById('q10-2').style.color = '#422828';
	}

	let testRes = document.getElementById('testRes');



	while(testRes.firstChild){
		testRes.removeChild(testRes.firstChild);
	}
	
	if (res<=3){
		res+='/10 Советуем тебе еще раз внимательно ознакомиться с сайтом, чтобы улучшить свои знания'
	}
	if (res>3 && res<=6) {
		res+='/10 Неплохо, но тебе еще многому стоит научиться'
	}
	if (res>6 && res<=8) {
		res+='/10 Хорошо! Ты знаешь некоторые основы, нужно приложить немного усилий, и у тебя всё получится'
	}
	if (res>8 && res<=10) {
		res+='/10 Так держать! Продолжай изучать JavaScript!'
	}
	document.getElementById('testRes').innerHTML ='Твой результат: ' + res;
}

document.getElementById('calc').addEventListener('click', testResults);
