import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items:any

  constructor(private dataService: DataserviceService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.items = data;
    });
  }

  displayedColumns: string[] = ['tradeid', 'stake', 'payout', 'runs', 'lost', 'won', 'profit',
  'start', 'end', 'updated_at'];
}
