let count = 0;

function addinput() {
  count += 1;
  let val = document.getElementById("elem" + count).value;
  let newDiv = document.createElement("input");
  newDiv.id = "elem" + (count + 1);
  newDiv.type = "text";
  let valueInput = count % 2 ? val.toUpperCase() : val.toLowerCase();
  if (val === "555") valueInput = "---";
  newDiv.value = valueInput;
  my_div = document.getElementById("container").appendChild(newDiv);
}
add.onclick = addinput;
