function searchString(obj) {
  let str = "?";
  for (var key in obj) {
    if (obj[key] !== "" && obj[key] !== null && obj[key] !== undefined) {
      str += key + "=" + obj[key] + "&";
    }
  }
  str = str.substring(0, str.length - 1);
  return str;
}

window.searchString = searchString;

export default searchString;
