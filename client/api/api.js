export const getMainCategories = async () => {
  const res = await fetch('http://localhost:3000/api/main-category');
  const result = await res.json();
  return result;
};

export const getSubCategoriesByMainCategoryId = async (mainCategoryId) => {
  const res = await fetch(
    `http://localhost:3000/api/main-category/${mainCategoryId}/sub-category`
  );
  const result = await res.json();
  return result;
};

export const getBooksByMainCategoryId = async (mainCategoryId) => {
  const res = await fetch(
    `http://localhost:3000/api/book/main/${mainCategoryId}`
  );
  const result = await res.json();
  return result;
};

export const getBooksBySubCategoryId = async (subCategoryId) => {
  const res = await fetch(
    `http://localhost:3000/api/book/sub/${subCategoryId}`
  );
  const result = await res.json();
  return result;
};
