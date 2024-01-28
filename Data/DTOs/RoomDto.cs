namespace Fole_Residence_BackEnd.Data.DTOs
{
    public class RoomDto
    {
        public required string Building { get; set; }
        public required string Floor { get; set; }
        public required string RoomNr { get; set; }
        public required string Type { get; set; }
        public required bool Occupied { get; set; }
    }
}
