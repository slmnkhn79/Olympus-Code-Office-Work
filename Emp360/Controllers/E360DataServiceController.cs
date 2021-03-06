﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emp360.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Emp360.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class E360DataServiceController : ControllerBase
    {
        inv_msemployeeContext db = new inv_msemployeeContext();
        tcs_academy_portalContext tb = new tcs_academy_portalContext();
        [HttpGet("[action]")]
        public List<Object> GetEmployeeList(string name)
        {
            

            List<Object> result = new List<object>();

            List<AmPune> employeeList = db.AmPune.Where(a => a.Name.StartsWith(name)).ToList();



            foreach(var employee in employeeList)
            {
                result.Add(new
                {
                    employee.Email,
                    TcsID = employee.Id,
                    employee.Name,
                    GPMvid = employee.Gpmvid,
                    employee.Location
                });
            }

            return result;
        }
        [HttpGet("[action]")]
        public async Task<object> GetEmployeeDetails(string email )        {
            inv_msemployeeContext db = new inv_msemployeeContext();


            var currentEmployee = await db.AmPune.SingleAsync(a => a.Email == email);
            int EmpID = Convert.ToInt32(currentEmployee.Id);
            var deskDetails = await db.DeskAllocationDetails.SingleAsync(a=> a.VId == currentEmployee.Gpmvid);
            var gpmDetails = await db.Gpmmaster.SingleAsync(a => a.Vid == currentEmployee.Gpmvid);
            var competencyDetails = await tb.TFactorData.Where(a => a.EmpID == EmpID ).ToListAsync();
            List<string> competencies = new List<string>();
            foreach(TFactor_Competency_Backup comp in competencyDetails)
            {
                competencies.Add(comp.TFactor_Category);
            }

            object result = new {
                currentEmployee.Name,
                currentEmployee.Email,
                currentEmployee.Id,
                currentEmployee.Location,
                deskDetails.AssetType,
                deskDetails.GPM,
                deskDetails.MachineNo,
                deskDetails.ProjectName,
                deskDetails.SeatNo,
                deskDetails.MsReportingManager,
                gpmDetails.Gpmname,
                competencies

            };
            
            return result;
        }
    }
}