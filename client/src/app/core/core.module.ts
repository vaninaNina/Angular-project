import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from "./error/error.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ErrorComponent],
})
export class CoreModule {}
