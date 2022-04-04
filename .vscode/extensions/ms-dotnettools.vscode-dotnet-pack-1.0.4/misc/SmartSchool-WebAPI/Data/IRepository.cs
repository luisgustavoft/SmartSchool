using System;
using System.Threading.Tasks;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Data
{
    public interface IRepository
    {
         void Add<T>(T entity) where T : class;
         void Update<T>(T entity) where T : class;
         void Delete<T>(T entity) where T : class;
         Task<bool> SaveChangesAsync();

         Task<Aluno[]> GetAllAlunosAsync(bool includeProfessor);
         Task<Aluno[]> GetAlunosAsyncByDisciplinaId(int disciplinaId, bool includeDisciplina);
         Task<Aluno> GetAlunoAsyncById(int alunoId, bool includeProfessor);

         Task<Professor[]> GetAllProfessoresAsync(bool includeAluno);
         Task<Professor> GetProfessorAsyncById(int professorId, bool includeAluno);
         Task<Professor[]> GetProfessoresAsyncByAlunoId (int alunoId, bool includeDisciplina);

        Task<Disciplina[]> GetAllDisciplinasAsync(bool includeAluno, bool includeProfessor);
        Task<Disciplina[]> GetDisciplinasAsyncByAlunoId(int alunoId, bool includeAluno);
        Task<Disciplina[]> GetDisciplinasAsyncByProfessorId(int professorId, bool includeProfessor);
        Task<Disciplina> GetDisciplinaAsyncById(int disciplinaId, bool includeAluno, bool includeProfessor);
    }
}