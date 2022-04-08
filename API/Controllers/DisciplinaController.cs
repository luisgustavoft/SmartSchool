using System;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebAPI.Data;
using SmartSchool_WebAPI.Models;
using System.Threading.Tasks;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class DisciplinaController : Controller
    {
        private readonly IRepository _repo;

        public DisciplinaController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repo.GetAllDisciplinasAsync(true, true);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("{DisciplinaId}")]
        public async Task<IActionResult> GetByDisciplinaId(int DisciplinaId)
        {
            try
            {
                var result = await _repo.GetDisciplinaAsyncById(DisciplinaId, true, true);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("ByAluno/{alunoId}")]
        public async Task<IActionResult> GetByAlunoId(int alunoId)
        {
            try
            {
                var result = await _repo.GetDisciplinasAsyncByAlunoId(alunoId, false);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

        }

        [HttpGet("ByProfessor/{professorId}")]
        public async Task<IActionResult> GetByProfessorId(int professorId)
        {
            try
            {
                var result = await _repo.GetDisciplinasAsyncByProfessorId(professorId, false);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Disciplina model)
        {
            try
            {
                _repo.Add(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
            return BadRequest();
        }

        [HttpPut("{disciplinaId}")]
        public async Task<IActionResult> Put(int disciplinaId, Disciplina model)
        {
            try
            {
                var disciplina = await _repo.GetDisciplinaAsyncById(disciplinaId, false, false);
                if (disciplina == null) return NotFound("Disciplina não encontrada");

                _repo.Update(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{disciplinaId}")]
        public async Task<IActionResult> Delete(int disciplinaId)
        {
            try
            {
                var disciplina = await _repo.GetDisciplinaAsyncById(disciplinaId, false, false);
                if (disciplina == null) return NotFound();

                _repo.Delete(disciplina);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(new { message = "Deletado" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
            return BadRequest();
        }
    }
}

 





