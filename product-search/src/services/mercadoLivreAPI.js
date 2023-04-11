// export async function getProductsFromCategoryAndQueryML(categoryId, query) {
//   const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
//   const requestJson = await request.json();
//   return requestJson.results;
// }

export async function getProductByQueryML(query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const requestJson = await request.json();
  return requestJson.results;
}