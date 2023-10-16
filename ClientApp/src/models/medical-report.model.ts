import { Investigation } from "./investigation.model";
import { Patienteninformationen } from "./patienteninformationen.model";
import { Prehistory } from "./prehistory.model";

export class MedicalReport {
    filePathToSave!: string;
    investigation!: Investigation;
    patientInfo!: Patienteninformationen;
    patientPreHistory!: Prehistory;
}
