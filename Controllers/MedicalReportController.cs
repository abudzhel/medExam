using Microsoft.AspNetCore.Mvc;
using Models;
using Newtonsoft.Json;
using System.Runtime.InteropServices;
namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MedicalReportController : ControllerBase
    {
        readonly string pathToReports = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "//scores";

        private readonly ILogger<MedicalReportController> _logger;

        public MedicalReportController(ILogger<MedicalReportController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async void Post([FromBody] MedicalReport report)
        {
            _logger.LogInformation("Received Post");
            // Set a variable to the Documents path.
            string docPath = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

            // Write the specified text asynchronously to a new file named "WriteTextAsync.txt".
            using (StreamWriter outputFile = new StreamWriter(Path.Combine(pathToReports, /*"WriteTextAsync.json"*/ report.PatientInfo.PatientId)))
            {
                await outputFile.WriteAsync(JsonConvert.SerializeObject(report, Formatting.Indented));
            }
        }
    }
}