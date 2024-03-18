import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { AllBooksComponent } from "./all-books/all-books.component";

const routes: Routes = [
  {
    path: "books",
    component: AllBooksComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class BooksRoutingModule {}
