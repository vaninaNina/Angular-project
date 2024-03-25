import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { AllBooksComponent } from "./all-books/all-books.component";
import { BookComponent } from "./book/book.component";

const routes: Routes = [
  {
    path: "books",
    component: AllBooksComponent,
  },
  { path: ":bookId", component: BookComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class BooksRoutingModule {}
