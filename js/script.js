// Nav-bar change size on scroll on desktop //
window.onscroll = function() {

	if (window.innerWidth >= 780) {
	  scrollFunction();
	}
 }
 
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("#nav-bar").style.padding = "30px 10px";
   
  } else {
    document.querySelector("#nav-bar").style.padding = "80px 10px";
   
  }
}
// Home page slideshow //
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}


// Add a filter for lactose-free ice cream types //
 document.addEventListener('DOMContentLoaded', function () {
	
	const iceCreamTypes = [
	  'Vanilla', 'Chocolate', 'Karamel', 'Hazelnut', 'Banana',
	  'Strawberry', 'Kiwi', 'Mango', 'Lemon', 'Bluberry',
	  'Wild Berrys', 'Stracitella', 'Kinder Boueno', 'Nutella', 'Snickers'
	];

	const lactoseFreeCheckbox = document.getElementById('lactoseFreeCheckbox');

	const iceCreamListContainer = document.getElementById('iceCreamList');

	displayIceCreamTypes(iceCreamTypes);

	function isLactoseFree(iceCreamType) {
	 
	  return lactoseFreeCheckbox.checked &&
		 ['Strawberry', 'Kiwi', 'Mango', 'Lemon', 'Blueberry'].includes(iceCreamType);
	}

	
	function displayIceCreamTypes(iceCreamTypes) {
	
	  iceCreamListContainer.innerHTML = '';

	  iceCreamTypes.forEach(type => {
		 if (!lactoseFreeCheckbox.checked || isLactoseFree(type)) {
			const iceCreamItem = document.createElement('div');
			iceCreamItem.classList.add('iceCreamItem');
			iceCreamItem.textContent = type;
			iceCreamListContainer.appendChild(iceCreamItem);
		 }
	  });
	}

	lactoseFreeCheckbox.addEventListener('change', function () {
	  displayIceCreamTypes(iceCreamTypes);
	});
 });



 // Add alert that is shown when sumbit button is presset //
 function submitForm() {
	
	alert("Reservation submitted! We will contact you to confirm.");
}



// Add back to top button
document.addEventListener('DOMContentLoaded', function () {

	const contactSection = document.querySelector('#contact');

	if (contactSection !== null) {
		 
		 const backToTop = document.createElement('a');
		 backToTop.id = 'back-to-top';
		 backToTop.href = '#';
		 backToTop.textContent = 'Back to Top';
		 document.body.appendChild(backToTop);

		
		 window.addEventListener('scroll', function () {
			  const rect = contactSection.getBoundingClientRect();

			  if (rect.top <= 0) {
					backToTop.style.display = 'block';
			  } else {
					backToTop.style.display = 'none';
			  }
		 });

		 // Scroll to the top when the link is clicked
		 backToTop.addEventListener('click', function (event) {
			  event.preventDefault();
			  document.body.scrollTop = 0;
			  document.documentElement.scrollTop = 0;
		 });
	}
});