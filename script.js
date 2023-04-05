let memeHead = document.getElementById('meme-title');
let memeInfo = document.getElementById('meme-info')
let memeArrow = document.getElementById('meme-arrow')
let tablesHead = document.getElementById('tables-head');
let tablesInfo = document.getElementById('tables-info')
let tablesArrow = document.getElementById('tables-arrow')
let tracksmithHead = document.getElementById('tracksmith-head');
let tracksmithInfo = document.getElementById('tracksmith-info')
let tracksmithArrow = document.getElementById('tracksmith-arrow')

memeHead.addEventListener('click', function() {
    if (memeInfo.style.display === 'none') {
        memeInfo.style.display = 'block';
        memeArrow.innerHTML = '⮑';
    } else {
        memeInfo.style.display = 'none';
        memeArrow.innerHTML = '➡';
    }
});

tablesHead.addEventListener('click', function() {
    if (tablesInfo.style.display === 'none') {
        tablesInfo.style.display = 'block';
        tablesArrow.innerHTML = '⮑';
    } else {
        tablesInfo.style.display = 'none';
        tablesArrow.innerHTML = '➡';
    }
});

tracksmithHead.addEventListener('click', function() {
    if (tracksmithInfo.style.display === 'none') {
        tracksmithInfo.style.display = 'block';
        tracksmithArrow.innerHTML = '⮑';
    } else {
        tracksmithInfo.style.display = 'none';
        tracksmithArrow.innerHTML = '➡';
    }
});