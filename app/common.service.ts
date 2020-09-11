import { Injectable } from '@angular/core';
import * as Topics from './../assets/json/topic.json';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _snackBar : MatSnackBar) { 

  }
  TopicJson : any = JSON.parse(JSON.stringify(Topics)).default.subjects;
  topiclist: any;
  subject: any;
  page: any;
  rawlist: any;

  setSubject(subject: any){
    this.subject = subject;
    this.fetchTopicList(subject);
  }

  getSubject(){
    return this.subject;
  }

  setPage(page: any){
    this.page = page;
    localStorage.setItem("lastpage",this.getSubject()+","+page);
  }

  getPage(){
    return this.page;
  }

  fetchTopicList(subj: any){
    for(let sub of this.TopicJson){
      if(sub.subject.toUpperCase()==subj.toUpperCase()){
        this.rawlist = sub.topics;
        var item = localStorage.getItem("lastpage") != null && typeof (localStorage.getItem("lastpage")) != "undefined" ? localStorage.getItem("lastpage").split(",") : null;
        if (item != null&&subj.toUpperCase()==item[0].toUpperCase()) {
          this.setPage(item[1]);
        }
        else{
          this.setPage(this.rawlist[0].topic);
        }
        break;
      }
    }
    this.setTopiclist(this.rawlist);
  }

  setTopiclist(topiclist: any){
    this.topiclist = topiclist;
  }

  getTopicList(){
    return this.topiclist;
  }

  openSnackBar(){
    this._snackBar.open("Copied..", "Close", {
      duration: 2000,
    });
  }

  copyCode(data : any){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = data;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
