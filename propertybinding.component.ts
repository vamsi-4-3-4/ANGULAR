import { Component, OnInit } from '@angular/core';


//use the below line to get the value while inspecting IN THE CONSOLE
//<input type="string" value="welcome to angular"/>
//$0.getAttribute('value')
//$0.value
//CONSOLE OUTPUT IS
//'welcome to angular'
//text-box input=vamsi
//$0.value
//vamsi
//attribute values will notchange but the dom values will change
//PROPERTYBINDING
//<input [id]=input_id type="string" value="welcome to angular"/>
//public input_id="inputids"
//BROWSERCODE:
//<input _ngcontent-kng-c19="" type="string" value="welcome to angular" id="inputids"> 
//PROPERTY BINDING THROUGH INTERPOLATION
//public input_id_two="inputids_two"
//<input id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>
//BROWSER CODE:
//<input _ngcontent-tux-c19="" type="string" value="welcome to ANGULAR" id="inputids_two">
//BOOLEAN VALUES ARE NOT SUPPORTED IN PROPERTY BINDING THROUGH INTERPOLATION
//EXAMPLE 
//applying diasabled value to the form
//<input disabled id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>
//now the input will get disabled in the UI
//if we try to apply false to enable it,it never gets enabled
//<input disabled="false" id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>
// to get enable that we have to  do the property binding
//<input [disabled]="false" id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>
//ANOTHER WAY TO DO THE PROPERTY BINDING
//<input bind-disabled="handledisable" id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>


@Component({
  selector: 'app-propertybiding',
  template: `
  <div>
  

<input [id]=input_id type="string" value="welcome to angular"/>
<input id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>
<input disabled id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>
<input [disabled]="false" id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>
<input bind-disabled="handledisable" id="{{input_id_two}}" type="string" value="welcome to ANGULAR"/>


    </div>
  `,
  styles: [
    `
    `
  ]
})
export class PropertybindingComponent implements OnInit {
public input_id="inputids"
public input_id_two="inputids_two"
public handledisable=false;
  constructor() { }
  ngOnInit(): void {
  }

}
