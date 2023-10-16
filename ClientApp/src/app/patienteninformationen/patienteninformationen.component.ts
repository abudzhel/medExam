import { ControlsOf } from "src/utills/controls-of-type";
import { Component, inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Patienteninformationen } from "src/models/patienteninformationen.model";
import { MedicalService } from "../../services/medical.service";

@Component({
  selector: 'app-patienteninformationen',
  templateUrl: './patienteninformationen.component.html',
  styleUrls: ['./patienteninformationen.component.css'],

})
export class PatienteninformationenComponent {
  private formBuilder = inject(FormBuilder);
  constructor(private service: MedicalService) { }

  ngOnInit() {
    this.patientForm.valueChanges.subscribe(values => this.service.setPatientInfoForm(this.patientForm.getRawValue()))
  }
  patientForm: FormGroup<ControlsOf<Patienteninformationen>> = this.formBuilder.nonNullable.group({
    aufnahmenummer: ["", Validators.required],
    gender: [0, Validators.required],
    birthdate: [new Date(), Validators.required],
    name: ["", Validators.required],
    examinationDate: [new Date(), Validators.required]
  });
}
export class DatepickerApiExample {}