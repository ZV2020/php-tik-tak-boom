// const start = document.querySelector('#startStop');

window.onload = function () {
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('startStop'),
        document.getElementById('timeAmount'),
        document.getElementById('players-select'),
        document.querySelector('.quest'),
    )
    tikTakBoom.gameStart();
};