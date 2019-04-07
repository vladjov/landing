// Self invoked function

(function() {

	// Selecting elements
	let sliderImages = document.querySelectorAll(".slide"),
		arrowLeft = document.getElementById("arrowLeft"),
		arrowRight = document.getElementById("arrowRight"),
		current = 0;

	// Clearing all images
	function reset() {
		for(let i = 0; i < sliderImages.length; i++) {
			sliderImages[i].style.display = "none";
		}
	}

	// Initialize slider function
	function startSlide() {
		reset();
		sliderImages[0].style.display = "block";
	}
	
	// Adding event listeners
	// Left arrow click
	arrowLeft.addEventListener("click", function() {
		if(current === 0) {
			current = sliderImages.length;
		}
		slideLeft();
	});

	// Right arrow click
	arrowRight.addEventListener("click", function() {
		if(current === sliderImages.length - 1) {
			current = -1; 
		}
		slideRight();
	});


	// Show prev
	function slideLeft() {
		reset();
		sliderImages[current - 1].style.display = "block";
		current--;
	}

	// Show next 
	function slideRight() {
		reset();
		sliderImages[current + 1].style.display = "block";
		current++;
	}

	// Invoking startSlide function
	startSlide();
})();
