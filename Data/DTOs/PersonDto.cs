namespace Fole_Residence_BackEnd.Data.DTOs
{
    public class PersonDto
    {
        public required string Name { get; set; }
        public required string Surname { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public required string EmergencyName { get; set; }
        public required string EmergencyContactNumber { get; set; }
        public required string BeginningOfContract { get; set; }
        public required string EndOfContract { get; set; }
        public required string RoomID { get; set; }
    }
}
