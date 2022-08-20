import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
  <div>
  <h3>Interpolation Demo</h3>
    <p>
     {{myname}}
    </p>
    <p>{{"welcome"+myname}}</p>
    <p>{{myname.length}}</p>
    <p>{{myname.toUpperCase()}}</p>
    <p>{{myname.toLowerCase()}}</p>
    <p>{{username()}}</p>
    <p>{{username1()}}</p>
    <p>{{valuea+valueb}}</p>
    <p>{{valueb-valuea}}</p>
    <p>{{valueb*valuea}}</p>
    </div>
  `,
  styles: [
    `p{
      color:red;
      font-size:20px;
      border:outset red 3px;
      width:200px;
      background-color:black;
    }
    h3{
      text-align:center;
    }
    `
  ]
})
export class InterpolationComponent implements OnInit {
public myname="vamsi"
public valuea=100;
public valueb=200;
  constructor() { }
  ngOnInit(): void {
  }
username(){
  return "WELCOME"+this.myname;

}
username1(){
return "WELCOME"+" "+this.myname;
}
}
