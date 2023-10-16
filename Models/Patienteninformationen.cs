using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Patienteninformationen
    {
        //public Path? filePathToSave { get; set; }
        public string? Patient_id { get; set; }
        public int? Gender { get; set; }
        public DateTime? Birthdate { get; set; }
        public string? Name { get; set; }
        public DateTime? ExaminationDate { get; set; }
    }
}