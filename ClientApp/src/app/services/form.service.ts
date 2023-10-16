import { Injectable, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Investigation, PatientInfo, Prehistory, MedicalReport } from "../models";
import { ControlsOf } from "../utills/controls-of-type";


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formBuilder = inject(FormBuilder);

  private investigationForm: FormGroup<ControlsOf<Investigation>> = this.formBuilder.nonNullable.group({
    isCranialNervesNormal: [false, Validators.required],

    isSmellSenseNormal: [false, Validators.required],
    smell: this.formBuilder.nonNullable.group({
      anamnestic: 0,
      sniffinSticks: this.formBuilder.nonNullable.group({
        actualVal: 0,
        maxVal: 0
      }),
      smellSenseNote: ''
    }),

    isCaudalCranialNervesNormal: [false, Validators.required],
    caudal: this.formBuilder.nonNullable.group({
      isSoftPalateChecked: false,
      // TODO: Fix the name later with Christian WÃƒÂ¼rgereflex geprüf
      isGagChecked: false,
      isNAccessorius: false,
      SoftPalateLifts: 0,
      // TODO: Fix the name later with Christian WÃƒÂ¼rgeflex auslÃƒÂ¶sbar
      isRgereflexChecked2: false,
      leftSternocleidomastoidMuscle: 0,
      rightSternocleidomastoidMuscle: 0,
      leftTrapezius: 0,
      rightTrapezius: 0,
      caudalCranialNervesNote: '',
    }),

    isVisualNormal: [false, Validators.required],
    visual: this.formBuilder.nonNullable.group({
      isSymmetrical: false,
      leftEye: this.formBuilder.nonNullable.group({
        AboveTemporalOrNasal: '',
        BelowTemporalOrNasal: '',
        isCCEnabled: false,
        eyeScore: 0,
        isFrostedGlass: false,
        isRedDesaturation: false,
        isPainWhenMoving: false,
      }),
      rightEye: this.formBuilder.nonNullable.group({
        AboveTemporalOrNasal: '',
        BelowTemporalOrNasal: '',
        isCCEnabled: false,
        eyeScore: 0,
        isFrostedGlass: false,
        isRedDesaturation: false,
        isPainWhenMoving: false,
      }),
      visualActivityNote: '',

    })
  });

  private infoForm: FormGroup<ControlsOf<PatientInfo>> = this.formBuilder.nonNullable.group({
    Patient_id: ["Unknonwn", Validators.required],
    gender: ["NB", Validators.required],
    birthdate: [new Date(), Validators.required],
    name: ["", Validators.required],
    examinationDate: [new Date(), Validators.required]
  });

  private prehistoryForm: FormGroup<ControlsOf<Prehistory>> = this.formBuilder.nonNullable.group({
    actualAnamnesys: ["", Validators.required],
    relevantAdditionalInformation: ["", Validators.required],
    previousDiagnostics: ["", Validators.required],
    previousTherapy: ["", Validators.required],
    diagnosticList: ["", Validators.required],
    exposureHistory: ["", Validators.required],
    socialHistory: ["", Validators.required],
    familyHistory: ["", Validators.required]
  });

  medicalReportForm: FormGroup<ControlsOf<MedicalReport>> = this.formBuilder.nonNullable.group({
    filePathToSave: ['', Validators.required],
    investigation: this.investigationForm,
    patientInfo: this.infoForm,
    patientPreHistory: this.prehistoryForm
})
}
