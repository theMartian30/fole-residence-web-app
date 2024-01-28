using Fole_Residence_BackEnd.Data.DTOs;
using Fole_Residence_BackEnd.services;
using Microsoft.AspNetCore.Mvc;

namespace Fole_Residence_BackEnd.Controllers
{
    [Route("api/rooms")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRoomService _roomservice;

        public RoomController(IRoomService roomservice)
        {
            _roomservice = roomservice;
        }

        [HttpGet("{roomid}")]
        public async Task<IActionResult> GetRoomById(string roomid)
        {
            var roomDto = await _roomservice.GetRoomById(roomid);

            if (roomDto == null)
            {
                return NotFound();
            }

            return Ok(roomDto);

        }

        [HttpGet]
        public async Task<IActionResult> GetAllRooms()
        {
            var roomDto = await _roomservice.GetAllRooms();

            if (roomDto == null)
            {
                return NotFound();
            }

            return Ok(roomDto);

        }


        [HttpGet("{building}/{floor}")]
        public async Task<IActionResult> GetFloorPlan(string building, string floor)
        {
            var roomDto = await _roomservice.GetFloorPlan(building,floor);

            if (roomDto == null)
            {
                return NotFound();
            }

            return Ok(roomDto);

        }


        [HttpGet("{building}/{floor}/{status}")]
        public async Task<IActionResult> GetRoomsFilter(string building, string floor, Boolean status)
        {
            var roomDto = await _roomservice.GetRoomsFilter(building, floor,status);

            if (roomDto == null)
            {
                return NotFound();
            }

            return Ok(roomDto);

        }

        [HttpPut("{roomid}")]
        public async Task<IActionResult> ChangeRoomStatus(string roomid)
        {
            var roomDto = await _roomservice.ChangeRoomStatus(roomid);

            if (roomDto == null)
            {
                return NotFound();
            }

            return Ok(roomDto);

        }

    }
}
