import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Patienteninformationen } from "src/models/patienteninformationen.model";
import { Prehistory } from "src/models/prehistory.model";
import { ControlsOf } from "src/utills/controls-of-type";
import { MedicalService } from "../../services/medical.service";

@Component({
  selector: 'app-prehistory',
  templateUrl: './prehistory.component.html',
  styleUrls: ['./prehistory.component.css']
})
export class PrehistoryComponent {
  private formBuilder = inject(FormBuilder);
  private service = inject(MedicalService);
  constructor() { }

  ngOnInit() {
    this.Form.valueChanges.subscribe(values => this.service.setPrehistory(this.Form.getRawValue()))
  }

  Form: FormGroup<ControlsOf<Prehistory>> = this.formBuilder.nonNullable.group({
    actualAnamnesys: ["", Validators.required],
    relevantAdditionalInformation: ["", Validators.required],
    previousDiagnostics: ["", Validators.required],
    previousTherapy: ["", Validators.required],
    diagnosticList: ["", Validators.required],
    exposureHistory: ["", Validators.required],
    socialHistory: ["", Validators.required],
    familyHistory: ["", Validators.required]
  });
}
