function addBody(items) {
  items.forEach(element => {
    document.body.appendChild(element);
  })
}

const input = document.createElement('input');
const button = document.createElement('button');
addBody([input, button]);

button.textContent = 'button';

button.onclick = () => {
  console.log('hi!')
};

button.onclick = () => {
  console.log('bye!')
};

button.onclick = null;

const handleClickButton = () => {
  console.log('button clicked!');
};

button.addEventListener('click', handleClickButton);

button.removeEventListener('click', handleClickButton);

button.addEventListener('click', function disposable() {
  console.log('я случусь один раз');
  button.removeEventListener('click', disposable);
});

input.addEventListener('change', (event) => {
  console.log({event})
  console.dir(input)
})
