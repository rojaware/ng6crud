import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService) { 
    this.reload();
  }

  ngOnInit() {
     this.reload();
  }
  reload() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
        this.adunits = data;
      });
  }
  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
    this.reload();
  }
}
