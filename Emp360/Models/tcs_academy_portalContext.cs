using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Emp360.Models
{
    public class tcs_academy_portalContext : DbContext
    {
        public tcs_academy_portalContext()
        {
        }

        public tcs_academy_portalContext(DbContextOptions<tcs_academy_portalContext> options)
            : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables(); ;
            IConfiguration Configuration = builder.Build();
            var learningConnection = Configuration.GetConnectionString("learningConnection");
            optionsBuilder.UseSqlServer(learningConnection);
        }

    }
}
