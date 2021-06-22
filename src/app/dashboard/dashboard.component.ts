import { Component } from '@angular/core';
// import { GetDataService } from '../get-data.service';
// import { FormBuilder, FormGroup } from "@angular/forms";
// import { ClinicModel } from "../clinic.model";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent {
  // dataapi!: any;
  // formValue !: FormGroup;
  // clinicModelObj: ClinicModel = new ClinicModel();
  // collection: [];
  // showAdd!: boolean;
  // showUpdate !: boolean;
  constructor(
    // private getdataservice: GetDataService,
    // private formbuilder: FormBuilder
  ) { }

  ngOnInit() {

    // this.formValue = this.formbuilder.group({
    //   name: [''],
    //   location: [''],
    //   telephone: [''],
    //   time: [''],
    //   email: ['']
    // })
    // this.getData()
  }
  // clickAdd() {
  //   this.formValue.reset();
  //   this.showAdd = true;
  //   this.showUpdate = false;
  // }
  // getData() {
  //   this.getdataservice.getData()
  //     .subscribe(res => {
  //       this.dataapi = res;
  //       console.log("result is", res)
  //     })
  // }

  // postClinic() {

  //   this.clinicModelObj.clname = this.formValue.value.name;
  //   this.clinicModelObj.cllocation = this.formValue.value.location;
  //   this.clinicModelObj.cltelephone = this.formValue.value.telephone;
  //   this.clinicModelObj.cltime = this.formValue.value.time;
  //   this.clinicModelObj.clemail = this.formValue.value.email;

  //   this.getdataservice.postClinic(this.clinicModelObj).subscribe(res => {
  //     console.log(res);
  //     alert("clinic added successfully")
  //     let ref = document.getElementById("cancel")
  //     ref?.click();
  //     this.formValue.reset();
  //     this.getData();
  //   },
  //     error => {
  //       alert("something went wrong")
  //     })
  // }

  // deleteCli(row: any) {
  //   console.log("id is " + row.clid.ID)
  //   // if (window.confirm('Are u sure, u want to delete?')) {
  //   // this.getdataservice.deleteClinic(clinic).subscribe(res =>{
  //   //   console.log(res)
  //   //    this.getData()
  //   // })
  //   // }

  //   this.getdataservice.deleteClinic(row.clid.ID).subscribe(res => {
  //     console.log(res)
  //     this.getData()
  //   })
  // }
  // onEdit(row: any) {
  //   this.showAdd = false;
  //   this.showUpdate = true;
  //   this.clinicModelObj.clid = row.clid.ID;
  //   this.formValue.controls['name'].setValue(row.clname);
  //   this.formValue.controls['location'].setValue(row.cllocation);
  //   this.formValue.controls['telephone'].setValue(row.cltelephone);
  //   this.formValue.controls['time'].setValue(row.cltime);
  //   this.formValue.controls['email'].setValue(row.clemail);
  // }

  // updateClinic() {
  //   this.clinicModelObj.clname = this.formValue.value.name;
  //   this.clinicModelObj.cllocation = this.formValue.value.location;
  //   this.clinicModelObj.cltelephone = this.formValue.value.telephone;
  //   this.clinicModelObj.cltime = this.formValue.value.time;
  //   this.clinicModelObj.clemail = this.formValue.value.email;
  //   this.getdataservice.updateClinic(this.clinicModelObj, this.clinicModelObj.clid).subscribe(res => {
  //     alert("Updated Successfully");
  //     let ref = document.getElementById('cancel')
  //     ref?.click();
  //     this.formValue.reset();
  //     this.getData();
  //   })
  // }


}


