import stringToType from "./../../2. Data Types/1) string-to-type/index.js";

function queryToObject(query) {
  let queryObj = new Object();
  if (query === "" || query === "?") {
    return queryObj;
  } else {
    let str
    str = query.split("?"); //.join()
    str = str[1].split("&");

    str.forEach((pairPropertyValue) => {
      pairPropertyValue = pairPropertyValue.split("=");
      queryObj[pairPropertyValue[0]] = stringToType(pairPropertyValue[1]);
    });

    return queryObj;
  }
}




window.queryToObject = queryToObject;

export default queryToObject;
