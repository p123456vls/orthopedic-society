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