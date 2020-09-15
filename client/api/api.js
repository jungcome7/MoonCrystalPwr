const API_END_POINT = 3000

export const getMainCategories = async () => {
  const res = await fetch(`http://localhost:${API_END_POINT}/api/main-category`);
  const result = await res.json();
  return result;
};

export const getSubCategoriesByMainCategoryId = async (mainCategoryId) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/main-category/${mainCategoryId}/sub-category`
  );
  const result = await res.json();
  return result;
};

export const getBooksByMainCategoryId = async (mainCategoryId) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/book/main/${mainCategoryId}`
  );
  const result = await res.json();
  return result;
};

export const getBooksBySubCategoryId = async (subCategoryId) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/book/sub/${subCategoryId}`
  );
  const result = await res.json();
  return result;
};

export const getReviewsByBookId = async (bookId) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/review/${bookId}`
  );
  const result = await res.json();
  return result;
};

export const getQuotesByBookId = async (bookId) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/quote/${bookId}`
  );
  const result = await res.json();
  return result;
};