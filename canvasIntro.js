
function draw(){
	var canvas = document.getElementById('canvasElement');
	var canvasContext = canvas.getContext('2d');
	var xAxis = 0;
	var yAxis = -100;
	var r = 30;
	
	
	//TOP OVAL
	//save the oval to top
	canvasContext.save();	
	//remap top oval position
	canvasContext.translate(canvas.width/2, canvas.height/2);
	//scale to canvas size
	canvasContext.scale(6, 1);
	//clear path to start
	canvasContext.beginPath();
	//create oval
	canvasContext.arc(xAxis, yAxis, r, 0, 2*(Math.PI), false);
	//return path of oval
	canvasContext.restore();
	//color it in
	canvasContext.fillStyle = 'YellowGreen';
	canvasContext.fill();
	//thick grey line
	canvasContext.lineWidth = 7;
	canvasContext.strokeStyle = 'LightGray';
	//DRAWS the oval
	canvasContext.stroke();
	
	//BOTTOM OVAL
	//save the oval to bottom
	canvasContext.save();
	canvasContext.translate(canvas.width/2, canvas.height/2);
	canvasContext.scale(6, 1);
	canvasContext.beginPath();
	canvasContext.arc(xAxis, 100, r, 0, 2*(Math.PI), false);
	canvasContext.restore();
	canvasContext.fillStyle = 'MediumPurple';
	canvasContext.fill();
	canvasContext.lineWidth = 7;
	canvasContext.strokeStyle = 'LightGray';
	canvasContext.stroke();
	
	//CYLINDER LINES
	canvasContext.save();
	canvasContext.beginPath();
	canvasContext.lineWidth =3 ;
	canvasContext.strokeStyle = 'Black';
	//move the point to the left side
	canvasContext.moveTo(65, 150);
	//draw the left side
	canvasContext.lineTo(65, 356);
	//move the point to the right side
	canvasContext.moveTo(435, 150);
	//draw the right side
	canvasContext.lineTo(435, 356);
	//actually draw the lines
	canvasContext.stroke();
	//get the arc
	canvasContext.translate(canvas.width/2, canvas.height/2);
	//size of arc
	canvasContext.scale(6,1);
	canvasContext.beginPath();
	//draw the arc on top along parameters
	canvasContext.arc(xAxis, yAxis+2, r+0.8, 0, Math.PI, false);
	canvasContext.restore();
	canvasContext.lineWidth = 4;
	canvasContext.strokeStyle = 'Black';
	canvasContext.stroke();
	canvasContext.save();
	
	canvasContext.translate(canvas.width/2, canvas.height/2);
	canvasContext.scale(6,1);
	canvasContext.beginPath();
	//draw the are on bottom along parameters
	canvasContext.arc(xAxis, 104, r+0.8, 0, Math.PI, false);
	canvasContext.restore();
	canvasContext.lineWidth = 4;
	canvasContext.strokeStyle = 'Black';
	canvasContext.stroke();
}