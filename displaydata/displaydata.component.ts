import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  tabledata:any;

  constructor(private table:TableService) { }

  ngOnInit(): void {
    this.table.getdata().subscribe(data=>{
      console.log(data);
      this.tabledata=data;
    },
    error=>{
      console.log(error);
    }
    )
  }

}
