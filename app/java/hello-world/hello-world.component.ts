import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./../../common/style.css']
})
export class HelloWorldComponent implements OnInit {

  ob="{";
  cb="}";
  constructor(private service: CommonService) { }

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
