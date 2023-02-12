import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/app.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  rawData: any;
  data: any;
  tagData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.getCore();
  }

  getCore() {
    this.rawData = [];
    this.apiService.getCore()
    .subscribe((result: any) => {
      if(result.length){
        this.data = result;
        for(var i=0; i<20; i++){
          this.rawData.push(this.data[i])
        }
      }
    })
  }
  tagDetails(index: any){
    this.tagData = {};
    this.tagData = this.rawData[index].Tags
  }

}
