import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { MainComponent } from "./core/main/main.component";
import { UserModule } from "./user/user.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [BrowserModule, SharedModule, UserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
