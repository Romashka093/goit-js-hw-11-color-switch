import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

console.log(colors);

const refs = {
    start: document.querySelector("button[data-action='start']"),
    stop: document.querySelector("button[data-action='stop']"),
    body: document.querySelector('body')
}

console.log(refs);

refs.start.addEventListener('click', handleChange);

function handleChange(e) {
    if (e.target) {
        refs.body.style.background = colors[3]
    }
}