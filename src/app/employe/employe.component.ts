import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  fonctions: string[] = ["Ingénieur", "Directeur", "PDG", "Secrétaire", "Technicien"];
  constructor(private employeService: EmployeService, private formBuilder: FormBuilder) { }
  employeForm: FormGroup;
  reset() {
    this.employeForm.patchValue({
      fonction: 'Secrétaire',
      dep: 'IT',
    });
  }
  onSubmit() { this.employeService.addNewEmploye(this.employeForm.value) }
  get matricule() {
    return this.employeForm.controls.matricule;
  }
  get nom() {
    return this.employeForm.controls.nom;
  }

  ngOnInit(): void {
    this.employeForm = this.formBuilder.group(
      {
        matricule: [0, [Validators.required,Validators.pattern('[1-9]{3}')]],
        nom: ['', [Validators.required, Validators.pattern('[A-Z][a-z]+( [A-Z][a-z]+)+')]],
        dep: ['IT'],
        fonction: ['Secrétaire'],
      }
    )
  }

}
