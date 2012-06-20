/**
Copyright &copy; <!--(C) --> 2012 Willson Smith - http://willsonsmith.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

  var canvas,
    context,
  
  
    buttonDown = false;
  
    window.addEventListener('load', initApp, false);
  
    function initApp() {
  	/*setTimeout(function() { window.scrollTo(0, 1); }, 10);*/ //hide the address bar of the browser.
  	canvas = document.getElementById('drawBox');
  
  	setCanvasDimension();
  	initializeEvents();
  	
  	context = canvas.getContext('2d'); //get the 2D drawing context of the canvas
  	context.lineWidth = 3;
  	context.lineCap = 'round';
  }
  
  
  /*window.onresize = function(event){
    	setCanvasDimension();
    	
  }*/
  
  function setCanvasDimension() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  function initializeEvents() {
    canvas.addEventListener('touchstart', startPaint, false);
    canvas.addEventListener('touchmove', continuePaint, false);
    canvas.addEventListener('touchend', stopPaint, false);
  
  }
  
  function toInteger(number){
	  
	  return Math.round(
		  Number(number)
	  
  );//Possible alteration as to not create antialiasing
	  
  }
  
  $$('body').on('doubleTap', function(){
	  
	  clearCanvas();
	  console.log('double');
	  
  })
  
  $$('#bannercont').on('tap', function(){
	  
	  var thebox = document.getElementById('bannercont');
	  
	  if (thebox != null){
	  	thebox.style.display = "none";
	  }
	  console.log('single');
	  
  })
  
  function clearCanvas() {
    context.clearRect(0,0,canvas.width,canvas.height);
  }
  
  function startPaint(evt) {
	  
    if(!buttonDown)
    {
	    
		/*thebox = document.getElementById('bannercont');

		if (thebox != null){
		    thebox.style.display = "none";
		}*/
	    	  	
  	context.beginPath();
  	context.moveTo(toInteger(evt.touches[0].pageX), toInteger(evt.touches[0].pageY));
  	buttonDown = true;
  	
    }
    evt.preventDefault();
  }
  
  function continuePaint(evt) {
    if(buttonDown)
    {
  	context.lineTo(toInteger(evt.touches[0].pageX),toInteger(evt.touches[0].pageY));
  	context.stroke();
    }
  }
  
  function stopPaint() {
    buttonDown = false;
  }