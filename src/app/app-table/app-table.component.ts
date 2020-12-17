import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from "@angular/core";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
import {MatSort} from '@angular/material/sort';

@Component({
  selector: "app-table",
  templateUrl: "./app-table.component.html",
  styleUrls: ["./app-table.component.css"]
})
export class AppTableComponent implements AfterViewInit {

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  @Output("onAction") emitter = new EventEmitter();
  @Input("data") dataSource = [];
  @Input () set data(data:any[]){
    this.set(data);
  }
  @Input("cols") tableCols = [];
  dataSourceTable = new MatTableDataSource<any>();

  // We will need this getter to exctract keys from tableCols
  get keys() {
    return this.tableCols.map(({ key }) => key);
  }
  set(data){
    this.dataSourceTable.data = data;
  }
  constructor(){
 
  }
  ngAfterViewInit() {
    this.dataSourceTable.sort = this.sort;
    this.dataSourceTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTable.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceTable.paginator) {
      this.dataSourceTable.paginator.firstPage();
    }
  }

  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt, column) {
    return column.config.values[`${elt[column.key]}`];
  }
}
