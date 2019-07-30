import { Component, OnChanges } from "@angular/core";
import { log } from "util";

@Component({
  selector: "app-choice-list",
  templateUrl: "./choice-list.component.html",
  styleUrls: ["./choice-list.component.css"]
})
export class ChoiceListComponent {
  choices = [
    { id: 1, choice: "gaming" },
    { id: 2, choice: "swimming" },
    { id: 3, choice: "skeeing" }
  ];

  choice: Number;

  getMyStyles(i) {
    let myStyles = {
      backgroundColor: this.choice === i ? "black" : "yellow"
    };
    return myStyles;
  }

  onClick(i) {
    this.choice = i;
  }
}
