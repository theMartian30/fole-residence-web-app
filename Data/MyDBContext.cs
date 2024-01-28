using Microsoft.EntityFrameworkCore;
using Fole_Residence_BackEnd.Data.Models;

namespace Fole_Residence_BackEnd.Data
{
    public class MyDBContext : DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
        {
            
        }

        public DbSet<Models.Person> Person { get; set; }
        public DbSet<Models.Room> Room { get; set; }
    }
}
