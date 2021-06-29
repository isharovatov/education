let count = 0;

function addinput() {
  count += 1;
  var val = document.getElementById("elem"+count).value;
  if (val == "555") {
    var newDiv = document.createElement("div");
    newDiv.innerHTML =
      "<input id = 'elem" + (count+1) + "'  type='text' value='---'>";
    my_div = document.getElementById("container").appendChild(newDiv);
  } else if (count % 2) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML =
      "<input id = 'elem" + (count+1) + "'  type='text' value='" + val.toLowerCase() + "'>";
    my_div = document.getElementById("container").appendChild(newDiv);
  } else {
    var newDiv = document.createElement("div");
    newDiv.innerHTML =
      "<input id = 'elem" + (count+1) + "'  type='text' value='" + val.toUpperCase() + "'>";
    my_div = document.getElementById("container").appendChild(newDiv);
  }
}
add.onclick = addinput;
