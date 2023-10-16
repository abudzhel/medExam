import { Component, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Prehistory } from "src/models/prehistory.model";
import { ControlsOf } from "src/utills/controls-of-type";
import { FormService } from "src/services/form.service";

@Component({
  selector: 'app-prehistory',
  templateUrl: './prehistory.component.html',
  styleUrls: ['./prehistory.component.css']
})
export class PrehistoryComponent {
  private formService = inject(FormService);

  form: FormGroup<ControlsOf<Prehistory>> = this.formService.medicalReportForm.controls.patientPreHistory;
}
