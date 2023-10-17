using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

namespace Models
{
    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class Investigation
    {
        public bool IsCranialNervesNormal { get; set; }
        public bool IsSmellSenseNormal { get; set; }
        public SmellExam? Smell { get; set; }
        public bool IsCaudalCranialNervesNormal { get; set; }

        public CaudalExam? Caudal { get; set; }
        public bool IsVisualNormal { get; set; }
        public VisionExam? Visual { get; set; }
    }

    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class SniffinSticksResult
    {
        public int ActualVal { get; set; }
        public int MaxVal { get; set; }
    }

    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class SmellExam
    {
        public int Anamnestic { get; set; }
        public SniffinSticksResult? SniffinSticks { get; set; }
        public string? SmellSenseNote;
    }

    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class CaudalExam
    {
        public bool IsSoftPalateChecked { get; set; }
        public bool IsGagChecked { get; set; }
        public bool IsNAccessorius { get; set; }
        public int SoftPalateLifts { get; set; }
        public bool IsRgereflexChecked2 { get; set; }
        public int LeftSternocleidomastoidMuscle { get; set; }
        public int RightSternocleidomastoidMuscle { get; set; }
        public int LeftTrapezius { get; set; }
        public int RightTrapezius { get; set; }
        public string? CaudalCranialNervesNote { get; set; }
    }

    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class VisionExam
    {
        public bool IsSymmetrical { get; set; }
        public EyeExam? LeftEye { get; set; }
        public EyeExam? RightEye { get; set; }
        public string? VisualActivityNote { get; set; }

    }

    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class EyeExam
    {
        public string? AboveTemporalOrNasal { get; set; }
        public string? BelowTemporalOrNasal { get; set; }
        public bool IsCCEnabled { get; set; }
        public int EyeScore { get; set; }
        public bool IsFrostedGlass { get; set; }
        public bool IsRedDesaturation { get; set; }
        public bool IsPainWhenMoving { get; set; }
    }
}