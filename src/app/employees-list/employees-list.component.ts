import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  empData: any;

  constructor(private router: Router) {
  }
  ngOnInit() {
    // loadData() {
    let data: any = localStorage.getItem('EmpValue');
    this.empData = JSON.parse(data)
    console.log("data", data);
    // }
  }
  home() {
    this.router.navigateByUrl('');
  }
}
