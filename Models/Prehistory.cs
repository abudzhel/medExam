using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Models
{
    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class Prehistory
    {
        public string? ActualAnamnesys { get; set; }
        public string? RelevantAdditionalInformation { get; set; }
        public string? PreviousDiagnostics { get; set; }
        public string? PreviousTherapy { get; set; }
        public string? DiagnosticList { get; set; }
        public string? ExposureHistory { get; set; }
        public string? SocialHistory { get; set; }
        public string? FamilyHistory { get; set; }
    }
}