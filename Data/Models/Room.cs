namespace Fole_Residence_BackEnd.Data.Models
{
    public class Room
    {
        public string Id { get; set; }
        public string Building { get; set; }
        public string Floor { get; set; }
        public string RoomNr { get; set; }
        public string Type { get; set; }
        public bool Occupied { get; set; }

    }
}
