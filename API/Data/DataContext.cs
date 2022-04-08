using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext() { }
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
            {
                options.UseSqlite("Data Source=SmartSchool.db");
            }
        }

        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Professor> Professores { get; set; }
        public DbSet<Disciplina> Disciplinas { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {


        }
    }
}
