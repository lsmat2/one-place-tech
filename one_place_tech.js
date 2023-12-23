
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
        reduceSize(id, size); 
    } else  { 
        enlargeSize(id, size); 
    }
};

function enlargeSize(id, size) {
    size.large = true;
    document.getElementById(id).style.width = '450px'; // if = '30vw', relative to 'Viewport Width'
};
function reduceSize(id, size) {
    size.large = false;
    document.getElementById(id).removeAttribute('style'); // Removes entire style attribute
};