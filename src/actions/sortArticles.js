const monthsDict = {
  januar: "january",
  februar: "february",
  mars: "march",
  april: "april",
  mai: "may",
  juni: "june",
  juli: "july",
  august: "august",
  september: "september",
  oktober: "october",
  november: "november",
  desember: "december"
}

const transformDate = (date) => {
  if (!date) return null;

  const splittedDate = date.split(' ');
  Object.entries(monthsDict).forEach(([key, value]) => { 
    if(key === splittedDate[1]) {
      splittedDate[1] = value;
    }
  })
  return splittedDate.join(' ');
}

export const sortArticles = (data, order) => {
  if (data.length === 0) return [];
  if (!order) return data;

  const sortedArticles = order === 'asc'
    ? data.sort((a, b) => new Date(transformDate(b.date)) - new Date(transformDate(a.date)))
    : data.sort((a, b) => new Date(transformDate(a.date)) - new Date(transformDate(b.date)))
  
  return sortedArticles;
}