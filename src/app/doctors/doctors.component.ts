import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorModel } from "./doctor.model";
import { DoctorsService } from "./doctors.service";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  dataapi!: any;
  dataapiclinic!:any;
  showAdd!: boolean;
  showUpdate !: boolean;
  formValue !: FormGroup;
  doctorModelObj: DoctorModel = new DoctorModel();
  selectedValue;
  constructor(
    private getdataservice: GetDataService,
    private getdoctorservice: DoctorsService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname:[''],
      email:[''],
      mobile:[''],
      location: [''],
      qualification: [''],
      cnic: [''],
      clinicid: ['']
    })
    this.getData()
    this.getClinicData()
  }
selected(event){
  // this.clinicid.setValue(event.target.value,{onlyself:true})
  this.clinicID.setValue(event.target.value,{onlyself:true})
console.log("the clinic id is "+ this.formValue.value.clinicid)
  this.selectedValue = this.formValue.value.clinicid
  console.log(this.selectedValue)
}
  clickAdd() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
// Getter method to access formcontrols
get clinicID() {
  return this.formValue.get('clinicid');
}
  get getControl() {
    return this.formValue.controls;
  }
  onSubmit() {
    console.log(this.formValue);
  }

  getData() {
    this.getdoctorservice.getDoctors()
      .subscribe(res => {
        this.dataapi = res;
        console.log("result is", res)
        // console.log(res[1])
      })
  }
  getClinicData() {
    this.getdataservice.getData()
      .subscribe(res => {
        this.dataapiclinic = res;
        console.log("result is", res)
      })
  }

  postDoctor() {

    this.doctorModelObj.docfirstname = this.formValue.value.firstname;
    this.doctorModelObj.doclastname = this.formValue.value.lastname;
    this.doctorModelObj.docemail = this.formValue.value.email;
    this.doctorModelObj.docmobile = this.formValue.value.mobile;
    this.doctorModelObj.doclocation = this.formValue.value.location;
    this.doctorModelObj.docqualification = this.formValue.value.qualification;
    this.doctorModelObj.doccnic = this.formValue.value.cnic;
    this.doctorModelObj.clinicid = this.formValue.value.clinicid;

    this.getdoctorservice.postDoctor(this.doctorModelObj).subscribe(res => {
      console.log(res);
      alert("Doctor added successfully" + this.doctorModelObj.clinicid)
      let ref = document.getElementById("cancel")
      ref?.click();
      // this.formValue.reset();
      this.getData();
    },
      error => {
        alert("something went wrong")
      })
  }

  deleteDoctor(row: any) {
    console.log("id is " + row.did.ID)

    this.getdoctorservice.deleteDoctor(row.did.ID).subscribe(res => {
      console.log(res)
      this.getData()
    })

    // if (window.confirm('Are u sure, u want to delete?')) {
      // console.log(res)
      // for (let i=0; i<res.length; i++){
      //   let id = res[i].did.ID
      //   console.log(id)
      // }
      
      // this.getData()
    // , (error) => {
      
    //   console.log(error)
    // }
    
  // }
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.doctorModelObj.did = row.did.ID;
    this.formValue.controls['firstname'].setValue(row.docfirstname);
    this.formValue.controls['lastname'].setValue(row.doclastname);
    this.formValue.controls['email'].setValue(row.docemail);
    this.formValue.controls['mobile'].setValue(row.docmobile);
    this.formValue.controls['location'].setValue(row.doclocation);
    this.formValue.controls['qualification'].setValue(row.docqualification);
    this.formValue.controls['cnic'].setValue(row.doccnic);
    this.formValue.controls['clinicid'].setValue(row.cid);
  }

  updateDoctor() {
    this.doctorModelObj.docfirstname = this.formValue.value.firstname;
    this.doctorModelObj.doclastname = this.formValue.value.lastname;
    this.doctorModelObj.docemail = this.formValue.value.email;
    this.doctorModelObj.docmobile = this.formValue.value.mobile;
    this.doctorModelObj.doclocation = this.formValue.value.location;
    this.doctorModelObj.docqualification = this.formValue.value.qualification;
    this.doctorModelObj.doccnic = this.formValue.value.cnic;
    this.doctorModelObj.clinicid = this.formValue.value.clinicid;

    this.getdoctorservice.updateDoctor(this.doctorModelObj, this.doctorModelObj.did).subscribe(res => {
      alert("Updated Successfully" + this.doctorModelObj.did);
      console.log(res)
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getData();
    })
  }
}
