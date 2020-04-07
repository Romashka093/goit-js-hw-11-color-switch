import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    start: document.querySelector("button[data-action='start']"),
    stop: document.querySelector("button[data-action='stop']"),
    body: document.querySelector('body')
}

let colorId;
refs.start.addEventListener('click', handleChange);

function handleChange(e) {
    if (e.target) {
        colorId = setInterval(function () {
            console.log(refs.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            )
        }, 1000)
    }
}

refs.stop.addEventListener('click', handleStop);

function handleStop() {
    clearInterval(colorId)
}