import { Component} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { DataserviceService } from '../dataservice.service';



@Component({
  selector: 'app-addtrade',
  templateUrl: './addtrade.component.html',
  styleUrls: ['./addtrade.component.scss']
})
export class AddtradeComponent{
  myForm: FormGroup|any;
  numFormControl = new FormControl('', [Validators.required]);
  myStake: number | any;
  myPayout: number | any;
  myRuns: number | any;
  myLost: number | any;
  myWon: number | any;
  myProfit: number | any;
  myStart: string | any;
  myEnd: string | any;

  constructor(private postService: DataserviceService) {}

  ngOnInit()
  {
    this.myForm = new FormGroup({
      myStake: new FormControl(''),
      myPayout: new FormControl(''),
      myRuns: new FormControl(''),
      myLost: new FormControl(''),
      myWon: new FormControl(''),
      myProfit: new FormControl(''),
      myStart: new FormControl(''),
      myEnd: new FormControl('')
    });
  }




  submitForm() {
    const formData = this.myForm.value;
    this.postService.postFormData(formData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }


}
