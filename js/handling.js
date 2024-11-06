// JavaScript Assessment 1: Task 2 - Event Handling

//No need for globals here

function initialise() {
    "use strict";
    const green = document.getElementById("green");
    const red = document.getElementById("red");

    red.style.top = "0";    
    red.style.left = "0";    
    green.style.backgroundColor = "#ffff";
};

function btn6Clicked() { //Last button function here
    "use strict";
    initialise();
    const blueIn = document.getElementById("blueIn");
    const blueBottom = document.getElementById("blueBottom");
    const green = document.getElementById("green");
    const red = document.getElementById("red");
    
    red.style.top = "10px";
    red.style.left = "10px";
    green.classList.remove("hidden");
    green.style.backgroundColor = "green";
    blueIn.classList.remove("hidden");
    blueIn.style.position = "absolute";
    blueIn.style.top = "20px";
    blueIn.style.left = "20px"; 
    blueBottom.classList.add("hidden");
}

function btn5Clicked() { //Fifth button function here
    "use strict";
    initialise();
    const blueIn = document.getElementById("blueIn");
    const blueBottom = document.getElementById("blueBottom");
    
    blueIn.classList.remove("hidden");
    blueIn.style.position = "absolute";
    blueIn.style.top = "20px";
    blueIn.style.left = "255px"; 
    blueBottom.classList.add("hidden");
}

function btn4Clicked() { //Fourth button function here
    "use strict";
    initialise();
    const blueIn = document.getElementById("blueIn");
    const blueBottom = document.getElementById("blueBottom");
    const red = document.getElementById("red");

    blueBottom.classList.remove("hidden");
    blueIn.classList.add("hidden");
    blueBottom.style.position= "absolute";    
    blueBottom.style.top = "0";    
    blueBottom.style.left = "0px";
    red.style.position = "absolute";
    red.style.top = "0";
    red.style.left = "320px";
}

function btn3Clicked() { //Third button function here
    "use strict";
    initialise();
    const blueIn = document.getElementById("blueIn");
    const blueBottom = document.getElementById("blueBottom");    
    
    blueBottom.classList.remove("hidden");
    blueIn.classList.add("hidden");
    blueBottom.style.position = "absolute";
    blueBottom.style.top = "0";
    blueBottom.style.left = "620px"; 
}

function btn2Clicked() { //Second button function here
    "use strict";
    initialise();    
    const blueIn = document.getElementById("blueIn");
    const blueBottom = document.getElementById("blueBottom");    
    
    blueBottom.classList.remove("hidden");
    blueIn.classList.add("hidden");        
    blueBottom.style.position = "absolute";
    blueBottom.style.top = "620px"; 
    blueBottom.style.left = "0px";    
}

function btn1Clicked() {//Fisrt button function here
    "use strict";
    initialise();
    const blueIn = document.getElementById("blueIn");
    const blueBottom = document.getElementById("blueBottom");    
    
    blueIn.classList.remove("hidden");
    blueIn.style.position = "absolute";
    blueIn.style.top = "0";
    blueIn.style.left = "0";
    blueBottom.classList.add("hidden");
}

// window.onload = init;
window.onload = function () {
    "use strict";
    U.addEvent(U.$('btn1'), 'click', btn1Clicked);
    U.addEvent(U.$('btn2'), 'click', btn2Clicked);
    U.addEvent(U.$('btn3'), 'click', btn3Clicked);
    U.addEvent(U.$('btn4'), 'click', btn4Clicked);
    U.addEvent(U.$('btn5'), 'click', btn5Clicked);
    U.addEvent(U.$('btn6'), 'click', btn6Clicked);
};