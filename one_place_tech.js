/*      EVENT LISTENERS FOR CLICKING ON INDIVIDUAL GIFS       */

const insertionGif = document.getElementById("insertionGif");
insertionGif.addEventListener('click', changeSize("insertionGif"));
insertionGif.addEventListener('click', changeSize("insertionBackground"));

const mergeGif = document.getElementById("mergeBackground");
mergeGif.addEventListener('click', changeSize("mergeGif"));
mergeGif.addEventListener('click', changeSize("mergeBackground"));

const bubbleGif = document.getElementById("bubbleBackground");
bubbleGif.addEventListener('click', changeSize("bubbleGif"));
document.getElementById("bubbleBackground").addEventListener('click', changeSize("bubbleBackground"));

/*   <-------->     HELPER FUNCTIONS     <-------->   */

function changeSize(id) {
    let element = document.getElementById(id);
    let enlarged = false;
    element.onclick = function() {
        if (enlarged) {
            reduceSize(id);
            enlarged = false;
        } else {
            enlargeSize(id);
            enlarged = true;
        }
    }
};

function enlargeSize(id) {
    document.getElementById(id).style.width = '100%';
};
function reduceSize(id) {
    // document.getElementById(id).style.width = '100%';
    document.getElementById(id).removeAttribute('style'); // !!! SCORE! Removes entire style attribute
};
