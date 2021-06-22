function searchString(obj) {
  let str = "?";
  for (var key in obj) {
    if (obj[key] !== "" && obj[key] !== null && obj[key] !== undefined) {
      str += key + "=" + obj[key] + "&";
    }
  }
  return str.slice(0, -1);
}

window.searchString = searchString;

export default searchString;
