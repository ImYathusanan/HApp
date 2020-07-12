using DoctorApp.Data.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorApp.Data.Repository
{
    public interface IUnitOfWork
    {
        IDoctorRepository Doctors { get; }
        Task CompleteAsync();
    }
}
