import { Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-addtrade',
  templateUrl: './addtrade.component.html',
  styleUrls: ['./addtrade.component.scss']
})
export class AddtradeComponent{
  numFormControl = new FormControl('', [Validators.required]);
  myStake: number | any;
  myPayout: number | any;
  myRuns: number | any;
  myLost: number | any;
  myWon: number | any;
  myProfit: number | any;
  myStart: string | any;
  myEnd: string | any;

}
