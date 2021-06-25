function xhrGet(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status < 300 && xhr.status > 199) {
          resolve(JSON.parse(xhr.response));
          console.log(JSON.parse(xhr.response));
          console.log(xhr.response);
        } else {
          reject(JSON.parse(xhr.response));
        }
      }
    };
    xhr.send();
  });
}

window.xhrGet = xhrGet;

export default xhrGet;
