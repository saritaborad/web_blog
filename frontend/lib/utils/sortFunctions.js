// sort by date
export const sortByDate = (array) => {
 const sortedArray = array.sort((a, b) => new Date(b.createdAt && b.createdAt) - new Date(a.createdAt && a.createdAt));
 return sortedArray;
};

