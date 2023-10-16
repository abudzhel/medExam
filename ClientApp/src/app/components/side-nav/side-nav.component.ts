import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  links:{url:string, text:string}[] = [
    {url: "patient-info", text: "Patienteninformationen"},
    {url: "prehistory", text: "Vorgeschichte"},
    // {url: "aktuelle-anamnese", text: "Aktuelle Anamnese"},
    // {url: "fragebogen", text: "Fragebogen"},
    // {url: "aktuelle-therapie", text: "Aktuelle Therapie"},
    // {url: "adl-handicaps", text: "ADL / Handicaps"},
    {url: "investigation", text: "Untersuchung"},
    // {url: "scores", text: "Scores"},
    // {url: "zusatzdiagnostik", text: "Zusatzdiagnostik"},
    // {url: "empfehlungen", text: "Empfehlungen"},
    {url: "medical-report", text: "Arztlicher Bericht"},
  ]
}
