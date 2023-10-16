using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Prehistory
    {
        public string? actualAnamnesys { get; set; }
        public string? relevantAdditionalInformation { get; set; }
        public string? previousDiagnostics { get; set; }
        public string? previousTherapy { get; set; }
        public string? diagnosticList { get; set; }
        public string? exposureHistory { get; set; }
        public string? socialHistory { get; set; }
        public string? familyHistory { get; set; }
    }
}