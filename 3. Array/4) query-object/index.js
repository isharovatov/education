import stringToType from "./../../2. Data Types/1) string-to-type/index.js";

function queryToObject(query) {
  let queryObj = new Object();
  let str;
  str = query.split(/\?|\&/); //.join()

  str.forEach((pairPropertyValue) => {
    console.log(pairPropertyValue);
    if (pairPropertyValue != "") {
      pairPropertyValue = pairPropertyValue.split("=");
      queryObj[pairPropertyValue[0]] = stringToType(pairPropertyValue[1]);
    }
  });

  return queryObj;
}

window.queryToObject = queryToObject;

export default queryToObject;
