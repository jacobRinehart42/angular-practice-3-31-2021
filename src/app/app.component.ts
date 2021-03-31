import { Component } from "@angular/core";
import { AccountService } from "./account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  accounts = [];

  constructor(private actService: AccountService) {}

  ngOnInit() {
    this.accounts = this.actService.accounts;
  }
}
