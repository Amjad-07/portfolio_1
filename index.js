// ----------------------------------------text -animation---------------------------

var div = document.querySelector(".home-image")
var two = document.querySelector(".span3")
function textload() {
    setTimeout(() => {
        two.textContent = ("Student")


    }, 0);
    setTimeout(() => {
        two.textContent = ("Front-end Developer")


    }, 4000);

}
textload()
setInterval(textload, 8000)


// ----------------------------------progressBar----------------------------------
function setProgress(value) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = value + '%';
    progressBar.innerHTML ="<p>HTML</p>";
}
setProgress(90);





function setProgress1(value) {
    const progressBar1 = document.getElementById('progress-bar1');
    progressBar1.style.width = value + '%';
    progressBar1.innerHTML ="<p>CSS</p>";
}
setProgress1(80);



function setProgress2(value) {
    const progressBar2 = document.getElementById('progress-bar2');
    progressBar2.style.width = value + '%';
    progressBar2.innerHTML ="<p>Tailwind CSS</p>";
}

setProgress2(70);


function setProgress3(value) {
    const progressBar3 = document.getElementById('progress-bar3');
    progressBar3.style.width = value + '%';
    progressBar3.innerHTML ="<p>JavaScript</p>";
}

setProgress3(70);


function setProgress4(value) {
    const progressBar4 = document.getElementById('progress-bar4');
    progressBar4.style.width = value + '%';
    progressBar4.innerHTML ="<p>Python</p>";
}

setProgress4(70);

function setProgress5(value) {
    const progressBar3 = document.getElementById('progress-bar5');
    progressBar3.style.width = value + '%';
    progressBar3.innerHTML ="<p>React</p>";
}
setProgress5(70);




let a = document.querySelector(".scroll");
a.addEventListener("click", function (ev) {
    ev.preventDefault();
    let targetId = a.getAttribute("href");
    let targetElement = document.querySelector(targetId);
    
    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    
    let viewportHeight = window.innerHeight;
    let targetHeight = targetElement.offsetHeight;
    
    let maxScrollPosition = document.body.scrollHeight - viewportHeight;
    
    let scrollPosition = targetPosition;
    if (targetPosition + targetHeight > maxScrollPosition) {
        scrollPosition = maxScrollPosition;
    }
    
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
    });
});

let b = document.querySelector(".edu-scroll");
b.addEventListener("click", function (en) {
    en.preventDefault();
    let target = b.getAttribute("href");
    let targetElement = document.querySelector(target);
    
    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    
    let viewportHeight = window.innerHeight;
    let targetHeight = targetElement.offsetHeight;
    
    let maxScrollPosition = document.body.scrollHeight - viewportHeight;
    
    let scrollPosition = targetPosition;
    if (targetPosition + targetHeight > maxScrollPosition) {
        scrollPosition = maxScrollPosition;
    }
    
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
    });
});

let c = document.querySelector(".proj-scroll");
c.addEventListener("click", function (ef) {
    ef.preventDefault();
    let targeted = c.getAttribute("href");
    document.querySelector(targeted).scrollIntoView({
        behavior: "smooth"
    });
});

let d = document.querySelector(".con-scroll");
d.addEventListener("click", function (ef) {
    ef.preventDefault();
    let tar = d.getAttribute("href");
    let targetElement = document.querySelector(tar);
    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    
    
    let viewportHeight = window.innerHeight;
    let targetHeight = targetElement.offsetHeight;

    let maxScrollPosition = document.body.scrollHeight - viewportHeight;
    
    
    let scrollPosition = targetPosition;
    if (targetPosition + targetHeight > maxScrollPosition) {
        scrollPosition = maxScrollPosition;
    }
    
    
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
    });
});
let e = document.querySelector(".skill-scroll");
e.addEventListener("click", function (n) {
    n.preventDefault(); 
    let skillElement = e.getAttribute("href"); 
    let targetElement = document.querySelector(skillElement);
    
    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    
    let viewportHeight = window.innerHeight;
    let targetHeight = targetElement.offsetHeight;
    
    let maxScrollPosition = document.body.scrollHeight - viewportHeight;
    
    let scrollPosition = targetPosition;
    if (targetPosition + targetHeight > maxScrollPosition) {
        scrollPosition = maxScrollPosition;
    }
    
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
    });
});


