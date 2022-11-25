import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface IUser {
  name: string;
  address: string;
  dob: string;
  role: string;
  phone: string;
  gender: string;
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor(private router: Router) {
    this.user = {} as IUser;
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
      ]),
      address: new FormControl(this.user.address, [
        Validators.required,
      ]),
      dob: new FormControl(this.user.dob, [
        Validators.required,
      ]),
      role: new FormControl(this.user.role, [
        Validators.required,
      ]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
      gender: new FormControl(this.user.gender, [
        Validators.required
      ]),
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }
  get address() {
    return this.reactiveForm.get('address')!;
  }
  get dob() {
    return this.reactiveForm.get('dob')!;
  }
  get role() {
    return this.reactiveForm.get('role')!;
  }
  get phone() {
    return this.reactiveForm.get('phone')!;
  }
  get gender() {
    return this.reactiveForm.get('gender')!;
  }
  clearForm() {
    this.user.name = '';
    this.user.address = '';
    this.user.dob = '';
    this.user.role = '';
    this.user.phone = '';
    this.user.gender = '';
  }
  validate() {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
    }
    this.user = this.reactiveForm.value;
    localStorage.setItem("EmpValue", JSON.stringify(this.user))
    this.reactiveForm.reset();
  }

  nextPage() {
    this.router.navigateByUrl('/emp-list');
  }
}