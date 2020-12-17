import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppTableComponent } from "./app-table/app-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import {MatSortModule} from '@angular/material/sort';
import { DemoMaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent, AppTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    DemoMaterialModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
