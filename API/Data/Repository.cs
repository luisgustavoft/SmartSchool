using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<Aluno[]> GetAllAlunosAsync(bool includeDisciplina = false)
        {
            IQueryable<Aluno> query = _context.Alunos;

            if (includeDisciplina)
            {
                query = query.Include(pe => pe.Disciplina);
                             
            }

            query = query.OrderBy(c => c.Id);

            return await query.ToArrayAsync();
        }
        public async Task<Aluno> GetAlunoAsyncById(int alunoId, bool includeDisciplina)
        {
            IQueryable<Aluno> query = _context.Alunos;

            if (includeDisciplina)
            {
                query = query.Include(a => a.Disciplina);
                             
            }

            query = query.AsNoTracking()
                         .OrderBy(aluno => aluno.Id)
                         .Where(aluno => aluno.Id == alunoId);

            return await query.FirstOrDefaultAsync();
        }
        public async Task<Aluno[]> GetAlunosAsyncByDisciplinaId(int disciplinaId, bool includeDisciplina)
        {
            IQueryable<Aluno> query = _context.Alunos;

            if (includeDisciplina)
            {
                query = query.Include(b => b.Disciplina);
            }

            query = query.AsNoTracking()
                         .OrderBy(aluno => aluno.Id)
                         .Where(aluno => aluno.Disciplina.Id == disciplinaId);

            return await query.ToArrayAsync();
        }

        public async Task<Professor[]> GetProfessoresAsyncByAlunoId(int alunoId, bool includeDisciplina)
        {
            IQueryable<Professor> query = _context.Professores;

            if (includeDisciplina)
            {
                query = query.Include(p => p.Disciplinas);
                             
            }

            query = query.AsNoTracking()
                         .OrderBy(professor => professor.Id)
                         .Where(professor => professor.Disciplinas.Any(d=>d.Aluno.Id == alunoId));

            return await query.ToArrayAsync();
        }

        public async Task<Professor[]> GetAllProfessoresAsync(bool includeDisciplinas = true)
        {
            IQueryable<Professor> query = _context.Professores;

            if (includeDisciplinas)
            {
                query = query.Include(c => c.Disciplinas);
            }

            query = query.AsNoTracking()
                         .OrderBy(professor => professor.Id);

            return await query.ToArrayAsync();
        }
        public async Task<Professor> GetProfessorAsyncById(int professorId, bool includeDisciplinas = true)
        {
            IQueryable<Professor> query = _context.Professores;

            if (includeDisciplinas)
            {
                query = query.Include(pe => pe.Disciplinas);
            }

            query = query.AsNoTracking()
                         .OrderBy(professor => professor.Id)
                         .Where(professor => professor.Id == professorId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Disciplina[]> GetAllDisciplinasAsync(bool includeAluno, bool includeProfessor = false)
        {
            IQueryable<Disciplina> query = _context.Disciplinas;

            //if (includeProfessor)
           // {
              // query = query.Include(pe => pe.AlunosDisciplinas)
                         //    .ThenInclude(ad => ad.Disciplina);
                             
           // }
               // query = query.AsNoTracking()
                           //  .OrderBy(c => c.Id);

           return await query.ToArrayAsync();
        }

        public async Task<Disciplina[]> GetDisciplinasAsyncByAlunoId(int alunoId, bool includeAluno)
        {
            IQueryable<Disciplina> query = _context.Disciplinas;

            if (includeAluno)
            {
                query = query.Include(p => p.Aluno);
                             
                           
            }
            query = query.AsNoTracking()
                         .OrderBy(aluno => aluno.Id)
                         .Where(aluno => aluno.Aluno.Id == alunoId);

            return await query.ToArrayAsync();
        }

       
        public async Task<Disciplina> GetDisciplinaAsyncById(int disciplinaId, bool includeAluno, bool includeProfessor)
        {
            IQueryable<Disciplina> query = _context.Disciplinas;

            //if (includeAluno)
          //  {
              //  query = query.Include(pe => pe.AlunosDisciplinas)
                            // .ThenInclude(ad => ad.Disciplina)
                             //.ThenInclude(d => d.Professor);
          //  }
              //  query = query.AsNoTracking()
                            //.OrderBy(c => c.Id);


            return await query.FirstOrDefaultAsync();
        }
    
       public async Task<Disciplina[]> GetDisciplinasAsyncByProfessorId(int professorId, bool includeProfessor)
        {
            IQueryable<Disciplina> query = _context.Disciplinas;

            if (includeProfessor)
            {
                query = query.Include(pe => pe.Nome);
                            
                            
            }
               query = query.AsNoTracking()
                            .OrderBy(aluno => aluno.Id)
                            .Where(aluno => aluno.ProfessorId == professorId);

            return await query.ToArrayAsync();
        }
    
            
    }

}    

    
     
