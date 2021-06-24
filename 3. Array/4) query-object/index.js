import stringToType from "./../../2. Data Types/1) string-to-type/index.js";

function queryToObject(query) {
  let queryObj = new Object();
  if (query === "" || query === "?") {
    return queryObj;
  } else {
    let str
    str = query.split("?"); //.join()
    str = str[1].split("&");

    str.forEach((a) => {
      a = a.split("=");
      queryObj[a[0]] = stringToType(a[1]);
    });

    return queryObj;
  }
}




window.queryToObject = queryToObject;

export default queryToObject;
