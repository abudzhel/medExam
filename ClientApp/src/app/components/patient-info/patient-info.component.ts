import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { PatientInfo } from "src/app/models";
import { FormService } from "src/app/services";
import { ControlsOf } from "src/app/utills/controls-of-type";


@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientInfoComponent {
  private formService = inject(FormService);

  form: FormGroup<ControlsOf<PatientInfo>> = this.formService.medicalReportForm.controls.patientInfo;

}
