import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllBooksComponent } from "./all-books/all-books.component";
import { BooksRoutingModule } from "./books-routing.module";
import { BookComponent } from "./book/book.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AllBooksComponent, BookComponent],
  imports: [CommonModule, BooksRoutingModule, RouterModule],
})
export class BooksModule {}
