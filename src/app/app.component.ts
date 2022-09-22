import { Component, VERSION, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  customers: Customer[];

  constructor(private service: CustomerService) {}

  getCustomers() {
    this.customers = this.service.getCustomers();
  }

  ngOnInit() {
    this.getCustomers();
  }
}