window.addEventListener("scroll", function () {

    let animated = this.document.querySelectorAll(".animation1")
    animated.forEach(anime => {
        let bound = anime.getBoundingClientRect().top
        let windowheight = window.innerHeight
        console.log(windowheight)
        console.log(bound)
        if (windowheight > bound) (
            anime.classList.remove("reveal-element")
        )
        // else if(bound>windowheight){
        //     el.classList.add("reveal-element")
        // }



    });

})
window.addEventListener("scroll", function () {

    let animatedTwo = this.document.querySelectorAll(".animation2")
    animatedTwo.forEach(anime => {
        let bound = anime.getBoundingClientRect().top
        let windowheight = window.innerHeight
        console.log(windowheight)
        console.log(bound)
        if (windowheight > bound) (
            anime.classList.remove("reveal-element1")
        )
        // else if(bound>windowheight){
        //     el.classList.add("reveal-element")
        // }



    });

})
window.addEventListener("scroll", function () {

    let animatedThree = this.document.querySelectorAll(".animation3")
    animatedThree.forEach(anime => {
        let bound = anime.getBoundingClientRect().top
        let windowheight = window.innerHeight
        console.log(windowheight)
        console.log(bound)
        if (windowheight > bound) (
            anime.classList.remove("reveal-element3")
        )
        // else if(bound>windowheight){
        //     el.classList.add("reveal-element")
        // }



    });

})
window.addEventListener("scroll", function () {

    let animatedFour = this.document.querySelectorAll(".animation4")
    animatedFour.forEach(anime => {
        let bound = anime.getBoundingClientRect().top
        let windowheight = window.innerHeight
        console.log(windowheight)
        console.log(bound)
        if (windowheight > bound) (
            anime.classList.remove("reveal-element4")
        )
        // else if(bound>windowheight){
        //     el.classList.add("reveal-element")
        // }



    });

})
// document.addEventListener("DOMContentLoaded", initialize);
// var homeContainer = document.querySelector(".home-container")

// function initialize() {
//     homeContainer.classList.add("displayShow")
    
    
// }
// initialize()
window.addEventListener("scroll", function () {

    let animatedThree = this.document.querySelectorAll(".animation6")
    animatedThree.forEach(anime => {
        let bound = anime.getBoundingClientRect().top
        let windowheight = window.innerHeight
        console.log(windowheight)
        console.log(bound)
        if (windowheight > bound) (
            anime.classList.remove("reveal-element6")
        )
        // else if(bound>windowheight){
        //     el.classList.add("reveal-element")
        // }



    });

})
// ---------------------------------------sidenav------------------------
var openElement = document.querySelector("#bar")
var sidenavContainer = document.querySelector(".sidenav-container")
var closeElement = document.querySelector("#close")
openElement.addEventListener("click",function(){
    sidenavContainer.style.marginLeft="0px"

})
closeElement.addEventListener("click", function(){
    sidenavContainer.style.marginLeft=""

})
document.querySelectorAll(".sidenav-container .navs a").forEach(link => {
    link.addEventListener("click", function (ev) {
        ev.preventDefault();
        let targetId = link.getAttribute("href");
        let targetElement = document.querySelector(targetId);

        let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        let viewportHeight = window.innerHeight;
        let targetHeight = targetElement.offsetHeight;

        let maxScrollPosition = document.body.scrollHeight - viewportHeight;

        let scrollPosition = targetPosition;
        if (targetPosition + targetHeight > maxScrollPosition) {
            scrollPosition = maxScrollPosition;
        }

        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    });
});
function linkedin(){
    window.location.href = "https://www.linkedin.com/in/mohamed-amjad-a-111b44281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
}








