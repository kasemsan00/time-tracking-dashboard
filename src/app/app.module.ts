import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  private dashboardJSON = [
    {
      id: 0,
      title: 'Work',
      time: '32hrs',
      active: 'Last Week - 36hrs',
    },
    {
      id: 1,
      title: 'Play',
      time: '10hrs',
      active: 'Last Week - 8hrs',
    },
    {
      id: 2,
      title: 'Study',
      time: '4hrs',
      active: 'Last Week - 7hrs',
    },
    {
      id: 3,
      title: 'Exercise',
      time: '4hrs',
      active: 'Last Week - 5hrs',
    },
    {
      id: 4,
      title: 'Social',
      time: '5hrs',
      active: 'Last Week - 10hrs',
    },

    {
      id: 5,
      title: 'Self Care',
      time: '2hrs',
      active: 'Last Week - 2hrs',
    },
  ];
}
