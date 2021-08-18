const container = document.querySelector('#container')
container.style

let numPixel = 100;

function createGrid() {
for (let i = 0; i < numPixel; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'new');
    div.addEventListener('mouseover', function (e) {
        e.target.style.background = 'blue';
      });
    container.appendChild(div);
    }
}

createGrid();

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const newDiv = document.querySelector('#new');
    container.removeChild(newDiv);

    for (let i = 0; i < numPixel -1; i++) {
        const newDiv = document.querySelector('#new');
        container.removeChild(newDiv);
        }
    numPixel = prompt("Enter grid size (1-10000): ", "");
    createGrid();
})

