import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChoiceListComponent } from "./choice-list/choice-list.component";
import { onClickDirective } from "./onClick.directive";

@NgModule({
  declarations: [AppComponent, ChoiceListComponent, onClickDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
