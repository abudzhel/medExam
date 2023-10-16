using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Models
{
    public class Investigation
    {
        public bool isCranialNervesNormal { get; set; }
        public bool isSmellSenseNormal { get; set; }
        public SmellExam? smell { get; set; }
        public bool isCaudalCranialNervesNormal { get; set; }

        public CaudalExam? caudal { get; set; }
        public bool isVisualNormal { get; set; }
        public VisionExam? visual { get; set; }
    }
    public class sniffinSticksResult
    {
        public int actualVal { get; set; }
        public int maxVal { get; set; }
    }
    public class SmellExam
    {
        public int anamnestic { get; set; }

        public sniffinSticksResult? sniffinSticks { get; set; }

        public string? smellSenseNote;
    }

    public class CaudalExam
    {
        public bool isSoftPalateChecked { get; set; }
        public bool isGagChecked { get; set; }
        public bool isNAccessorius { get; set; }
        public int SoftPalateLifts { get; set; }
        public bool isRgereflexChecked2 { get; set; }
        public int leftSternocleidomastoidMuscle { get; set; }
        public int rightSternocleidomastoidMuscle { get; set; }
        public int leftTrapezius { get; set; }
        public int rightTrapezius { get; set; }
        public string? caudalCranialNervesNote { get; set; }
    }

    public class VisionExam
    {
        public bool isSymmetrical { get; set; }
        public EyeExam? leftEye { get; set; }
        public EyeExam? rightEye { get; set; }
        public string? visualActivityNote { get; set; }

    }
    
    public class EyeExam
    {
        public string? AboveTemporalOrNasal { get; set; }
        public string? BelowTemporalOrNasal { get; set; }
        public bool isCCEnabled { get; set; }
        public int eyeScore { get; set; }
        public bool isFrostedGlass { get; set; }
        public bool isRedDesaturation { get; set; }
        public bool isPainWhenMoving { get; set; }
    }
}