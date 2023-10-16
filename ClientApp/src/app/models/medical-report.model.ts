import { Investigation } from "./investigation.model";
import { PatientInfo } from "./patient-info.model";
import { Prehistory } from "./prehistory.model";

export class MedicalReport {
    filePathToSave!: string;
    investigation!: Investigation;
    patientInfo!: PatientInfo;
    patientPreHistory!: Prehistory;
}
