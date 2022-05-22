const container = document.querySelector('.container');
let gridSideLength = 16;
for(let i = 1; i <= gridSideLength*gridSideLength; i++) {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.style.width = `${container.clientWidth / gridSideLength}px`;
  square.style.height = `${container.clientHeight / gridSideLength}px`;
  container.appendChild(square);
}

let grid = document.querySelectorAll('.square');
grid.forEach(square => square.addEventListener('mouseenter', setColor));

function setColor(e) {
  let redVal = Math.floor(Math.random()*255);
  let greenVal = Math.floor(Math.random()*255);
  let blueVal = Math.floor(Math.random()*255);
  e.target.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`;
}

const button = document.querySelector('button');
button.addEventListener('click', createGridForUser);
function createGridForUser(e) {
  let userSideInput = +prompt('Enter grid side length');
  while(!(Number.isInteger(userSideInput) && userSideInput > 0 && userSideInput <= 100)) {
    userSideInput = +prompt('Enter valid grid side length(1-100)');
  }
  gridSideLength = userSideInput;
  grid.forEach(square => container.removeChild(square));
  for(let i = 1; i <= gridSideLength*gridSideLength; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.width = `${container.clientWidth / gridSideLength}px`;
    square.style.height = `${container.clientHeight / gridSideLength}px`;
    container.appendChild(square);
  }
  grid = document.querySelectorAll('.square');
  grid.forEach(square => square.addEventListener('mouseenter', setColor));
}