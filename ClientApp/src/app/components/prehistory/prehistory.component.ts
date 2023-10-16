import { Component, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Prehistory } from "src/app/models";
import { FormService } from "src/app/services";
import { ControlsOf } from "src/app/utills/controls-of-type";


@Component({
  selector: 'app-prehistory',
  templateUrl: './prehistory.component.html',
  styleUrls: ['./prehistory.component.css']
})
export class PrehistoryComponent {
  private formService = inject(FormService);

  form: FormGroup<ControlsOf<Prehistory>> = this.formService.medicalReportForm.controls.patientPreHistory;
}
