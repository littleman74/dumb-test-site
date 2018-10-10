let divBoard = document.getElementById("emojiboarddiv");
let items = divBoard.children;


var mousePosition;
var div;
var isDown = false;

var offset = [0,0];




for (let i = 0; i< items.length; i++){
	
	let item = items[i];
	console.log('loading')
	
	
	item.addEventListener('mousedown', function(e) {
		isDown = true;
		offset = [
			item.offsetLeft - e.clientX,
			item.offsetTop - e.clientY
		];
	}, true);

	document.addEventListener('mouseup', function() {
		isDown = false;
	}, true);

	document.addEventListener('mousemove', function(event) {
		event.preventDefault();
		if (isDown) {
			mousePosition = {
		
				x : event.clientX,
				y : event.clientY
		
			};
			item.style.left = (mousePosition.x + offset[0]) + 'px';
			item.style.top  = (mousePosition.y + offset[1]) +'px';
		}
	}, true);

	
	
}