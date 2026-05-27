// ========================================
// ALL PAGES
// ========================================

const pages =
document.querySelectorAll(".page");

// ========================================
// SHOW SECTION
// ========================================

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    const selectedPage =
    document.getElementById(id);

    selectedPage.classList.add("active");

}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

document.addEventListener(
    "keydown",
    (e)=>{

        // HOME
        if(e.key === "1"){

            showPage("home");

        }

        // REDMAGIC
        if(e.key === "2"){

            showPage("redmagic");

        }

        // HONOR
        if(e.key === "3"){

            showPage("honor");

        }

        // OPPO
        if(e.key === "4"){

            showPage("oppo");

        }

        // HONOR VS OPPO
        if(e.key === "5"){

            showPage("honorVsOppo");

        }

        // REDMAGIC VS ALL
        if(e.key === "6"){

            showPage("redmagicVsAll");

        }

    }
);

// ========================================
// PHONE MOVEMENT EFFECT
// ========================================

const phones =
document.querySelectorAll(
    ".bigPhone,.phoneImage,.ultimatePhone"
);

document.addEventListener(
    "mousemove",
    (e)=>{

        let x =
        (window.innerWidth / 2 - e.clientX) / 40;

        let y =
        (window.innerHeight / 2 - e.clientY) / 40;

        phones.forEach(phone=>{

            phone.style.transform =
            `
            rotateY(${x}deg)
            rotateX(${-y}deg)
            translateY(-10px)
            `;

        });

    }
);

// ========================================
// RESET PHONE POSITION
// ========================================

document.addEventListener(
    "mouseleave",
    ()=>{

        phones.forEach(phone=>{

            phone.style.transform =
            `
            rotateY(0deg)
            rotateX(0deg)
            translateY(0px)
            `;

        });

    }
);

// ========================================
// PARALLAX EFFECT
// ========================================

const glow =
document.querySelector(".backgroundGlow");

document.addEventListener(
    "mousemove",
    (e)=>{

        let moveX =
        e.clientX / 25;

        let moveY =
        e.clientY / 25;

        glow.style.transform =
        `
        translate(${moveX}px, ${moveY}px)
        `;

    }
);

// ========================================
// AUTO TEXT EFFECT
// ========================================

const titles =
document.querySelectorAll(
    ".sectionTitle,.comparisonTitle,.mainTitle"
);

titles.forEach(title=>{

    title.style.opacity = "0";
    title.style.transform = "translateY(40px)";

});

window.addEventListener(
    "load",
    ()=>{

        titles.forEach((title,index)=>{

            setTimeout(()=>{

                title.style.transition = "1s";

                title.style.opacity = "1";

                title.style.transform =
                "translateY(0px)";

            },index * 300);

        });

    }
);

// ========================================
// RANDOM STARS
// ========================================

for(let i = 0; i < 80; i++){

    let star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random() * window.innerWidth + "px";

    star.style.top =
    Math.random() * window.innerHeight + "px";

    star.style.animationDuration =
    2 + Math.random() * 5 + "s";

    document.body.appendChild(star);

}

// ========================================
// PAGE TRANSITION SOUND
// ========================================

const switchSound =
new Audio(
    "assets/video/switch.mp3"
);

document.addEventListener(
    "keydown",
    (e)=>{

        if(
            e.key >= "1" &&
            e.key <= "6"
        ){

            switchSound.currentTime = 0;

            switchSound.volume = 0.3;

            switchSound.play();

        }

    }
);

// ========================================
// INTRO ANIMATION
// ========================================

window.addEventListener(
    "load",
    ()=>{

        document.body.style.opacity = "0";

        setTimeout(()=>{

            document.body.style.transition =
            "2s";

            document.body.style.opacity = "1";

        },200);

    }
);

// ========================================
// FLOATING PARTICLES
// ========================================

function createParticle(){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * window.innerWidth + "px";

    particle.style.animationDuration =
    3 + Math.random() * 5 + "s";

    particle.style.opacity =
    Math.random();

    particle.style.width =
    2 + Math.random() * 6 + "px";

    particle.style.height =
    particle.style.width;

    document.body.appendChild(
        particle
    );

    setTimeout(()=>{

        particle.remove();

    },8000);

}

setInterval(createParticle,200);

// ========================================
// MOBILE TOUCH SLIDES
// ========================================

let currentPage = 1;

const pageIds = [

    "home",
    "redmagic",
    "honor",
    "oppo",
    "honorVsOppo",
    "redmagicVsAll"

];

let startY = 0;

document.addEventListener(
    "touchstart",
    (e)=>{

        startY =
        e.touches[0].clientY;

    }
);

document.addEventListener(
    "touchend",
    (e)=>{

        let endY =
        e.changedTouches[0].clientY;

        // SWIPE UP
        if(startY - endY > 50){

            currentPage++;

            if(
                currentPage >
                pageIds.length
            ){

                currentPage = 1;

            }

            showPage(
                pageIds[currentPage - 1]
            );

        }

        // SWIPE DOWN
        if(endY - startY > 50){

            currentPage--;

            if(currentPage < 1){

                currentPage =
                pageIds.length;

            }

            showPage(
                pageIds[currentPage - 1]
            );

        }

    }
);

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(

`
🔥 Ultimate Smartphone Showcase

Controls:

1 = Home
2 = RedMagic
3 = Honor
4 = Oppo
5 = Honor vs Oppo
6 = RedMagic vs All

`
);