import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "time-tracking-dashboard";
  dashboardItems = [
    {
      id: 0,
      title: "Work",
      time: "32hrs",
      active: "Last Week - 36hrs",
    },
    {
      id: 1,
      title: "Play",
      time: "10hrs",
      active: "Last Week - 8hrs",
    },
    {
      id: 2,
      title: "Study",
      time: "4hrs",
      active: "Last Week - 7hrs",
    },
    {
      id: 3,
      title: "Exercise",
      time: "4hrs",
      active: "Last Week - 5hrs",
    },
    {
      id: 4,
      title: "Social",
      time: "5hrs",
      active: "Last Week - 10hrs",
    },

    {
      id: 5,
      title: "Self Care",
      time: "2hrs",
      active: "Last Week - 2hrs",
    },
  ];
}
