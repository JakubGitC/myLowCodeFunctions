function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
//Convert Arrays and Objects
function arrayToObject(arr, keyField) {
    return arr.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
    }, {});
}
