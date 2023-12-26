/*      FUNCTION TO GENERATE INITIAL POSITION OF       */

// var parentDiv = document.getElementById("bubbles");
// var spans = parentDiv.getElementsByClassName("bub");

// for (var i = 0; i < spans.length; i++) {
//     var num = spans[i].style.i
//     // console.log(spans[i].style.--i);
//     console.log(num);
// }

/*      EVENT LISTENERS FOR CLICKING ON INDIVIDUAL GIFS       */

// const insertionGif = document.getElementById("insertionRow");
// insertionGif.addEventListener('click', changeSize("insertionGif"));
// insertionGif.addEventListener('click', changeSize("insertionBackground"));

// const mergeGif = document.getElementById("mergeBackground");
// mergeGif.addEventListener('click', changeSize("mergeGif"));
// mergeGif.addEventListener('click', changeSize("mergeBackground"));

// const bubbleGif = document.getElementById("bubbleBackground");
// bubbleGif.addEventListener('click', changeSize("bubbleGif"));
// document.getElementById("bubbleBackground").addEventListener('click', changeSize("bubbleBackground"));

/*      OPERATIONS FOR CREATING MOVING DOT BACKGROUND       */

function createDotContainer() {
    let container = document.createElement('div');
    container.classList.add('dots');
    container.id = 'dots';
    document.body.appendChild(container);
}

function createRandomDots(num) {
    let container = document.getElementById("dots");
    for (let i = 0; i < num; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.top = Math.floor((Math.random() * document.body.clientHeight)) + 'px'; // 100 + 'vh' : Random vertical position
        dot.style.left = Math.floor(Math.random() * 100) + 'vw';
        container.appendChild(dot);
    }
}

function updateDotHeight() {
    const dots = document.querySelectorAll('.dot');   
    const moveFactor = 2; // CHANGE BASED ON HOW MUCH TO MOVE EACH TIME FUNCTION CALLED
    dots.forEach(dot => {
        const randMovementFactor = Math.floor(Math.random() * 3 + 1);
        const currentHeight = parseInt(dot.style.top); // Gets height relative to TOP OF PAGE, not viewport
        // const currentHeight = dot.getBoundingClientRect().top; INTERESTING BEHAVIOR: DOTS MOVE RELATIVE TO VIEWPORT
        const newHeight = (currentHeight + moveFactor + randMovementFactor) % document.body.clientHeight;
        const newHeightPx = newHeight + 'px';
        dot.style.top = newHeightPx;
    });
}

function deleteDots() {
    const container = document.getElementById("dots");
    const dots = document.querySelectorAll('.dot');
    dots.forEach(function(element) {
        element.remove();
    });
    container.remove();
}

function initDots(numDots, speed) {
    createDotContainer();
    createRandomDots(numDots);
    return setInterval(updateDotHeight, speed);
}



/*   <-------->     FUNCTIONALITY (ON CLICK)     <-------->   */

let insertionSize = { large: false };
document.getElementById("insertionRow").onclick = function() {
    changeSize("insertionGif", insertionSize);
};

let mergeSize = { large: false };
document.getElementById("mergeRow").onclick = function() {
    changeSize("mergeGif", mergeSize);
};

let bubbleSize = { large: false };
document.getElementById("bubbleRow").onclick = function() {
    changeSize("bubbleGif", bubbleSize);
};

/*   <-------->     HELPER FUNCTIONS     <-------->   */

function changeSize(id, size) {
    if (size.large) { 
        reduceGif(id, size); 
    } else  { 
        enlargeGif(id, size); 
    }
};

function enlargeGif(id, size) {
    size.large = true;
    document.getElementById(id).style.height = '200px'; // if = '30vw', relative to 'Viewport Width'
    // document.getElementById("sortingTable").style.width = '90%';
};
function reduceGif(id, size) {
    size.large = false;
    // document.getElementById(id).removeAttribute('style'); // Removes entire style attribute
    document.getElementById(id).style.height = '60px';
    // document.getElementById("sortingTable").style.width = '70%';
};

initDots(100, 30);