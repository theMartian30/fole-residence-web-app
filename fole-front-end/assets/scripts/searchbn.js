const tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];
const button = document.getElementById("search-button");

async function searchbyname(){

    const fname = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const person = await getPersonByName(fname,surname);

    console.log(person);
    tableBody.innerHTML = "";
    const newTableRow = tableBody.insertRow();
    newTableRow.insertCell(0).innerHTML = person.roomID;
    newTableRow.insertCell(1).innerHTML = person.name;
    newTableRow.insertCell(2).innerHTML = person.surname;
    newTableRow.insertCell(3).innerHTML=person.email;
    newTableRow.insertCell(4).innerHTML=person.phone;
    newTableRow.insertCell(5).innerHTML=person.emergencyName;
    newTableRow.insertCell(6).innerHTML=person.emergencyContactNumber;
    newTableRow.insertCell(7).innerHTML=person.beginningOfContract;
    newTableRow.insertCell(8).innerHTML=person.endOfContract;
}

button.addEventListener('click', async function (event) {
    searchbyname();
  });