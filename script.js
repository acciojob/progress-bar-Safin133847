//your JS code here. If required.
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
let currentActive = 0; 

nextButton.addEventListener('click', () => {
    if (currentActive < circles.length - 1) {
        circles[currentActive].classList.remove('active');
        
        currentActive++;
        
        circles[currentActive].classList.add('active');
        
        prevButton.disabled = false;

        // Disable the next button if all circles are active
        if (currentActive === circles.length - 1) {
            nextButton.disabled = true;
        }
    }
});

prevButton.addEventListener('click', () => {
    if (currentActive > 0) {
        circles[currentActive].classList.remove('active');
        
        currentActive--;
        
        circles[currentActive].classList.add('active');
        
        nextButton.disabled = false;

        if (currentActive === 0) {
            prevButton.disabled = true;
        }
    }
});
