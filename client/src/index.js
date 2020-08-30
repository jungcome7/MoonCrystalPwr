const app = document.querySelector('#App');
const p = document.createElement('p');

p.style.height = '100px';
p.style.backgroundColor = 'grey';
p.style.cursor = 'pointer';
app.appendChild(p);

p.addEventListener('click', () => alert(1));
