using Microsoft.AspNetCore.Mvc;
using Models;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MedicalReportController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<MedicalReportController> _logger;

        public MedicalReportController(ILogger<MedicalReportController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public void Post([FromBody] MedicalReport report)
        {
            _logger.LogInformation("Received Post");
        }
    }
}