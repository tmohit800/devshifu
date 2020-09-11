import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-java-installation',
  templateUrl: './java-installation.component.html',
  styleUrls: ['./../../common/style.css']
})
export class JavaInstallationComponent implements OnInit {

  constructor(private service: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  goto(path: any){
    var tpath = this.service.getSubject()+"/"+path;
    this.service.setPage(path);
    this.router.navigate([tpath]);
  }

}
