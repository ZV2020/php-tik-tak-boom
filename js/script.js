const start = document.querySelector('#startStop');

start.addEventListener('click', () => {
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('startStop'),
        // document.getElementById('timeAmount'),
        // document.getElementById('players-select'),
    )
    tikTakBoom.run();
});