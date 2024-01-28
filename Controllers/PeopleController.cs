using Fole_Residence_BackEnd.Data;
using Fole_Residence_BackEnd.Data.DTOs;
using Fole_Residence_BackEnd.Data.Models;
using Fole_Residence_BackEnd.services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace Fole_Residence_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly IPersonService _personservice;

        public PeopleController(IPersonService personservice)
        {
            _personservice = personservice;
        }

        [HttpGet("{roomid}")]
        public async Task<IActionResult> GetPersonByRoom(string roomid)
        {
            var personDto = await _personservice.GetPersonByRoom(roomid);

            if (personDto == null)
            {
                return NotFound();
            }

            return Ok(personDto);
        }

        [HttpGet("{name}/{surname}")]
        public async Task<IActionResult> GetPersonByName(string name,string surname)
        {
            var personDto = await _personservice.GetPersonByName(name,surname);

            if (personDto == null)
            {
                return NotFound();
            }

            return Ok(personDto);
        }

        [HttpDelete("{roomid}")]
        public async Task<IActionResult> DeletePersonByRoom(string roomid)
        {
            var personDto = await _personservice.DeletePersonByRoom(roomid);

            if (personDto == null)
            {
                return NotFound();
            }

            return Ok(personDto);


        }

        [HttpPost]
        public async Task<ActionResult> PostPerson([FromBody] PersonDto personDto)
        {
            try
            {
                var person = await _personservice.PutPerson(personDto);
                return Ok(person);
            }
            catch (Exception ex)
            {
                return NotFound();
            }

        }

    }
}
