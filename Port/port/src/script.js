// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper = document.querySelector('.ml14');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper = document.querySelector('.ml17');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper = document.querySelector('.ml18');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
    .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
    targets: '.ml13 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
}).add({
    targets: '.ml14 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
}).add({
    targets: '.ml12 .ml13 .ml14',
    opacity: [0, 1],
    easing: "easeInExpo",
}).add({
    targets: '.ml16 .letter',
    translateY: [-100, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
}).add({
    targets: '.ml16',
    opacity: 1,
    duration: 2,
    easing: "easeOutExpo",
    delay: 2
}).add({
    targets: '.ml17 .letter',
    translateY: [-100, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
}).add({
    targets: '.ml17',
    opacity: 1,
    duration: 2,
    easing: "easeOutExpo",
    delay: 2
}).add({
    targets: '.ml18 .letter',
    translateY: [-100, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
}).add({
    targets: '.ml18',
    opacity: 1,
    duration: 2,
    easing: "easeOutExpo",
    delay: 2
});

let nav = "home";

function displaySection(id) {
    document.getElementById(id).style.display = "block";
    nav = id;
    hideSection();
}

function hideSection() {
    if (nav == "works") {
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }

    if (nav == "about") {
        document.getElementById("contact").style.display = "none";
        document.getElementById("works").style.display = "none";
    }

    if (nav == "contact") {
        document.getElementById("about").style.display = "none";
        document.getElementById("works").style.display = "none";
    }
}


