import { Injectable } from '@angular/core';
import { Investigation } from 'src/models/investigation.model';
import { MedicalReport } from 'src/models/medical-report.model';
import { Patienteninformationen } from 'src/models/patienteninformationen.model';
import { Prehistory } from 'src/models/prehistory.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {
  private _report!: MedicalReport;
  public get report(): MedicalReport {
    return this._report;
  }
  public set report(value: MedicalReport) {
    this._report = value;
  }
  constructor() { this.report = new MedicalReport() }
  setInvestigationFormData(data : Investigation) {
    this.report.investigation = data;
  }
  setPatientInfoForm(patientInfo : Patienteninformationen) {
    this.report.patientInfo = patientInfo;
  }
  setPrehistory(patientPreHistory : Prehistory) {
    this.report.patientPreHistory = patientPreHistory;
  }
  setFilePath(filePathToSave : string) {
    this.report.filePathToSave = filePathToSave;
  }
}
