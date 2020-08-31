const app = document.querySelector('#App');
const template = `
    <div>this is afreeca</div>
    
`;

app.style.height = '100px';
app.style.backgroundColor = 'grey';
app.innerHTML = template;


const fetchData = async () => {
    const res = await fetch('http://localhost:3000/')
    console.log(res)
    const result = await res.json();
    console.log((result))
}

app.addEventListener('click', fetchData); 