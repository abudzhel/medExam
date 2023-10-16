import { Component, ViewChild, inject } from '@angular/core';
import { InvestigationComponent } from '../investigation/investigation.component';
import { ApiService } from 'src/services/api.service';
import { MedicalService } from 'src/services/medical.service';

@Component({
  selector: 'app-medical-report',
  templateUrl: './medical-report.component.html',
  styleUrls: ['./medical-report.component.css']
})
export class MedicalReportComponent {
  private apiService = inject(ApiService);
  private medicalService = inject(MedicalService);
  srcResult: any;
  onSaveButtonPressed() {
    this.apiService.post('medicalreport', this.medicalService.report).subscribe()
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

