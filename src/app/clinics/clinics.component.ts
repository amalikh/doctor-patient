import { Component, OnInit } from '@angular/core';
// import { GetDataService } from '../get-data.service';


@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {
  // dataapi:any;
  constructor(

    // private getdataservice: GetDataService
  ) { }

  ngOnInit(): void {

    // this.getdataservice.getData().subscribe((result) => {
    //   console.log("result", result)
    //   this.dataapi=result
    // })
  }


}
