using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorApp.Data.Repository.IRepository
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task<TEntity> Get(int id);
        Task<IEnumerable<TEntity>> GetAll();

        Task<TEntity> CreateAsync(TEntity entity);

        void Remove(TEntity entity);

        void Update(TEntity entity);
    }
}
