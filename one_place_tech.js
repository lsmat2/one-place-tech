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

function createRandomDots(num) {
    const numDots = num; // Number of dots to create
  
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.top = Math.random() * document.body.clientHeight + 'px'; // 100 + 'vh'; // Random vertical position
        dot.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        document.body.appendChild(dot);
    }
}

// console.log(document.body.clientHeight);
// console.log(visualViewport.width);

function changeDotProperties() {
    const dots = document.querySelectorAll('.dot');
  
    dots.forEach(dot => {
        // Lower dots each iteration at constant and random rates
        const randMovementFactor = Math.floor(Math.random() * 5 + 1);
        const constMovementFactor = 30;

        const currentHeight = dot.getBoundingClientRect().top;
        const newHeight = (currentHeight + constMovementFactor + randMovementFactor) % document.body.clientHeight;
        const newHeightPix = newHeight + 'px';
        dot.style.top = newHeightPix;
    });
    const height = dots[0].getBoundingClientRect().top;
    const newHeightPix = (height + 1) + 'px';
    dots[0].style.top = newHeightPix;
    // console.log(newHeightPix);
    // console.log(dots[0].style.top);
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

function initialize() {
    createRandomDots(30);
    setInterval(changeDotProperties, 30);
}

initialize();