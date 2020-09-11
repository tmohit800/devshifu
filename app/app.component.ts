import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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
  item : any;
  ngtmd : boolean = false;
  constructor(private service: CommonService, private location: Location, private router: Router) {
  }
  ngOnInit(): void {
    this.subject = this.location.path().substring(1);
    if (this.subject != null && typeof this.subject != undefined && this.subject!='') {
      this.service.setSubject(this.subject.split("/")[0]);
    }
    else {
      this.service.setSubject("home");
    }
  }
  showHide() {
    this.show = !this.show;
  }
  changePage(page: any) {
    var topic = this.service.getSubject()=='home'?page:this.service.getSubject()+"/"+page;
    this.router.navigate([topic]);
    this.service.setPage(page);
  }
  nightmode(){
    this.ngtmd = !this.ngtmd;
  }
  get topiclist() {
    if(this.location.path().substring(1)=="home"){
      this.service.setSubject("home");
    }
    else{
      var val = this.location.path().substring(1).split("/")[0]
      if(val!=this.service.getSubject()){
        this.service.setSubject(val);
      }
    }
    return this.service.getTopicList();
  }
  get page(){
    return this.service.getPage();
  }
}
