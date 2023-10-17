using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Models
{
    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class MedicalReport
    {
        public string? FilePathToSave { get; set; }
        public Investigation? Investigation { get; set; }
        public PatientInfo? PatientInfo { get; set; }
        public virtual Prehistory? PatientPrehistory { get; set; }
    }
}