import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AllBooksComponent } from "./all-books/all-books.component";
import { BookComponent } from "./book/book.component";

const routes: Routes = [
  {
    path: "",
    component: AllBooksComponent,
  },
  { path: ":bookId", component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
