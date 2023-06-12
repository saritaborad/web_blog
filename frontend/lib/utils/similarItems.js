// similer products
const similerItems = (currentItem, allItems, slug) => {
 let categories = [];

 if (currentItem[0].categories.length > 0) {
  categories = currentItem[0].categories;
 }

 const filterByCategories = allItems.filter((item) => categories.find((category) => item.categories.find((obj) => obj.name === category.name)));

 const mergedItems = [...new Set([...filterByCategories])];

 const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

 return filterBySlug;
};

export default similerItems;
