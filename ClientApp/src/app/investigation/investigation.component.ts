import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Investigation } from 'src/models/investigation.model';
import { ControlsOf } from 'src/utills/controls-of-type';
import { FormService } from 'src/services/form.service';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.css']
})
export class InvestigationComponent {
  private formService = inject(FormService);
  form: FormGroup<ControlsOf<Investigation>> = this.formService.medicalReportForm.controls.investigation;

  sliderFormatter(value: number): string {
    return value + ""
  }
  
  sliderAnamestischFormatter(value: number): string {
    switch (value) {
      case 0:
        return "keine Hyposmie"
        break;
      case 1:
        return "leichte Hyposmie"
        break;
      case 2:
        return "starke Hyposmie"
        break;
      case 3:
        return "Anosmie"
        break;
    }
    return value + ""
  }

  sliderSoftPalateFormatter(value: number): string {
    switch (value) {
      case 0:
        return "links nicht"
        break;
      case 1:
        return "links vermindert"
        break;
      case 2:
        return "symmetrish"
        break;
      case 3:
        return "rechts vermindert"
        break;
      case 4:
        return "rechts nicht"
        break;
    }
    return value + ""
  }
}
