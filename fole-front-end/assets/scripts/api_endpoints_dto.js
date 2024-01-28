
// JavaScript functions to interact with the People and Room API endpoints, handling DTOs

const baseUrl = 'http://localhost:5068/api'; // Replace with your actual base URL

// Helper function to handle response
const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// People API Endpoints
window.getPersonByRoom = async function (roomId) {
    try {
        const response = await fetch(`${baseUrl}/people/${roomId}`, { method: 'GET' });
        return handleResponse(response);
    }
    catch (error) {
        console.error('Error fetching person by room:', error);
    }

}

window.getPersonByName = async function (name, surname) {
    try {
        const response = await fetch(`${baseUrl}/people/${name}/${surname}`, { method: 'GET' });
        return handleResponse(response);
    }
    catch (error) {
        console.error('Error fetching person by name', error);
    }
}

window.deletePersonByRoom = async function (roomId) {
    try {
        const response = await fetch(`${baseUrl}/people/${roomId}`, { method: 'DELETE' });
        return handleResponse(response);
    }
    catch (error) {
        console.error('Error deletiing person by room', error);
    }
}

window.createPerson = async function (personData) {
    try {
        const response = await fetch(`${baseUrl}/people`, { // Fixed the backtick and single quote issue
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(personData), // Serialize the personData to JSON
        });

        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching person by room:', error);
    }
}



// Room API Endpoints

window.getRoomById = async function (roomid) {
    try {
        const response = await fetch(`${baseUrl}/rooms/${roomid}`, { method: 'GET' });
        return handleResponse(response);
    }
    catch (error) {
        console.error('Error fetching room by id', error);
    }

}

window.getAllRooms = async function () {
    try {
        const response = await fetch(`${baseUrl}/rooms`, { method: 'GET' });
        return handleResponse(response);
    }
    catch (error) {
        console.error('Error fetching all rooms', error);
    }

}


window.getFloorPlan = async function (building, floor) {
    try {
        const response = await fetch(`${baseUrl}/rooms/${building}/${floor}`, { method: 'GET' });
        return handleResponse(response);
    }
    catch (error) {
        console.error('Error fetching the floor plan', error);
    }
}

window.getRoomsFilter = async function (building, floor, status) {
    try {
        const response = await fetch(`${baseUrl}/rooms/${building}/${floor}/${status}`,
            { method: 'GET' });
        return handleResponse(response);
    }
    catch (error) {
        console.error('Error fetching rooms by filter', error);
    }

}

window.changeRoomStatus = async function (roomId) {
    try {
        const response = await fetch(`${baseUrl}/rooms/${roomId}`, { method: 'PUT', });
        return handleResponse(response);
    } catch (error) {
        console.error('Error changing the room status', error);
    }
}