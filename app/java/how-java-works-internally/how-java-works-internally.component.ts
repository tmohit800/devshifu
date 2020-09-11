import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-how-java-works-internally',
  templateUrl: './how-java-works-internally.component.html',
  styleUrls: ["./../../common/style.css"]
})
export class HowJavaWorksInternallyComponent implements OnInit {

  constructor(private service: CommonService) { }

  ngOnInit(): void {
  }

}
