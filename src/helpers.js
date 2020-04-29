export const uniqueMemberPayments = (arrOfMembers) => {
  let uniques = [], itemsFound = {};
  for (let val of arrOfMembers) {
    if (itemsFound[val.last_name] && itemsFound[val.first_name]) {
      continue;
    }
    uniques.push(val);
    itemsFound[val.last_name] = true;
    itemsFound[val.first_name] = true;
  }
  return uniques.sort((a, b) =>
    a.last_name < b.last_name ? -1 : 1);
};

export const countOccurrences = (a) => {
  return a.reduce(function (a, b) {
    a[b] = a[b] + 1 || 1
    return a;
  }, {});
}

export const mergeUniqueArrayItems =(arr1,arr2) => {
  let mergeArrays = arr1.concat(arr2);
  return [...new Set([...mergeArrays])];
}


export const sortByDate = (items, isAssenting) => {
  return isAssenting ? items.sort((a, b) =>
      new Date(a.createdAt).getTime() <
      new Date(b.createdAt).getTime() ? -1 : 1) :
    items.sort((a, b) =>
      new Date(a.createdAt).getTime() >
      new Date(b.createdAt).getTime() ? -1 : 1);
}


