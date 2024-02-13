/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let itemResult = {};

  for (let i = 0; i < arr1.length; i++) {
    itemResult[arr1[i].id] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    if (itemResult[arr2[i].id]) {
      // Update the item with the values in arr2
      for (const k in arr2[i]) {
        itemResult[arr2[i].id][k] = arr2[i][k];
      }
    } else {
      itemResult[arr2[i].id] = arr2[i];
    }
  }

  return [...Object.values(itemResult)];
};
