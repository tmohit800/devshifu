import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./../../common/style.css']
})
export class MultiSelectDropdownComponent implements OnInit {

  constructor(private service : CommonService) { }
  ob = "{"
  cb = "}";
  ngOnInit(): void {
  }

  copyCode(id: any){
    var data = document.getElementById(id).innerText;
    this.service.copyCode(data);
  }

  openSnackBar(){
    this.service.openSnackBar();
  }
}
