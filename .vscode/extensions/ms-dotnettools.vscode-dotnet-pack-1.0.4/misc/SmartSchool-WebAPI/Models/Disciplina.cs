using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Models
{
    public class Disciplina
    {
        public Disciplina() { }

        public Disciplina(int id, string nome, int professorId)

        {
            Id = id;
            Nome = nome;
            ProfessorId = professorId;
            
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public int ProfessorId { get; set; }
        [ForeignKey("AlunoId")]
        public Aluno Aluno { get; set; }
    }
}