//tap to zoom, based on how high on the screen you tap.
//meant for a THREEjs camera in phone VR.
//Vi Hart, eleVR.com

var rightTaps = 0; //to count number of taps on right side

document.body.addEventListener( 'click', function(event) { // on click:
	var tapY = event.clientY/window.innerHeight; //get Y position proportional to height
	var tapX = event.clientX/window.innerWidth; //get X position proportional

	if (tapX < .5){ // change zoom if tapping on left side
		camera.position.z = (tapY * 40) - 3.5; //move camera position to zoom place
	} else {
		rightTaps++;
	}
});

//that was shorter and easier than I expected...