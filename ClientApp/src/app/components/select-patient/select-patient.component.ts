import { Component } from '@angular/core';

@Component({
  selector: 'app-select-patient',
  templateUrl: './select-patient.component.html',
  styleUrls: ['./select-patient.component.css']
})
export class SelectPatientComponent {
  selectedPatient!: { id: string, name: string };
  confirmedPatient!: { id: string, name: string };
  patients: { id: string, name: string }[] = [
    { id: "12345678", name: "jhon" }
  ]
  SelectPatient() {
    this.confirmedPatient = this.selectedPatient;
  }
  CreateNewPatient() {
    this.confirmedPatient = { id : "00000000", name : "Jhon Doe"}
  }
}
