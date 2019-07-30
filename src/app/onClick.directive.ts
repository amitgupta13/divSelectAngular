import {
  Directive,
  HostBinding,
  OnInit,
  Input,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[onClickDirective]"
})
export class onClickDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("click") onClick(eventData: Event) {
    if (this.backgroundColor === this.highlightColor) {
      this.backgroundColor = this.defaultColor;
    } else {
      this.backgroundColor = this.highlightColor;
    }
  }
}
