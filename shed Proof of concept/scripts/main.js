let divBoard = document.getElementById("emojiboarddiv");
let items = divBoard.children;

let isMouseDown= null; 

function onMouseDown(e,item){
	isMouseDown = item;
	console.log('clicked')
}
function onMouseMove(e,item){
	e.preventDefault();
	item.style.left = e.clientX;
	item.style.top = e.clientY;
	console.log('dragging');
}
function onMouseUp(e,item){
	isMouseDown = null;
	console.log('finished');
}

function mouseClick(e,item){
	
}

for (let i = 0; i< items.length; i++){
	
	let item = items[i];
	
	item.addEventListener('mousedown',function(e)
	{	
		console.log('new start');
		console.log();
	});
	
	
	item.addEventListener('mousemove',function(){
		console.log('dragging');
	});
	
	/*item.addEventListener('mouseup',(e) => {
	onMouseUp(e,item)}); */
	
	
}