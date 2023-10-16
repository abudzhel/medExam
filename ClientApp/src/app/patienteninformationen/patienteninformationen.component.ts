import { ControlsOf } from "src/utills/controls-of-type";
import { Component, inject } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { Patienteninformationen } from "src/models/patienteninformationen.model";
import { FormService } from "src/services/form.service";

@Component({
  selector: 'app-patienteninformationen',
  templateUrl: './patienteninformationen.component.html',
  styleUrls: ['./patienteninformationen.component.css'],

})
export class PatienteninformationenComponent {
  private formService = inject(FormService);
  
  form: FormGroup<ControlsOf<Patienteninformationen>> = this.formService.medicalReportForm.controls.patientInfo;
}