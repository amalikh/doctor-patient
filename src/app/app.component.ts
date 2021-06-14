import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title and name are properties
  title = 'Doctor Patient';
  name = 'Guest';
  yourName='Tony';
  displayVal:string ='';

  constructor(){
  

  }
  // defining function below
  // getName(){
  //   return "Peter"
  // }
  // let suppose i want to return the name propperty in this function
  //we simply do
  // getName(){
  //   //this simply means this class
  //   return this.name
  // }
  // obj={
  //   name:'kely',
  //   age:20
  // }
  // arr=['bruce','tony','peter']
  //url of my current page
  // siteURL=window.location.href

// getName(){
//   alert("koopa strife")
// }

getName(name){
  alert(name)
}
myEvent(evt){
  console.warn(evt)
}

getValue(val:string){
  console.warn(val)
  this.displayVal=val
}
count=0;
counter(type:string){
  type==='add'?this.count++:this.count--;
}
}
