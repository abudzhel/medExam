using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Models
{
    public class MedicalReport
    {
        //public Path? filePathToSave { get; set; }
        //[JsonProperty("name")]
        public string? Name { get; set; }
        public Investigation? investigation { get; set; }
        public Patienteninformationen? patientInfo { get; set; }
        public virtual Prehistory? PatientPrehistory { get; set; }
    }
}