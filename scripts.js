let slideIndexL = 1;
showSlidesLandscape(slideIndexL);

function plusSlidesL(n) {
    showSlidesLandscape(slideIndexL +=n);
}

function currentSlideL(n) {
    showSlidesLandscape(slideIndexL = n);
}

function showSlidesLandscape(n) {
    let i;
    let slidesL = document.getElementsByClassName("SlidesL");
    let indicator = document.getElementsByClassName("ind");
    if (n > slidesL.length) {slideIndexL = 1}
    if (n < 1) {slideIndexL = slidesL.length}
    for (i = 0; i < slidesL.length; i++) {
        slidesL[i].style.display = "none";
    }
    for(i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(" active", "");
    }
    slidesL[slideIndexL - 1].style.display = "block";
    indicator[slideIndexL - 1].className += " active";
}

let slideIndexP = 1;
showSlidesPortrait(slideIndexP);

function plusSlidesP(n) {
    showSlidesPortrait(slideIndexP +=n);
}

function currentSlideP(n) {
    showSlidesPortrait(slideIndexP = n);
}

function showSlidesPortrait(n) {
    let i;
    let SlidesP = document.getElementsByClassName("SlidesP");
    let indicator = document.getElementsByClassName("indP");
    if (n > SlidesP.length) {slideIndexP = 1}
    if (n < 1) {slideIndexP = SlidesP.length}
    for (i = 0; i < SlidesP.length; i++) {
        SlidesP[i].style.display = "none";
    }
    for(i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(" active", "");
    }
    SlidesP[slideIndexP - 1].style.display = "block";
    indicator[slideIndexP - 1].className += " active";
}

let buttonup = document.getElementById("Btn");

window.onscroll = function() {scrollFunct()};

function scrollFunct() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        buttonup.style.display = "block";
    } else {
        buttonup.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}