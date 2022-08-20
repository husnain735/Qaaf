import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }
  model: Item;
  colorCode = [];
  isColored: boolean = true;
  isNumberOfPiece: boolean = true;
  isGender: boolean = true;
  isStitched: boolean = true;
  ngOnInit(): void {
    this.colorCode = [
    {
      name: 'red',
      code:'#ff0000',
      isChecked: false
    },
    {
      name: 'navy',
      code:'#000080',
      isChecked: false
    },
    {
      name: 'green',
      code:'#008000',
      isChecked: false
    },
    {
      name: 'greenyellow',
      code:'#adff2f',
      isChecked: false
    },
    {
      name: 'grey',
      code:'#808080',
      isChecked: false
    },
    {
      name: 'black',
      code:'#000000',
      isChecked: false
    },
    {
      name: 'blue',
      code:'#0000ff',
      isChecked: false
    },
    {
      name: 'brown',
      code:'#a52a2a',
      isChecked: false
    },
    {
      name: 'yellow',
      code:'#ffff00',
      isChecked: false
    },
    {
      name: 'yellowgreen',
      code:'#9acd32',
      isChecked: false
    },
    {
      name: 'orange',
      code:'#ffa500',
      isChecked: false
    },
    {
      name: 'orangered',
      code:'#ff4500',
      isChecked: false
    },
    {
      name: 'orchid',
      code:'#ba70d6',
      isChecked: false
    },
    {
      name: 'olivedrab',
      code:'#6b8e23',
      isChecked: false
    },
    {
      name: 'wheat',
      code:'#f5deb3',
      isChecked: false
    },
    {
      name: 'white',
      code:'#ffffff',
      isChecked: false
    },
    {
      name: 'whitesmoke',
      code:'#f5f5f5',
      isChecked: false
    },
    {
      name: 'purple',
      code:'#800080',
      isChecked: false
    },
    {
      name: 'peru',
      code:'#cd853f',
      isChecked: false
    },
    {
      name: 'pink',
      code:'#ffc0cb',
      isChecked: false
    },
    {
      name: 'plum',
      code:'#dda0dd',
      isChecked: false
    },
    {
      name: 'burlywood',
      code:'#deb887',
      isChecked: false
    },
    {
      name: 'aqua',
      code:'#00ffff',
      isChecked: false
    },
    {
      name: 'skyblue',
      code:'#87ceeb',
      isChecked: false
    },
    {
      name: 'seagreen',
      code:'#2e8b57',
      isChecked: false
    }
  ]
  this.model = new Item();
  }
  
  
  checkedColorCode(code: string){
    var idx = this.colorCode.findIndex(a => a.isChecked == true);
    if (idx > -1) {
      this.colorCode[idx].isChecked = false;
      this.colorCode.forEach(item => {
        if (item.code == code) {
          item.isChecked = true;
          this.isColored = true;
        }
      });
    }else {
      this.colorCode.forEach(item => {
        if (item.code == code) {
          item.isChecked = true;
          this.isColored = true;
        }
      });
    }
  }
  checkCode(){
    var idx = this.colorCode.findIndex(a => a.isChecked == true);
    if (idx > -1) {
      this.isColored = true;
    }else{
      this.isColored = false;
    }

    if (this.model.GenderTypeId == undefined) {
      this.isGender = false;
    }else{
      this.isGender = true;
    }

    if (this.model.NumberOfPiece == undefined) {
      this.isNumberOfPiece = false;
    }else{
      this.isNumberOfPiece = true;
    }

    if (this.model.StitchTypeId == undefined) {
      this.isStitched = false;
    }else{
      this.isStitched = true;
    }

  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
