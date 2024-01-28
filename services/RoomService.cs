using Fole_Residence_BackEnd.Data;
using Fole_Residence_BackEnd.Data.DTOs;
using Fole_Residence_BackEnd.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace Fole_Residence_BackEnd.services
{
    public interface IRoomService
    {
        Task<RoomDto[]> GetAllRooms();
        Task<RoomDto> GetRoomById(string id);
        Task<RoomDto[]> GetFloorPlan(string building, string floor);
        Task<RoomDto[]> GetRoomsFilter(string building, string floor, Boolean occupied);
        Task<Room> ChangeRoomStatus(string id);
    }

    public class RoomService : IRoomService
    {
        private readonly MyDBContext _context;

        public RoomService(MyDBContext context)
        {
            _context = context;
        }

        public static RoomDto ConvertToRoomDto(Room room)
        {
            return new RoomDto
            {
                Building = room.Building,
                Floor = room.Floor,
                RoomNr = room.RoomNr,
                Type = room.Type,
                Occupied = room.Occupied
            };
        }

        public static RoomDto[] ConvertToRoomDtoArr(Room[] room)
        {
            RoomDto[] newRoom= new RoomDto[room.Length];
            for (int i = 0; i < room.Length; i++)
            {
                newRoom[i]= ConvertToRoomDto(room[i]);
            }

            return newRoom;
        }

        public async Task<Room> ChangeRoomStatus(string id)
        {
            var entity = _context.Room
                                .Where(e => e.Id == id)
                                .FirstOrDefault();
            if (entity == null)
            {
                return null;
            }
            entity.Occupied = !entity.Occupied;
            _context.SaveChanges();
            return entity;
        }

        public async Task<RoomDto[]> GetAllRooms()
        {
            var rooms = await _context.Room.ToArrayAsync();

            return ConvertToRoomDtoArr(rooms);
        }

        public async Task<RoomDto[]> GetFloorPlan(string building, string floor)
        {
            var entities = await _context.Room
                                .Where(e => e.Building == building && e.Floor == floor)
                                .ToArrayAsync();
            if (entities == null)
            {
                return null;
            }
            return ConvertToRoomDtoArr(entities);

        }

        public async Task<RoomDto> GetRoomById(string id)
        {
            var entity = await _context.Room
                                  .Where(e => e.Id == id)
                                  .FirstOrDefaultAsync();
            if (entity == null)
            {
                return null;
            }
            return ConvertToRoomDto(entity);
        }

        public async Task<RoomDto[]> GetRoomsFilter(string building, string floor, bool occupied)
        {
            var entities = await _context.Room
                                .Where(e => e.Building == building && e.Floor == floor && e.Occupied == occupied)
                                .ToArrayAsync();
            if (entities == null)
            {
                return null;
            }
            return ConvertToRoomDtoArr(entities);
        }
    }
}
