var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    changeColor();
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    changeColor();
    
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
    
}

// color of transition

function changeColor(){
    colorArr = [ "#f4b6c2" , "#6497b1" , " #651e3e" , "#dec3c3" , "#f6cd61" , "#fe8a71" , "#00b159"];

    let curtain = document.querySelectorAll('li');
    
    console.log(curtain);
    
    let randomIndex = Math.floor(Math.random()*7);
    
    curtain.forEach((item) =>{
       item.style.backgroundColor = colorArr[randomIndex];
    });
}



// animation

function pageTransition() {
    var tl = gsap.timeline();

    tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })

    tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 })

    changeColor();
}



function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();

            await delay(1500);

            done();
        },

        async enter() {
            // contentAnimation();
        },

        async once() {
            // contentAnimation();
        }
    }]
})