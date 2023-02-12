import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/app.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  Resources: any;
  name: any;
  resourceDetails: any;

  ngOnInit(){
    this.getResources();
  }
  getResources() {
    this.apiService.getResources()
    .subscribe((result: any) => {
      this.Resources = result;
    })
  }
  getResourceDetails(name: any) {
    this.resourceDetails = [];
    this.name = name;
    this.apiService.getResource(name)
    .subscribe((result: any) => {
      this. resourceDetails = result;
    })
  }
}
