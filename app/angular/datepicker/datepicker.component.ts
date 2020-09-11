import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./../../common/style.css']
})
export class DatepickerComponent implements OnInit {
  ob = "{"
  cb = "}";
  durationInSeconds = 5;
  minDate : any;
  maxDate : any;
  myDateVal : any;
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    const currentDate = new Date();
    this.minDate = new Date(currentDate.getFullYear(),currentDate.getMonth()-1 , 1);
    this.maxDate = currentDate;
  }

  dateFilter = date=>{
    var d = new Date(date);
    const day = d.getDay();
    return day!=0&&day!=6;
  }

  copyCode(id: any){
    var data = document.getElementById(id).innerText;
    this.service.copyCode(data);
  }

  openSnackBar(){
    this.service.openSnackBar();
  }

}
