import stringToType from "./index1.js";

function queryToObject(query) {
  let queryObj = new Object();
  if (query === "" || query === "?") {
    return queryObj;
  } else {
    query = query.split("?"); //.join()
    query = query[1].split("&");

    query.forEach((a) => {
      a = a.split("=");
      queryObj[a[0]] = stringToType(a[1]);
    });

    return queryObj;
  }
}

window.queryToObject = queryToObject;

export default queryToObject;
