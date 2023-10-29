using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.FileIO;
using Models;
using Newtonsoft.Json;
using System.Runtime.InteropServices;
using System;
using System.IO;
using System.Runtime.CompilerServices;
using System.Numerics;
using MedicalApp.Classes;
using MedicalApp.Services;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MedicalReportController : ControllerBase
    {
        readonly string pathToReports = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "//scores";
        private readonly ILogger<MedicalReportController> _logger;
        private readonly MedicalAppService _medApp;
        public MedicalReportController(ILogger<MedicalReportController> logger, MedicalAppService medApp)
        {
            _logger = logger;
            _medApp = medApp;
        }

        [HttpPost]
        public async void Post([FromBody] MedicalReport report)
        {
            var Questions_per_File_Json = _medApp.getQuestionsTable();
            _logger.LogInformation("Received Post");
            // Write the specified text asynchronously to a new file named "WriteTextAsync.txt".
            using (StreamWriter outputFile = new StreamWriter(Path.Combine(pathToReports, report.PatientInfo.PatientId)))
                {
                await outputFile.WriteAsync(JsonConvert.SerializeObject(report, Formatting.Indented));
            }
        }
    }
}