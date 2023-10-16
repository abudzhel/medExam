export class Investigation {
    isCranialNervesNormal!: boolean;
    // ---------sense of smell, geruchssinn ------- Consider moving to a different model
    isSmellSenseNormal!: boolean;
    smell!: SmellExam;
    // // ---------Caudal cranial nerves, Kaudale Hirnnerven ------- Consider moving to a different model
    isCaudalCranialNervesNormal!: boolean;
    caudal!: CaudalExam;
    // // // ---------- Visual acuity and field of view checked ----------------
    isVisualNormal!: boolean;
    visual!: VisionExam;
}

// commentedd this shit out
// export class InvestigationForm {
//     isCranialNervesNormal!: boolean;
//     // ---------sense of smell, geruchssinn ------- Consider moving to a different model
//     smell!: SmellSenseForm;
//     // // ---------Caudal cranial nerves, Kaudale Hirnnerven ------- Consider moving to a different model
//     // caudal!: CaudalExam;
//     // // ---------- Visual acuity and field of view checked ----------------
//     // visual!: VisionExam;
// }
export interface SmellExam {
    anamnestic: number;
    sniffinSticks: { actualVal: number, maxVal: number };
    smellSenseNote: string;
}
export class CaudalExam {
    isSoftPalateChecked!: boolean;
    // Fix the name later with Christian WÃƒÂ¼rgereflex geprüf
    isGagChecked!: boolean;
    isNAccessorius!: boolean;
    SoftPalateLifts!: number;
    // // Fix the name later with Christian WÃƒÂ¼rgeflex auslÃƒÂ¶sbar
    isRgereflexChecked2!: boolean;
    leftSternocleidomastoidMuscle!: number;
    rightSternocleidomastoidMuscle!: number;
    leftTrapezius!: number;
    rightTrapezius!: number;
    caudalCranialNervesNote!: string;
}
export class VisionExam{
    isSymmetrical!: boolean;
    leftEye!: EyeExam;
    rightEye!: EyeExam;
    visualActivityNote!: string;
}
export class EyeExam {
    AboveTemporalOrNasal!: string;
    BelowTemporalOrNasal!: string;
    isCCEnabled!: boolean;
    eyeScore!: number;
    isFrostedGlass!: boolean;
    isRedDesaturation!: boolean;
    isPainWhenMoving!: boolean;
}