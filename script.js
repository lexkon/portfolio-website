let memeHead = document.getElementById('meme-title');
let memeInfo = document.getElementById('meme-info')
let tablesHead = document.getElementById('tables-head');
let tablesInfo = document.getElementById('tables-info')
let tracksmithHead = document.getElementById('tracksmith-head');
let tracksmithInfo = document.getElementById('tracksmith-info')
let projectHeading = document.getElementsByClassName('project-heading');
let projectInfo = document.getElementsByClassName('project-info');

// let infoToggle = function(event) {
//     target.event.style.display = 'block';
// }

memeHead.addEventListener('click', function() {
    if (memeInfo.style.display === 'none') {
        memeInfo.style.display = 'block';
    } else {
        memeInfo.style.display = 'none';
    }
});

tablesHead.addEventListener('click', function() {
    if (tablesInfo.style.display === 'none') {
        tablesInfo.style.display = 'block';
    } else {
        tablesInfo.style.display = 'none';
    }
});

tracksmithHead.addEventListener('click', function() {
    if (tracksmithInfo.style.display === 'none') {
        tracksmithInfo.style.display = 'block';
    } else {
        tracksmithInfo.style.display = 'none';
    }
});