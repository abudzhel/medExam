using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

namespace Models
{
    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class PatientInfo
    {
        //public Path? filePathToSave { get; set; }
        public string? PatientId { get; set; }
        public string? Gender { get; set; }
        public DateTime? Birthdate { get; set; }
        public string? Name { get; set; }
        public DateTime? ExaminationDate { get; set; }
    }
}