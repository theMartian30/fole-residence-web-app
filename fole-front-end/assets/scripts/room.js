// Function to create slides
function createSlides() {
    var roomtype = localStorage.getItem('RoomType');

    if (roomtype == "onebedroom-button") {
        document.getElementById('img1').src = "assets/images/3.1.jpg";
        document.getElementById('img2').src = "assets/images/3.2.jpg";
        document.getElementById('img3').src = "assets/images/3.3.jpg";
    }

    if (roomtype == "twobedroom-button") {
        document.getElementById('img1').src = "assets/images/4.1.jpg";
        document.getElementById('img2').src = "assets/images/4.2.jpg";
        document.getElementById('img3').src = "assets/images/4.3.jpg";
    }

    if (roomtype == "singlestudio-button") {
        document.getElementById('img1').src = "assets/images/1.1.jpg";
        document.getElementById('img2').src = "assets/images/1.2.jpg";
        document.getElementById('img3').src = "assets/images/1.3.jpg";
    }

    if (roomtype == "doublestudio-button") {
        document.getElementById('img1').src = "assets/images/2.1.jpg";
        document.getElementById('img2').src = "assets/images/2.2.jpg";
        document.getElementById('img3').src = "assets/images/2.3.jpg";
    }
}

// Call the function to create slides when the page is loaded
createSlides();

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Slide control variables
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


// Get references to the div elements
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var header1 = document.getElementById("room-name1");
var header2 = document.getElementById("room-name");
var buttonfill = document.getElementById("fill-button");
var buttonempty = document.getElementById("empty-button");


let buil = localStorage.getItem('Building');
let fl = localStorage.getItem('Floor');
let roomNr = localStorage.getItem('RoomNr');

var roomID = buil + fl + roomNr;
header2.innerHTML = roomID;
header1.innerHTML = roomID;


async function select_div(occupation) {
    var isConditionTrue = occupation;

    if (isConditionTrue) {
        // Show div1 and hide div2
        div1.style.display = "block";
        div2.style.display = "none";
        var roomPerson = await getPersonByRoom(roomID);
        
        document.getElementById('tName').textContent = roomPerson.name;
        document.getElementById('tSurname').textContent = roomPerson.surname;
        document.getElementById('tEmail').textContent = roomPerson.email;
        document.getElementById('tPhone').textContent = roomPerson.phone;
        document.getElementById('tEmergencyContactName').textContent = roomPerson.emergencyName;
        document.getElementById('tEmergencyContactNumber').textContent = roomPerson.emergencyContactNumber;
        document.getElementById('tContractb').textContent = roomPerson.beginningOfContract;
        document.getElementById('tContracte').textContent = roomPerson.endOfContract;


    } else {
        // Show div2 and hide div1
        div1.style.display = "none";
        div2.style.display = "block";

    }

}

async function getRoomObject() {
    try {
        var roomObject = await getRoomById(roomID);
        select_div(roomObject.occupied);
    } catch (error) {
        console.error('Error in getFloorArr:', error);
    }
}

getRoomObject();

buttonfill.addEventListener('click', function (event) {
    console.log("hello");
    if (validateAndSubmit(event) == false) {

        alert("Complete all the required fields!");
        event.stopPropagation();
        return;
    }

    select_div(1);
});

buttonempty.addEventListener('click', function (event) {

    deletePersonByRoom(roomID);
    changeRoomStatus(roomID);
    select_div(0);
});


function validateAndSubmit(event) {

    var isValidated = true;

    //Reset all errors
    $("#NameSpn").html("");
    $("#SurnameSpn").html("");
    $("#EmailSpn").html("");
    $("#PhoneSpn").html("");
    $("#EmergencyNameSpn").html("");
    $("#EmergencyNumberSpn").html("");

    const Name = $("#name").val();
    if (Name.length < 3) {
        $("#NameSpn").html("Name must be min 3 chars");
        isValidated = false;
    }

    const Surname = $("#surname").val();
    if (Surname.length < 3) {
        $("#SurnameSpn").html("Surname must be min 3 chars");
        isValidated = false;
    }

    const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Email = $("#email").val();
    if (EmailPattern.test(Email)) {
        // The email is valid
    } else {
        $("#EmailSpn").html("This is not a valid email address");
        isValidated = false;
    }

    const Phone = $("#phone").val();
    if (Phone.length < 10) {
        $("#PhoneSpn").html("Phone must be min 10 chars");
        isValidated = false;
    }

    const EmergencyName = $("#emergencyContactName").val();
    if (EmergencyName.length < 3) {
        $("#EmergencyNameSpn").html("Emergency Name must be min 3 chars");
        isValidated = false;
    }

    const EmergencyNumber = $("#emergencyContactNumber").val();
    if (EmergencyNumber.length < 10) {
        $("#EmergencyNumberSpn").html("Emergency Number must be min 10 chars");
        isValidated = false;
    }

    const Personid = $("#personid").val();
    const Contractb = $("#contractb").val();
    const Contracte = $("#contracte").val();
    //Validate input values

    if (isValidated == false) {
        alert("Complete fields correctly!");
        event.stopPropagation(); // Stop the event from propagating on validation failure
        return;
    }

    else {
        handleSubmit(Name, Surname, Email, Phone, EmergencyName, EmergencyNumber, Contractb, Contracte, roomID);

    }
    //Call method

}

function handleSubmit(_fname, _surname, _email, _phoneNr, _emergencyContactName, _emergencyContactNumber, _contractb, _contracte, roomID) {
    // Create Object
    var newPerson = {
        Name: _fname,
        Surname: _surname,
        Email: _email,
        Phone: _phoneNr,
        EmergencyName: _emergencyContactName,
        EmergencyContactNumber: _emergencyContactNumber,
        BeginningOfContract: _contractb,
        EndOfContract: _contracte,
        RoomID: roomID
    }

    createPerson(newPerson);
    changeRoomStatus(roomID);

}