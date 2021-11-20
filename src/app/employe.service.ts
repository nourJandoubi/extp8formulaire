import { Injectable } from '@angular/core';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private lesEmployes: Employe[] = [];
  getEmployes() {
    return this.lesEmployes;
  }

  existeMatricule(mat: number) {
  }

  addNewEmploye(emp: Employe) {   
  }
  constructor() { }
}
