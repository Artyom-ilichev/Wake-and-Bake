let options = {
    threshold: [0.5] 
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.what__is__a__bakery');
let preferUs = document.querySelectorAll('.why__do__prefer__us');
let galleryBakery = document.querySelectorAll('.gallery__of__bakery');
let sale = document.querySelectorAll('.astounding__sale');
let menuText = document.querySelectorAll('.each-block-of-product-column');
let formDelivery = document.querySelectorAll('.form__delivery');
  
for (let elm of elements) {
    observer.observe(elm);
}

for (let elm of preferUs) {
    observer.observe(elm);
}

for (let elm of galleryBakery) {
    observer.observe(elm);
}

for (let elm of sale) {
    observer.observe(elm);
}

for (let elm of menuText) {
    observer.observe(elm);
}

for (let elm of formDelivery) {
    observer.observe(elm);
}

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('what__is__a__bakery-show');
            change.target.classList.add('why__do__prefer__us-show');
            change.target.classList.add('gallery__of__bakery-show');
            change.target.classList.add('astounding__sale-show');
            change.target.classList.add('each-block-of-product-column-show');
            change.target.classList.add('form__delivery-show');
        }
    });
};