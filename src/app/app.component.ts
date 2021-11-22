import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  challenges: string[] = [];

  setChallenge(name: string) {
    this.challenges.push(name);
  }
}
