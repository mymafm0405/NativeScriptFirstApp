import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptModule,
} from "@nativescript/angular";

import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from "../../src/app/challenges/current-challenge/current-challenge.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule],
  declarations: [AppComponent, CurrentChallengeComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
