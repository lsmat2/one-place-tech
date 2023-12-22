/* EVENT LISTENERS FOR CLICKING ON INDIVIDUAL GIFS */

const insertionGif = document.getElementById("insertionGif");
insertionGif.addEventListener('click', changeSize("insertionGif"));

const mergeGif = document.getElementById("mergeGif");
insertionGif.addEventListener('click', changeSize("mergeGif"));

const bubbleGif = document.getElementById("bubbleGif");
insertionGif.addEventListener('click', changeSize("bubbleGif"));

/*   <-------->   HELPER FUNCTIONS   <-------->   */

function changeSize(text) {
    let gif = document.getElementById(text);
    let enlarged = false;
    gif.onclick = function() {
        if (enlarged) {
        reduce(text);
        enlarged = false;
        console.log("reducing");
        } else {
        enlarge(text);
        enlarged = true;
        console.log("enlarging");
        }
    }
};

function enlarge(text) {
    document.getElementById(text).style.width = '150%';
    // document.getElementById(text).style.height = '150%';
};
function reduce(text) {
    document.getElementById(text).style.width = '100%';
    // document.getElementById(text).style.height = '100%';
};