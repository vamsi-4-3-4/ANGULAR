import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-classbinding',
  template: `
  <div>
  <p [class]="setclass">Do what is best for you</p>
  <p bind-class="setclass">You can't beat a person who never gives up</p>
  <p class={{setclass}}>Winners never quit quitters never win</p>
  <p [class.myclass]="switchbuttonon">When i lost my excuses i found my results</p>
  <p [class.myclassa]="switchbuttonoff">Your biggest risk will be the one you don't take</p>
  <p [ngClass]="multiple">When the world says "giveup" hope whispers "try one more time"</p>
  <p [ngClass]="multiple">No matter how you feel Get up,Dress up,Show up ,Never give up</p>
<p [ngClass]="multiplea">May be you stuck beacuse you are pushing a door thats says pull</p>
    </div>
  `,
  styles: [
    `
    .myclass{
      color:white;
    }
    .myclassa{
      color:blue;
    }
    .myclassc{
      color:yellow;
    }
    .color{
      color:gold;
    }
    .fontsize{
      font-size:30px;
    }
    .textstyle{
      font-style:italic;
    }
    .fontfamily{
      font-family:cookie;
    }
    .colora{
      color:red;
    }
    .fontsizea{
      font-size:20px;
    }
    `
  ]
})
export class ClassbindingComponent implements OnInit {
public setclass="myclass";
public switchbuttonon=true;
public switchbuttonoff=true;
public multiple={
  "color":this.switchbuttonon,
  "fontsize":this.switchbuttonon,
  "textstyle":this.switchbuttonon,
  "fontfamily":this.switchbuttonon
}
public multiplea={
"colora":this.switchbuttonon,
"fontsizea":this.switchbuttonon,
"textstyle":this.switchbuttonon,
"fontfamily":this.switchbuttonon

}
  constructor() { }
  ngOnInit(): void {
  }

}
