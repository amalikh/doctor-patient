import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { DashboardService } from "./services/dashboard.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
dataapi:any;
  constructor(
    private getdataservice: GetDataService
  ) { }

  ngOnInit() {
    this.getdataservice.getData().subscribe((result) => {
      console.log("result", result)
      this.dataapi=result
    })
  }

}
