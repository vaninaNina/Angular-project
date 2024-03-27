import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UserModule } from "./user/user.module";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { BooksModule } from "./books/books.module";
import { CoreModule } from "./core/core.module";
import { PostsModule } from "./posts/posts.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    UserModule,
    CoreModule,
    AppRoutingModule,
    BooksModule,
    PostsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
