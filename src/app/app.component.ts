import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  currentName = "";

  setChallenge(name: string) {
    this.currentName = name;
  }
}
