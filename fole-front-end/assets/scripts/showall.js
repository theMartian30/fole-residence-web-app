const tableBody = document.getElementById("alltable").getElementsByTagName("tbody")[0];

async function showAll(){

    const aparray = await getAllRooms();

    tableBody.innerHTML = "";

    for (let room of aparray) {
        const newTableRow = tableBody.insertRow();
        newTableRow.insertCell(0).innerHTML = room["building"];
        newTableRow.insertCell(1).innerHTML = room["floor"];
        newTableRow.insertCell(2).innerHTML = room["roomNr"];
        newTableRow.insertCell(3).innerHTML=room["type"];
        if (room["occupied"]) {
            newTableRow.insertCell(4).innerHTML = "Occupied";
        } else {
            newTableRow.insertCell(4).innerHTML = "Free";
        }
        newTableRow.insertCell(5).innerHTML="<button class='change'>Go to room</button>"
    }
}

tableBody.addEventListener('click', function(event) {
    
    const roomType=["onebedroom-button","onebedroom-button","doublestudio-button","doublestudio-button","singlestudio-button","singlestudio-button","twobedroom-button"];
    if (event.target.classList.contains('change')) {

        const button = event.target;
        const row = button.closest('tr'); // Finds the closest ancestor which is a table row

        // Now you can access the cells of this row
        const cells = row.cells;

        console.log(cells);

        localStorage.setItem('Building', cells[0].textContent);
        localStorage.setItem('Floor', cells[1].textContent);
        localStorage.setItem('RoomNr', cells[2].textContent);
        localStorage.setItem('RoomType', roomType[parseInt(cells[2].textContent)-1]);


        window.location.href = "showroom.html";
    }
});

showAll();