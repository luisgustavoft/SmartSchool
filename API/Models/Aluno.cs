using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartSchool_WebAPI.Models
{
    public class Aluno
    {
        public Aluno() { }


        public Aluno(int id, string nome, string sobrenome, string telefone)
        {
            Id = id;
            Nome = nome;
            Sobrenome = sobrenome;
            Telefone = telefone;
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Telefone { get; set; }
        public int DisciplinaId { get; set; }
        [ForeignKey("DisciplinaId")]
        public Disciplina Disciplina { get; set; }

    }
}
