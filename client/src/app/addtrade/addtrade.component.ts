import { Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-addtrade',
  templateUrl: './addtrade.component.html',
  styleUrls: ['./addtrade.component.scss']
})
export class AddtradeComponent{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
