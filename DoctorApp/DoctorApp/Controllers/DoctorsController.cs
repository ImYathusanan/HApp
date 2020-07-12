using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DoctorApp.Data.Repository;
using DoctorApp.Dtos;
using DoctorApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DoctorApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DoctorsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<DoctorDto>>> GetAllDoctors()
        {
            var doctors = await _unitOfWork.Doctors.GetAll();

            return Ok(_mapper.Map<IReadOnlyList<DoctorDto>>(doctors));
        }

        [HttpGet("{doctorId:int}")]
        public async Task<ActionResult<DoctorDto>> GetDoctor(int doctorId)
        {
            var doctor = await _unitOfWork.Doctors.Get(doctorId);

            if (doctor == null)
                return NotFound();

            return Ok(_mapper.Map<DoctorDto>(doctor));
        }

        [HttpPost]
        public async Task<IActionResult> CreateDoctor([FromBody] DoctorDto doctorDto)
        {
            if (doctorDto == null)
                return BadRequest(ModelState);

            var doctor = _mapper.Map<Doctor>(doctorDto);

            await _unitOfWork.Doctors.CreateAsync(doctor);
            await _unitOfWork.CompleteAsync();

            return Ok();
        }

        [HttpPut("{doctorId:int}")]
        public async Task<IActionResult> UpdateDoctor(int doctorId, [FromBody] DoctorDto doctorDto)
        {
            if (doctorDto == null || doctorId != doctorDto.Id)
                return BadRequest(ModelState);

            var doctor = _mapper.Map<Doctor>(doctorDto);

            _unitOfWork.Doctors.Update(doctor);
            await _unitOfWork.CompleteAsync();

            return Ok();
        }

        [HttpDelete("{doctorId:int}")]
        public async Task<IActionResult> DeleteDoctor(int doctorId)
        {
            var doctor = await _unitOfWork.Doctors.Get(doctorId);

            _unitOfWork.Doctors.Remove(doctor);
            await _unitOfWork.CompleteAsync();

            return Ok();
        }
    }
}
