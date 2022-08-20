<div class="myapp">
<h1>HELLO ANGULAR</h1>
<div class="hello">
  hello world class
</div>
//__________________________________________________________________________________________________________________________
//way one
 //FOR
 
  /*
  import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
  */

  <div class="app-engineer hello"></div>
  <div class="app-engineer"></div>
  //----------------------------------------------------------------------------------------------------
  //SECOND WAY TO IMPORT THE COMPONENT
  //FOR
  /*
  
  import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-doctor]',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

 */
  
  
<div app-doctor></div>
<div app-doctor></div>
  //______________________________________________________________________________________
  //WAY-3
 //FOR
  /*
  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

*/
//WE HAVE TO IMPORT LIKE THIS  
  
  

<app-student></app-student>
<app-test></app-test>
</div>
