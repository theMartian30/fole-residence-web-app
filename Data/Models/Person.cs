
namespace Fole_Residence_BackEnd.Data.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string EmergencyName { get; set; }
        public string EmergencyContactNumber { get; set; }
        public string BeginningOfContract { get; set; }
        public string EndOfContract { get; set;}
        public string RoomID { get; set; }

    }
}
