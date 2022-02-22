var scrollDown = window.pageYOffset;
window.onscroll = function(){
	var scrollUp = window.pageYOffset;
	if(scrollDown > scrollUp){
		document.getElementById("Meniu").style.top = "0";
	}
	else{
		document.getElementById("Meniu").style.top = "-100px";
	}
	scrollDown = scrollUp;
}
