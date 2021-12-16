let slider = document.querySelector('.slider-inner');
let ellipseButton = document.querySelectorAll('.ellipse');
let prevButton = document.querySelector('.arrow-block-position.left');
let nextButton = document.querySelector('.arrow-block-position.right');
let counter = 0;
let sliderWidth = document.querySelector('.slide').clientWidth;
let slide = document.querySelectorAll('.slide');

var getSiblings = function (elem) {
	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}
	return siblings;
};

ellipseButton[0].classList.add('active');
for(let i = 0; i < ellipseButton.length; i++) {
    ellipseButton[i].addEventListener('click', function() {
        counter = this.dataset.ellipse;
        changeColorButtons();
        slider.style.transition = ".4s ease";
        slider.style.transform = `translateX(${-sliderWidth * counter}px)`;
		
		
		clearInterval(timer);
		
		makeTimer();
		counter--;
    });
}

nextButton.addEventListener('click', function() {
	if (counter <= slide.length - 1) {
		slider.style.transition = ".4s ease";
		slider.style.transform = `translateX(${-sliderWidth * ++counter}px)`;
		
		if(counter === slide.length) {
			counter = 0;
			slider.style.transform = `translateX(${-sliderWidth * counter}px)`;
		}

		changeColorButtons();

		clearInterval(timer); //останваливаем автоматический слайдер при нажатии на кнопку

		makeTimer(); //возобнавляем через некторое время автоматическую прокрутку слайдера
	}
	
});

prevButton.addEventListener('click', function() {
	if(counter === 0) {
		counter = slide.length;
		slider.style.transition = ".4s ease";
		slider.style.transform = `translateX(${-sliderWidth * counter}px)`;
	}

	if (counter > 0) {
		slider.style.transform = `translateX(${-sliderWidth * --counter}px)`;
		changeColorButtons();
	}

	clearInterval(timer);

	makeTimer();
})

function changeColorButtons() {
	ellipseButton[counter].classList.add('active');
	for(let z = 0; z < getSiblings(ellipseButton[counter]).length; z++) {
		getSiblings(ellipseButton[counter])[z].classList.remove('active');
	}
}

let timer = 0;
makeTimer();
function makeTimer() {
	// clearInterval(timer);
	timer = setInterval(function() {
	   if(counter === slide.length - 1) {
		   counter = 0;
		   counter--;
	   }
	 counter++;
	 slider.style.transition = ".6s ease";
	 slider.style.transform = `translateX(${-sliderWidth * counter}px)`;
	 changeColorButtons(counter);
	}, 2000);
}


