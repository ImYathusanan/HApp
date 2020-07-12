using AutoMapper;
using DoctorApp.Dtos;
using DoctorApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorApp.Mapping
{
    public class DoctorMapping : Profile
    {
        public DoctorMapping()
        {
            CreateMap<Doctor, DoctorDto>().ReverseMap();
        }
    }
}
