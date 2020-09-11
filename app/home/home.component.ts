import { Component, OnInit } from '@angular/core';
import * as Subjects from './../../assets/json/subjects.json';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  subjects : any = null;
  constructor(private service: CommonService, private router: Router) { 
    this.subjects = JSON.parse(JSON.stringify(Subjects)).default.subjects;
  }

  ngOnInit(): void{
  }

  route(topic: any){
    this.service.setSubject(topic);
    this.router.navigate([topic]);
}

}
