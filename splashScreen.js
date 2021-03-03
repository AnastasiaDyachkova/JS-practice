

document.getElementById('splash_screen').addEventListener('click', splash_screen);

function splash_screen(){
	let divInvisibleBlock = document.getElementById('picture');

	while ( divInvisibleBlock.firstChild) {
    	divInvisibleBlock.removeChild( divInvisibleBlock.firstChild);
  	}
  	document.getElementById("picture").style.display = "flex";
  	disableScrolling();

  let pName = document.createElement('p');
  pName.textContent = localStorage.getItem('user');
  pName.setAttribute("class", "p-name-user-invisible-block");
  divInvisibleBlock.appendChild(pName); 

  
  let d = new Date(); 
  let pDate = document.createElement('p');
  pDate.textContent = "Сегодня " + formatDate(d);
  pDate.setAttribute("class", "p-name-user-invisible-block");
  divInvisibleBlock.appendChild(pDate); 
}


function visibilityFunction() {
  document.getElementById("picture").style.display = "none";
  enableScrolling();
}


function enableScrolling(){
  window.onscroll=function(){};
}


function disableScrolling(){
  let x=window.scrollX;
  let y=window.scrollY;
  window.onscroll=function(){
    window.scrollTo(x, y);
  };
}


function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
