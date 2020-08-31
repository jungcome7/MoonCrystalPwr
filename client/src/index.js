const app = document.querySelector('#App');
const template = `
    <div>this is afreeca</div>
    
`;

app.style.height = '100px';
app.style.backgroundColor = 'grey';
app.innerHTML = template;

const fetchData = async () => {
  const res = await fetch('http://localhost:3000/');
  const result = await res.json();
  return result;
};

const clickHandler = async (e) => {
  const data = await fetchData();
  e.target.innerHTML=(`id: ${data[0].id}, name: ${data[0].name}, email: ${data[0].email}`)
};

app.addEventListener('click', (e) => clickHandler(e));
