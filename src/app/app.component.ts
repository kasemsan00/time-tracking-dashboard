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
      color: "hsl(15, 100%, 70%)",
      icon: "../assets/images/icon-work.svg",
    },
    {
      id: 1,
      title: "Play",
      time: "10hrs",
      active: "Last Week - 8hrs",
      color: "hsl(195, 74%, 62%)",
      icon: "../assets/images/icon-play.svg",
    },
    {
      id: 2,
      title: "Study",
      time: "4hrs",
      active: "Last Week - 7hrs",
      color: "hsl(348, 100%, 68%)",
      icon: "../assets/images/icon-study.svg",
    },
    {
      id: 3,
      title: "Exercise",
      time: "4hrs",
      active: "Last Week - 5hrs",
      color: "hsl(145, 58%, 55%)",
      icon: "../assets/images/icon-exercise.svg",
    },
    {
      id: 4,
      title: "Social",
      time: "5hrs",
      active: "Last Week - 10hrs",
      color: "hsl(264, 64%, 52%)",
      icon: "../assets/images/icon-social.svg",
    },

    {
      id: 5,
      title: "Self Care",
      time: "2hrs",
      active: "Last Week - 2hrs",
      color: "hsl(43, 84%, 65%)",
      icon: "../assets/images/icon-self-care.svg",
    },
  ];
}
