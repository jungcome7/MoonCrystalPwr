const { SideBar } = require('./component/SideBar/SideBar');

const app = document.querySelector('#App');
const template = `
<div class="sidebar">
  <div class="logo">logo</div>
  <div class="main-category">
    <div class="main-category-all">MainCategoryAll</div>
    <div class="main-category-1">MainCategory1</div>
    <div class="main-category-2">MainCategory2</div>
    <div class="main-category-3">MainCategory3</div>
    <div class="main-category-4">MainCategory4</div>
    <div class="main-category-5">MainCategory5</div>
    <div class="main-category-6">MainCategory6</div>
    <div class="main-category-7">MainCategory7</div>
    <div class="main-category-8">MainCategory8</div>
    <div class="main-category-9">MainCategory9</div>
  </div>
  <input type="text" placeholder="search" />
</div>

<div class="main-container">
  <!-- 헤더 -->
  <header>
    <div class="main-header">Main header</div>
    <div class="sub-category">
      <div class="sub-category-all">SubCategoryAll</div>
      <div class="sub-category-1">SubCategory1</div>
      <div class="sub-category-2">SubCategory2</div>
      <div class="sub-category-3">SubCategory3</div>
      <div class="sub-category-4">SubCategory4</div>
      <div class="sub-category-5">SubCategory5</div>
      <div class="sub-category-6">SubCategory6</div>
    </div>
  </header>

  <!-- 컨텐츠 영역 -->
  <div class="book-card-small">
    Latest
    <img src="" alt="" />
    <div class="book-description">
      <div class="book-title"></div>
      <div class="book-category"></div>
      <div class="book-press"></div>
      <div class="read-date"></div>
      <div class="book-pages"></div>
    </div>
    <div class="book-review">
      <div class="book-review-star"></div>
      <div class="book-review-preview"></div>
    </div>
  </div>

  <div class="book-card-small">
    Most Popular
    <img src="" alt="" />
    <div class="book-description">
      <div class="book-title"></div>
      <div class="book-category"></div>
      <div class="book-press"></div>
      <div class="read-date"></div>
      <div class="book-pages"></div>
    </div>
    <div class="book-review">
      <div class="book-review-star"></div>
      <div class="book-review-preview"></div>
    </div>
  </div>

  <div class="book-card-small">
    Ing
    <img src="" alt="" />
    <div class="book-description">
      <div class="book-title"></div>
      <div class="book-category"></div>
      <div class="book-press"></div>
      <div class="read-date"></div>
      <div class="book-pages"></div>
    </div>
    <div class="book-review">
      <div class="book-review-star"></div>
      <div class="book-review-preview"></div>
    </div>
  </div>

  <div class="summary-card-small">Summary
    <img src="" alt="" />
    <div class="summary-card-small-description">
      <div class="total-categories"></div>
      <div class="total-books"></div>
      <div class="total-pages"></div>
      <div class="books-per-month"></div>
      <div class="pages-per-day"></div>
      <div class="total-stars"></div>
    </div>
  </div>

</div>
    
`;

// app.innerHTML = template;
new SideBar()
// app.style.height = '100px';
// app.style.backgroundColor = 'grey';
// app.style.cursor = 'pointer';

// const fetchData = async () => {
//   const res = await fetch('http://localhost:3000/');
//   const result = await res.json();
//   return result;
// };

// const clickHandler = async (e) => {
//   const data = await fetchData();
//   !e.target.innerHTML
//     ? (e.target.innerHTML = `id: ${data[0].id}, name: ${data[0].name}, email: ${data[0].email}`)
//     : (e.target.innerHTML = '');
// };

app.addEventListener('click', (e) => clickHandler(e));
