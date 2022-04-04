using Microsoft.EntityFrameworkCore.Migrations;

namespace SmartSchool_WebAPI.Migrations
{
    public partial class ajuste : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "nome",
                table: "Professores",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Professores",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Professores",
                newName: "nome");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Professores",
                newName: "id");
        }
    }
}
