
var acc = document.getElementsByClassName("section-services__item");
for (i=0; i< acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("section-services__item--active");
		
	})
	
}