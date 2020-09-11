import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-paginate',
  template: `
  <h5>Pagination</h5>
  <p>Pagination are important part of design and development. There are times we have to show hundreds of records
      in a page, showing all data in one go looks very bad and also decrease performance. To solve this problem,
      we introduce pagination to handle records efficiently.
  <p>There are many ways to implement pagination, if you are using angular datatables, then datatable itself
      provide pagination and many other functionalities like searching, sorting, filtering and much more, if you
      are using angular material then material itself provides pagination using mat-paginator. If you are using
      bootstrap and want to implement pagination then ngx-pagination comes to aid.
  <p>Let's see how to implement pagination to Bootstrap tables.
  <ul>
      <li>First we create data for testing. Paste below code to your ts file.<br>
          <div class="jumbotron"><button (click)="copyCode('testingPaginator')" class="copyCodeBtn">Copy</button>
              <pre id="datepickerimport" id="testingPaginator" class="codePre">
  pageno : any = 1;
  itemPage : any = 10;
  data : any = [];
  ngOnInit(): void {{ob}} 
      for(let i=1; i&lt;=30; i++){{ob}}
      var obj = {{ob}}{{cb}};
      obj["id"]=i;
      obj["name"]="name is "+ i;
      this.data.push(obj);
      {{cb}}
  {{cb}}</pre>
          </div>Variable pageno and itemPage will be used for paginator.<br><br>
      <li>Paste below code in HTML and run the code.<div class="jumbotron"><button
                  (click)="copyCode('paginatorHTML')" class="copyCodeBtn">Copy</button>
              <pre id="datepickerimport" id="paginatorHTML" class="codePre">
  &lt;table class="table">
  &lt;thead>
      &lt;tr>
          &lt;th>ID&lt;/th>&lt;th>Name&lt;/th>
      &lt;/tr>
  &lt;/thead>
  &lt;tbody>
      &lt;tr *ngFor = "let obj of data | paginate: {{ob}}itemsPerPage: itemPage, currentPage: pageno{{cb}}">
          &lt;td>{{ob}}{{ob}}obj.id{{cb}}{{cb}}&lt;/td>
          &lt;td>{{ob}}{{ob}}obj.name{{cb}}{{cb}}&lt;/td>
      &lt;/tr>
  &lt;/tbody>
&lt;/table>
&lt;pagination-controls (pageChange)="pageno = $event">&lt;/pagination-controls></pre>
          </div><br><br>
  </ul>
  `,
  styleUrls: [
    "./../common/style.css"
  ]
})
export class PaginateComponent implements OnInit {

  ob = "{"
  cb = "}";
  constructor(private service: CommonService) { }

  ngOnInit(): void {
  }
  copyCode(id: any) {
    var data = document.getElementById(id).innerText;
    this.service.copyCode(data);
  }
  openSnackBar() {
    this.service.openSnackBar();
  }

}
