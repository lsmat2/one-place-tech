
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
        reduceGif(id, size); 
    } else  { 
        enlargeGif(id, size); 
    }
};

function enlargeGif(id, size) {
    size.large = true;
    document.getElementById(id).style.height = '200px'; // if = '30vw', relative to 'Viewport Width'
    document.getElementById("sortingTable").style.width = '90%';
};
function reduceGif(id, size) {
    size.large = false;
    // document.getElementById(id).removeAttribute('style'); // Removes entire style attribute
    document.getElementById(id).style.height = '60px';
    // document.getElementById("sortingTable").style.width = '70%';
};