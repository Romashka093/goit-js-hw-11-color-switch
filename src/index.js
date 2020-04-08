import './styles.css';

const refs = {
    start: document.querySelector("button[data-action='start']"),
    stop: document.querySelector("button[data-action='stop']"),
    body: document.querySelector('body')
}

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;
refs.start.addEventListener('click', handleChangeColor);
refs.stop.addEventListener('click', handleStop);


function handleChangeColor(e) {
    if (e.target) {
        e.target.disabled = true
        intervalId = setInterval(function () {
            // // my option
            // console.log(refs.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]);

            // option from technical task
            const color = colors[randomIntegerFromInterval(0, colors.length)];
            console.log(refs.body.style.backgroundColor = color);
        }, 1000)
    }
};

function handleStop(e) {
    if (e.target) {
        clearInterval(intervalId);
        refs.start.disabled = false;
        refs.body.style.backgroundColor = '';
    }

};