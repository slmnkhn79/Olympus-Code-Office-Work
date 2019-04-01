using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emp360.Models
{
    public partial class TFactor_Competency_Backup
    {
        public int Id { get; set; }
        public string TFactor_Category { get; set; }
        public int EmpID { get; set; }
    }
}
