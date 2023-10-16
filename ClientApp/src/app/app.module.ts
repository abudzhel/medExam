import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PatienteninformationenComponent } from './patienteninformationen/patienteninformationen.component';
import { PrehistoryComponent } from './prehistory/prehistory.component';
import { InvestigationComponent } from './investigation/investigation.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MedicalReportComponent } from './medical-report/medical-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SideNavComponent,
    PatienteninformationenComponent,
    PrehistoryComponent,
    InvestigationComponent,
    MedicalReportComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent, children: [
          { path: '', component: CounterComponent },
          { path: 'patienteninformationen', component: PatienteninformationenComponent },
          { path: 'prehistory', component: PrehistoryComponent },
          { path: 'investigation', component: InvestigationComponent },
          { path: 'medical-report', component: MedicalReportComponent }
        ]
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
