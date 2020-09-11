import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonService } from './common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devshifu';
  show: boolean = false;
  subject: any;
  counter = 0;
  constructor(private service: CommonService, private location: Location) {
  }
  ngOnInit(): void {
    this.subject = this.location.path().substring(1);
    if (this.subject != null && typeof this.subject != undefined && this.subject!='') {
      this.service.setSubject(this.subject);
    }
    else {
      this.service.setSubject("Home");
    }
  }
  showHide() {
    this.show = !this.show;
  }
  changePage(page: any) {
    this.service.setPage(page);
  }
  get topiclist() {
    if(this.location.path().substring(1)=="home"){
      this.service.setSubject("home");
    }
      return this.service.getTopicList();
  }
  get page(){
    return this.service.getPage();
  }
}
