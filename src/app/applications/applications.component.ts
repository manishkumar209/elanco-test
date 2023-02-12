import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/app.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  applicationsName = [];
  name: any;
  applicationsDetails = [];

  ngOnInit(){
    this.getApplications();
  }
  getApplications() {
    this.applicationsName = [];
    this.apiService.getApplications()
    .subscribe((result: any) => {
      this.applicationsName = result;
    })
  }
  getApplicationDetails(name: any){
    this.applicationsDetails = [];
    this.name = name;
    this.apiService.getApplication(name)
    .subscribe((result: any) => {
      this. applicationsDetails = result;
    })
  }
}
