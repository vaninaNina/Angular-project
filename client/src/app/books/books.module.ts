import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllBooksComponent } from "./all-books/all-books.component";
import { BooksRoutingModule } from "./books-routing.module";

@NgModule({
  declarations: [AllBooksComponent],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
