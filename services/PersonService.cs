using Fole_Residence_BackEnd.Data;
using Fole_Residence_BackEnd.Data.DTOs;
using Fole_Residence_BackEnd.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Xml.Linq;
using static Azure.Core.HttpHeader;

namespace Fole_Residence_BackEnd.services
{
    public interface IPersonService
    {
        Task<PersonDto> GetPersonByRoom(string roomid);
        Task<PersonDto> GetPersonByName(string name,string surname);
        Task<PersonDto> DeletePersonByRoom(string roomid);
        Task<Person> PutPerson(PersonDto dto);
    }

    public class PersonService : IPersonService
    {
        private readonly MyDBContext _context;

        public PersonService(MyDBContext context)
        {
            _context = context;
        }

        private static PersonDto MapPersonToDto(Person entity)
        {
            var dto = new PersonDto
            {
               Name=entity.Name,
               Surname=entity.Surname,
               Email=entity.Email,
               EmergencyContactNumber=entity.EmergencyContactNumber,
               EmergencyName=entity.EmergencyName,
               BeginningOfContract=entity.BeginningOfContract,
               EndOfContract=entity.EndOfContract,
               RoomID=entity.RoomID,
               Phone=entity.Phone,

            };

            return dto;
        }


        public async Task<PersonDto> GetPersonByRoom(string roomId)
        {
            var entity = await _context.Person
                                   .Where(e => e.RoomID == roomId)
                                   .FirstOrDefaultAsync();

            if (entity == null)
            {
                return null;
            }
            return MapPersonToDto(entity);
        }

        public async Task<PersonDto> GetPersonByName(string name, string surname)
        {
            var entity = await _context.Person
                                  .Where(e => e.Name == name && e.Surname == surname)
                                  .FirstOrDefaultAsync();
            if (entity == null)
            {
                return null;
            }
            return MapPersonToDto(entity);
        }

        public async Task<PersonDto> DeletePersonByRoom(string roomid)
        {
            var entity = await _context.Person
                                 .Where(e => e.RoomID==roomid)
                                 .FirstOrDefaultAsync();
            if (entity == null)
            {
                return null;
            }
            _context.Person.Remove(entity);
            await _context.SaveChangesAsync();

            return MapPersonToDto(entity);

        }

        public async Task<Person> PutPerson(PersonDto dto)
        {
            var person = new Person
            {
                Name = dto.Name,
                Surname = dto.Surname,
                Email = dto.Email,
                Phone = dto.Phone,
                EmergencyName = dto.EmergencyName,
                EmergencyContactNumber = dto.EmergencyContactNumber,
                BeginningOfContract = dto.BeginningOfContract,
                EndOfContract = dto.EndOfContract,
                RoomID = dto.RoomID
            };

            _context.Person.Add(person);

            await _context.SaveChangesAsync();

            return person;
        }

    }
}
