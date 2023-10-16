import { Component, ViewChild, inject } from '@angular/core';
import { InvestigationComponent } from '../investigation/investigation.component';
import { ApiService } from 'src/services/api.service';
import { FormService } from 'src/services/form.service';

@Component({
  selector: 'app-medical-report',
  templateUrl: './medical-report.component.html',
  styleUrls: ['./medical-report.component.css']
})
export class MedicalReportComponent {
  private apiService = inject(ApiService);
  private formService = inject(FormService);
  srcResult: any;

  onSaveButtonPressed() {
    this.apiService.post('medicalreport', this.formService.medicalReportForm.getRawValue()).subscribe()
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
  
  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
    }
  }
}

