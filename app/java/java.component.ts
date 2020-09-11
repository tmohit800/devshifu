import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  constructor(private service: CommonService) { }

  topics : any;
  topic : any = "";
  openBrace = "{"
  closeBrace = "}";
  ngOnInit(): void {
  }

  setPage(page:any){
    this.service.setPage(page);
  }

  get page(){
    return this.service.getPage();
  }

}
