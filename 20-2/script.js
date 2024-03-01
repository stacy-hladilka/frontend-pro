const table = document.getElementById("table");
let data = 1;
for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const element = document.createElement("td");
    element.innerText = String(data);
    data++;
    row.appendChild(element);
  }
  table.appendChild(row);
}
