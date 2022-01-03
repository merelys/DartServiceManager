
function showHideElement(elementId) {
	
	var bottom = document.getElementById(elementId);
	if (bottom.style.display == '') {
		bottom.style.display = 'flex';

	} else {
		bottom.style.display = '';	
		
	}
	
}