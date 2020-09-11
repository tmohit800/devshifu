import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(private service : CommonService,private _snackBar: MatSnackBar) { }
  ob = "{"
  cb = "}";
  durationInSeconds = 5;
  minDate : any;
  maxDate : any;
  myDateVal : any;

  ngOnInit(): void {
    const currentDate = new Date();
    this.minDate = new Date(currentDate.getFullYear(),currentDate.getMonth()-1 , 1);
    this.maxDate = currentDate;
  }

  copyCode(id: any) {
    var range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect 
    this.openSnackBar();
}

openSnackBar() {
  this._snackBar.open("Copied..", "Close", {
    duration: 2000,
  });
}

  setPage(page:any){
    this.service.setPage(page);
  }

  get page(){
    return this.service.getPage();
  }

  dateFilter = date=>{
    var d = new Date(date);
    const day = d.getDay();
    return day!=0&&day!=6;
  }

}
