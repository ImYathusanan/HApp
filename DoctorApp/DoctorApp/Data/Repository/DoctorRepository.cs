using DoctorApp.Data.Repository.IRepository;
using DoctorApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorApp.Data.Repository
{
    public class DoctorRepository : Repository<Doctor>, IDoctorRepository
    {
       
        public DoctorRepository(ApplicationDbContext context)
            : base(context)
        {
           
        }

        
    }
}
